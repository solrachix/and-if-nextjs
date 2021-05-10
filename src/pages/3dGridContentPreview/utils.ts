// const imagesLoaded = require('imagesloaded')

// Map number x from range [a, b] to [c, d]
const map = (x: number, a: number, b: number, c: number, d: number): number =>
  ((x - a) * (d - c)) / (b - a) + c

// Linear interpolation
const lerp = (a: number, b: number, n: number): number => (1 - n) * a + n * b

const calcWinsize = (): { width: number; height: number } => {
  return { width: window.innerWidth, height: window.innerHeight }
}

const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min)

// Gets the mouse position
const getMousePos = (
  e
): {
  x: number
  y: number
} => {
  return {
    x: e.clientX,
    y: e.clientY
  }
}

// Preload images
// const preloadImages = selector => {
//   return new Promise((resolve, reject) => {
//     imagesLoaded(
//       document.querySelectorAll(selector),
//       { background: true },
//       resolve
//   })
// }

/**
 * Gets computed translate values
 * @param {HTMLElement} element
 * @returns {Object}
 */
const getTranslateValues = element => {
  const style = window.getComputedStyle(element)
  const matrix = style.transform || style.webkitTransform || style.mozTransform

  // No transform property. Simply return 0 values.
  if (matrix === 'none' || typeof matrix === 'undefined') {
    return {
      x: 0,
      y: 0,
      z: 0
    }
  }

  // Can either be 2d or 3d transform
  const matrixType = matrix.includes('3d') ? '3d' : '2d'
  const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ')

  // 2d matrices have 6 values
  // Last 2 values are X and Y.
  // 2d matrices does not have Z value.
  if (matrixType === '2d') {
    return {
      x: matrixValues[4],
      y: matrixValues[5],
      z: 0
    }
  }

  // 3d matrices have 16 values
  // The 13th, 14th, and 15th values are X, Y, and Z
  if (matrixType === '3d') {
    return {
      x: matrixValues[12],
      y: matrixValues[13],
      z: matrixValues[14]
    }
  }
}

export {
  map,
  lerp,
  calcWinsize,
  getRandomNumber,
  getMousePos,
  // preloadImages,
  getTranslateValues
}
