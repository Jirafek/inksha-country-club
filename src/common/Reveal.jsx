/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react"
import { m, useAnimation, useInView } from "framer-motion"
import { GenerateRandom8Numbers } from 'utils/helpers'

const variant = {
   hidden: { opacity: 0, y: 50 },
   visible: { opacity: 1, y: 0 },
}

export const Reveal = ({
   children,
   delay = 0.25,
   duration = 0.5,
   variants = variant,
   componentKey = GenerateRandom8Numbers()
}) => {
   const ref = useRef(null)
   const isInView = useInView(ref, { once: true })
   const animation = useAnimation()

   useEffect(() => {
      if (isInView) {
         animation.start("visible")
      }
   }, [isInView, animation])

   return (
      <div ref={ref}>
         <m.div
            variants={variants}
            initial="hidden"
            animate={animation}
            transition={{ duration: duration, delay: delay }}
         >
            {children}
         </m.div>
      </div>
   )
}

export default Reveal
