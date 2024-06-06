/* eslint-disable no-unused-vars */

// Slide animations
export const slideFromLeft = (x = 100) => {
   return {
      hidden: { opacity: 0, x: x },
      visible: { opacity: 1, x: 0 },
   }
}

export const slideFromRight = (x = -100) => {
   return {
      hidden: { opacity: 0, x: x },
      visible: { opacity: 1, x: 0 },
   }
}

export const slideFromTop = (y = -100) => {
   return {
      hidden: { opacity: 0, y: y },
      visible: { opacity: 1, y: 0 },
   }
}

export const slideFromBottom = (y = 100) => {
   return {
      hidden: { opacity: 0, y: y },
      visible: { opacity: 1, y: 0 },
   }
}

// Scale animations
export const scaleUp = (scaleValue = 0.6) => {
   return {
      hidden: { opacity: 0, scale: scaleValue },
      visible: { opacity: 1, scale: 1 },
   }
}

export const scaleDown = (scaleValue = 1.4) => {
   return {
      hidden: { opacity: 0, scale: scaleValue },
      visible: { opacity: 1, scale: 1 },
   }
}

// Opacity animations
export const fadeIn = () => {
   return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
   }
}

export const fadeOut = () => {
   return {
      hidden: { opacity: 1 },
      visible: { opacity: 0 },
   }
}

// Rotate animations
export const rotateIn = (angle = 90) => {
   return {
      hidden: { opacity: 0, rotate: angle },
      visible: { opacity: 1, rotate: 0 },
   }
}

export const rotateOut = (angle = 90) => {
   return {
      hidden: { opacity: 1, rotate: 0 },
      visible: { opacity: 0, rotate: angle },
   }
}

// Complex animations
export const zoomInRotate = () => {
   return {
      hidden: { opacity: 0, scale: 0.6, rotate: 45 },
      visible: { opacity: 1, scale: 1, rotate: 0 },
   }
}

export const slideAndFade = (x = 100) => {
   return {
      hidden: { opacity: 0, x: x },
      visible: { opacity: 1, x: 0 },
   }
}

export const bounce = () => {
   return {
      hidden: { opacity: 0, y: -50 },
      visible: {
         opacity: 1,
         y: [0, -20, 0],
         transition: {
            type: "spring",
            stiffness: 300,
            damping: 20
         }
      },
   }
}

export const scale = () => {
   return {
      hidden: { opacity: 0, scale: 0.6 },
      visible: { opacity: 1, scale: 1 },
   }
}

export const opacity = () => {
   return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
   }
}