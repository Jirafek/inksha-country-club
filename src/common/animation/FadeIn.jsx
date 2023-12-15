import { m } from 'framer-motion'
const FadeIn = ({ duration = 0.7, children, className = '', style = '', onClick = null }) => {
   return (
      <m.div
         className={className}
         onClick={onClick}
         style={style}
         transition={{ duration: duration, ease: 'easeInOut' }}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}>{children}</m.div>
   )
}

export default FadeIn