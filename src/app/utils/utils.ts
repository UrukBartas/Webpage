export class Utils {
  static isElementInView(element: any, fullyInView: any) {
    const pageTop = $(window).scrollTop()
    const pageBottom = pageTop + $(window).height()
    const elementTop = $(element).offset().top
    const elementBottom = elementTop + $(element).height()

    if (fullyInView === true) {
      return pageTop < elementTop && pageBottom > elementBottom
    } else {
      return elementTop <= pageBottom && elementBottom >= pageTop
    }
  }
}
