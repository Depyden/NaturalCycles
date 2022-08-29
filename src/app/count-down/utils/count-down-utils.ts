import { ElementRef } from '@angular/core'

const MIN_FONT_SIZE = 12
const MIN_LINE_HEIGHT = 12

export const setElementStyles = (element: ElementRef) => {
  if (element) {
    if (element.nativeElement.style.fontSize !== '') {
      const multiplyLevel =
        element.nativeElement.offsetParent.offsetWidth /
        element.nativeElement.clientWidth
      const newFontSize =
        Number(element.nativeElement.style.fontSize.split('px')[0]) *
        multiplyLevel
      const newLineHeight =
        Number(element.nativeElement.style.lineHeight.split('px')[0]) *
        multiplyLevel
      element.nativeElement.style.fontSize = `${newFontSize}px`
      element.nativeElement.style.lineHeight = `${newLineHeight}px`
    } else {
      element.nativeElement.style.fontSize = `${MIN_FONT_SIZE}px`
      element.nativeElement.style.lineHeight = `${MIN_LINE_HEIGHT}px`
    }
  }
}
