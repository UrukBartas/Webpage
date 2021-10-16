import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { ethers } from 'ethers'
import { UserStatusService } from '../../../services/user-status.service'
import PresaleContract from '../../../../contracts/UrukPresale'
const { ethereum }: any = window

require('jquery-countdown')

@Component({
  selector: 'app-presale',
  templateUrl: './presale.component.html',
  styleUrls: ['./presale.component.scss'],
})
export class PresaleComponent implements AfterViewInit {
  private provider: ethers.providers.Web3Provider = null
  public percentage = 0
  public tokensAmount = 0

  @ViewChild('presaleInput') private input

  constructor(private userStatus: UserStatusService) {
    this.connect()
    setInterval(() => {
      this.percentage = this.percentage >= 100 ? 0 : this.percentage + 1
    }, 500)
  }

  ngAfterViewInit() {
    ;(<any>$('#presale-countdown')).countdown('2021/10/17', function (event) {
      $('#presale-countdown').text(event.strftime('Time left: %H:%M:%S'))
    })
  }

  public async connect() {
    try {
      this.provider = new ethers.providers.Web3Provider(ethereum)
      const signer = this.provider.getSigner()
      let activeAccountArray = await this.provider.listAccounts()
      if (activeAccountArray.length > 0) {
        this.userStatus.isConnected = true
        this.userStatus.connectedAddress = activeAccountArray[0]
        await this.detectAnSetNetwork(this.provider)
        console.log(this.userStatus)
        console.log(PresaleContract)
      } else {
        this.userStatus.isConnected = false
        this.userStatus.connectedAddress = ''
        await this.provider.send('eth_requestAccounts', [])
        await this.connect()
      }

      console.log(await signer.getAddress())
      console.log((await signer.getBalance()).toString())
      console.log(this.provider.network.name)
    } catch (error) {
      console.error('Error => ', error)
    }
  }

  private async detectAnSetNetwork(provider: ethers.providers.Web3Provider) {
    let network = await provider.detectNetwork()
    this.userStatus.setNetworkName(network.name)
  }

  public checkInputValue(event) {
    if (event.key === 'Enter') {
      this.buy()
    } else {
      const value = this.input.nativeElement.value
      if (Number.parseFloat(value)) {
        if (value > 4) {
          this.input.nativeElement.value = 4
        }
        if (value < 0.5) {
          this.input.nativeElement.value = 0.5
        }
      }
    }
  }

  public buy() {
    const value = this.input.nativeElement.value
    const parsedValue = Number.parseFloat(value)
    if (parsedValue) {
      if (parsedValue <= 4 && parsedValue >= 0.5) {
        console.log('Okay')
      }
    }
  }
}
