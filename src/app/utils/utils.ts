export class Utils {
  static isElementInView(element, fullyInView) {
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

  static isElementInTarget(element) {
    const target = $(window).scrollTop() + $(window).height() / 2
    const elementTop = $(element).offset().top
    const elementBottom = elementTop + $(element).height()

    return target >= elementTop && target <= elementBottom
  }
}
