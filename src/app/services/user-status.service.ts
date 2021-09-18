import { Injectable } from '@angular/core';
import { ethers } from 'ethers';

@Injectable({
  providedIn: 'root',
})
export class UserStatusService {
  public isConnected = false;
  public networkIsCompatible = false;
  private networNamekConnectedTo: string = '';
  private compatibleNetworks: Array<string> = ['bnbt', 'bnb'];
  public connectedAddress:string="";
  public unityInstance:any=null;
  constructor() {}

  public setNetworkName(name: string) {
    if (this.compatibleNetworks.includes(name)) {
      this.networNamekConnectedTo = name;
      this.networkIsCompatible = true;
    } else {
      this.networkIsCompatible = false;
      throw new Error(`The network ${name} is not supported.`);
    }
  }

  public isValid():boolean{
    return this.isConnected && this.networkIsCompatible && this.connectedAddress!=""
  }

  public setAddressToUnity(){
    setTimeout(() => {
      this.unityInstance.SendMessage(
        'Controller',
        'setUsserAddress',
        this.isValid()
          ? this.connectedAddress
          : 'Not connected'
      );
    }, 0);
  }
}
