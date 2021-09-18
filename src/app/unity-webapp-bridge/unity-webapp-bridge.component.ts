import { Component, OnInit } from '@angular/core';
import { ethers } from 'ethers';
import { UserStatusService } from '../services/user-status.service';

const { ethereum }: any = window;

@Component({
  selector: 'app-unity-webapp-bridge',
  templateUrl: './unity-webapp-bridge.component.html',
  styleUrls: ['./unity-webapp-bridge.component.scss'],
})
export class UnityWebappBridgeComponent implements OnInit {
  private provider: ethers.providers.Web3Provider = null as any;

  constructor(private userStatus: UserStatusService) {}

  ngOnInit(): void {
    this.initBridge();
  }

  private async initBridge() {
    //@ts-ignore
    ethereum.on('accountsChanged', async (accounts) => {
      await this.connect();
    });
    //@ts-ignore
    ethereum.on('connect', function (connectInfo) {
      console.log(connectInfo);
    });

    //@ts-ignore
    ethereum.on('disconnect', function (disconnectInfo) {
      console.log(disconnectInfo);
    });
    //@ts-ignore
    ethereum.on('chainChanged', async (chainId) => {
      await this.detectAnSetNetwork(this.provider);
    });

    await this.connect();
  }

  public async connect() {
    try {
      this.provider = new ethers.providers.Web3Provider(ethereum);
      const signer = this.provider.getSigner();
      let activeAccountArray = await this.provider.listAccounts();
      if (activeAccountArray.length > 0) {
        this.userStatus.isConnected = true;
        this.userStatus.connectedAddress = activeAccountArray[0];
        await this.detectAnSetNetwork(this.provider);
        this.userStatus.setAddressToUnity();
      } else {
        this.userStatus.isConnected = false;
        this.userStatus.connectedAddress = '';
        await this.provider.send('eth_requestAccounts', []);
        await this.connect();
      }

      console.log(await signer.getAddress());
      console.log((await signer.getBalance()).toString());
      console.log(this.provider.network.name);
    } catch (error) {
      console.error('Error => ', error);
    }
  }

  private async detectAnSetNetwork(provider: ethers.providers.Web3Provider) {
    let network = await provider.detectNetwork();
    this.userStatus.setNetworkName(network.name);
  }
}
