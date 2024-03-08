import { FileSaver } from "file-saver";

export class Utils {
  static isElementInView(element, fullyInView) {
    const pageTop = window.scrollY;
    const pageBottom = pageTop + window.innerHeight;
    const elementRect = element.getBoundingClientRect();
    const elementTop = elementRect.top + pageTop;
    const elementBottom = elementTop + elementRect.height;

    if (fullyInView === true) {
      return pageTop < elementTop && pageBottom > elementBottom;
    } else {
      return elementTop <= pageBottom && elementBottom >= pageTop;
    }
  }

  static isElementInTarget(element) {
    const target = window.scrollY + window.innerHeight / 2;
    const elementRect = element.getBoundingClientRect();
    const elementTop = elementRect.top + window.scrollY;
    const elementBottom = elementTop + elementRect.height;

    return target >= elementTop && target <= elementBottom;
  }
  
  static downloadWhitepaper() {
    const pdfUrl = './assets/whitepaper/Uruk Bartas - Whitepaper.pdf';
    const pdfName = 'Whitepaper-UrukBartas';
    FileSaver.saveAs(pdfUrl, pdfName);
  }
}

