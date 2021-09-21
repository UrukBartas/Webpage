import { Injectable } from '@angular/core';
declare var require: any;
const FileSaver = require('file-saver');
@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public downloadWhitepaper() {
    const pdfUrl = './assets/whitepaper/Uruk Bartas -  Whitepaper.pdf';
    const pdfName = 'Whitepaper-UrukBartas';
    FileSaver.saveAs(pdfUrl, pdfName);
  }
}
