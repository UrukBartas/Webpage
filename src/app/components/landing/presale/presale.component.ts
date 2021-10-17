import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { ethers } from 'ethers'
import { EthersService } from '../../../services/ethers.service'
import abiPresale from '../../../contracts/presale/abi.json'
import abiERC20 from '../../../contracts/erc20/abi.json'
import moment from 'moment'
import { environment } from '../../../../environments/environment'
import { ToastrService } from 'ngx-toastr'
import detectEthereumProvider from '@metamask/detect-provider'
import { UserStatusService } from '../../../services/user-status.service'

require('jquery-countdown')

@Component({
  selector: 'app-presale',
  templateUrl: './presale.component.html',
  styleUrls: ['./presale.component.scss'],
})
export class PresaleComponent implements AfterViewInit {
  public percentageValue = 0
  private presaleContract
  private erc20Contract
  public finishingTime: Date
  public amountOfTokensLeftToSell: number = 0
  public connectedUserAmountOfTokens: number = 0
  public raisedAmountOfBnb: number
  public whitelisted: boolean

  @ViewChild('presaleInput') private input

  constructor(public userStatus: UserStatusService, private ethersService: EthersService, private toast: ToastrService) {}

  async ngOnInit() {
    this.checkMetamaskInstalled()
  }

  private async checkMetamaskInstalled() {
    const provider = await detectEthereumProvider()
    if (provider) {
      this.ethersService.connect()
      this.waitEthersConnection()
    } else {
      this.toast.warning('Missing Metamask', 'Please install MetaMask!')
    }
  }

  private waitEthersConnection() {
    this.ethersService.haveConnected.subscribe((data) => {
      if (data != null) {
        this.presaleContract = new ethers.Contract(environment.deployedPresaleAddressTestnet, abiPresale as any, this.ethersService.signer)
        this.erc20Contract = new ethers.Contract(environment.deployedErc20AddressTestnet, abiERC20, this.ethersService.signer)
        this.calculateSalePercentageLeft()
        this.getClosingTime()
        this.suckItLikeTheMoleSister()
        setInterval(() => {
          this.suckItLikeTheMoleSister()
        }, 5000)
      }
    })
  }

  private suckItLikeTheMoleSister(): void {
    this.getUrukTokensOfPresale()
    this.getAmountOfBnbRaisedSoFar()
    this.checkUserIsWhitelisted()
  }

  private async checkUserIsWhitelisted() {
    const isWhitelisted = await this.presaleContract.isWhitelisted(this.ethersService.signer.getAddress())
    console.log(isWhitelisted)
    this.whitelisted = isWhitelisted
  }

  private calculateSalePercentageLeft() {
    setInterval(() => {
      if (this.amountOfTokensLeftToSell == 0) {
        this.percentageValue = 0
      } else {
        this.percentageValue = 100 - this.percentage(this.amountOfTokensLeftToSell, environment.maxTokensToBeSold)
      }
    }, 500)
  }

  private async getClosingTime() {
    let res = await this.presaleContract.closingTime()
    res = res.toString()
    this.finishingTime = moment(Number(res) * 1000).toDate()
    this.initPresaleCountdown()
  }

  private async getUrukTokensOfPresale() {
    let balance = await this.erc20Contract.balanceOf(environment.deployedPresaleAddressTestnet)
    this.amountOfTokensLeftToSell = Number(ethers.utils.formatEther(balance).toString())

    let balanceUser = await this.erc20Contract.balanceOf(this.ethersService.signer.getAddress())
    this.connectedUserAmountOfTokens = Number(ethers.utils.formatEther(balanceUser).toString())
  }

  private async getAmountOfBnbRaisedSoFar() {
    let balanceBNB = await this.presaleContract.weiRaised()
    this.raisedAmountOfBnb = Number(ethers.utils.formatEther(balanceBNB.toString()))
  }

  ngAfterViewInit() {}

  private initPresaleCountdown() {
    ;(<any>$('#presale-countdown')).countdown(this.finishingTime, function (event) {
      $('#presale-countdown').text(event.strftime('Time left: %H:%M:%S'))
    })
  }

  public checkInputValue(event) {
    if (event.key === 'Enter') {
      this.buy()
    }
  }

  public async buy() {
    const value = this.input.nativeElement.value
    const parsedValue = Number.parseFloat(value)
    if (parsedValue) {
      try {
        let tx = await this.presaleContract.buyTokens(this.ethersService.signer.getAddress(), {
          value: ethers.utils.parseEther(parsedValue.toString()),
        })
        this.toast.info('hash: ' + tx.hash, 'Sent transaction')
        let endTx = await tx.wait()
        let tokenPurchasedEvent = endTx?.events?.find((event) => event.event == 'TokensPurchased')
        if (tokenPurchasedEvent) {
          let tokenAmountBought = tokenPurchasedEvent.args[3].toString()
          let parsedAmountOfTokens = Number(ethers.utils.formatEther(tokenAmountBought))
          this.toast.success('You just bought ' + parsedAmountOfTokens + ' $URUK tokens', 'Congratulations')
        } else {
          this.toast.info('But you did not receive any token', 'Tx went trough')
        }
        this.suckItLikeTheMoleSister()
      } catch (error) {
        console.log(error)
        if (error.data?.code === 3) {
          this.toast.warning("Sorry you're not whitelisted 😢.")
        } else if (error.data?.code === -32000) {
          this.toast.error('Insufficient funds.')
        } else {
          this.toast.error(error.message, 'Ups, something is not working.')
        }
      }
    }
  }

  private percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue
  }
}
