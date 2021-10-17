import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { UserStatusService } from './user-status.service';
const { ethereum }: any = window;

@Injectable({
  providedIn: 'root',
})
export class EthersService {
  public provider: ethers.providers.Web3Provider = null as any;
  public signer: ethers.providers.JsonRpcSigner;
  public haveConnected: BehaviorSubject<{ provider; signer }> =
    new BehaviorSubject(null);

  constructor(
    private userStatus: UserStatusService,
    private toast: ToastrService
  ) {}

  public async connect() {
    await this.initListeners();
    await this.approve();
  }

  public async initListeners() {
    //@ts-ignore
    ethereum.on('accountsChanged', async (accounts) => {
      await this.connect();
    });
    //@ts-ignore
    ethereum.on('connect', function (connectInfo) {
     // console.log(connectInfo);
    });

    //@ts-ignore
    ethereum.on('disconnect', function (disconnectInfo) {
      //console.log(disconnectInfo);
    });
    //@ts-ignore
    ethereum.on('chainChanged', async (chainId) => {
      await this.detectAnSetNetwork(this.provider);
    });
  }

  public async approve() {
    try {
      this.provider = new ethers.providers.Web3Provider(ethereum);
      this.signer = this.provider.getSigner();
      let activeAccountArray = await this.provider.listAccounts();
      if (activeAccountArray.length > 0) {
        this.userStatus.isConnected = true;
        this.userStatus.connectedAddress = activeAccountArray[0];
        await this.detectAnSetNetwork(this.provider);
      } else {
        this.userStatus.isConnected = false;
        this.userStatus.connectedAddress = '';
        await this.provider.send('eth_requestAccounts', []);
        await this.connect();
      }

     // console.log(await this.signer.getAddress());
      //console.log((await this.signer.getBalance()).toString());
      //console.log(this.provider.network.name);
      if (this.provider && this.signer) {
        this.haveConnected.next({
          provider: this.provider,
          signer: this.signer,
        });
      }
    } catch (error) {
      //console.error('Error => ', error);
      this.haveConnected.error(error);
    }
  }

  private async detectAnSetNetwork(provider: ethers.providers.Web3Provider) {
    let network = await provider.detectNetwork();
    this.userStatus.setNetworkName(network.name);
    if (network.name != 'bnb') {
      this.toast.warning(
        'In order to interact with the presale you must connecto the BSC.',
        'Wrong network'
      );
    }
  }
}
