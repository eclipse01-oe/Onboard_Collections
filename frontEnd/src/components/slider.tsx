import { motion, AnimatePresence } from "framer-motion";
import React, {useRef, useState, useImperativeHandle, forwardRef, AnimationEventHandler} from 'react'

type sliderProps = {
    content?: any
    index?: number | string
    pos?: number | string
    animatePos?: number | string
    imgDivClassName?: AnimationEventHandler<HTMLDivElement>
}

const Slider = forwardRef<HTMLDivElement, sliderProps>((sliderProps, ref) => {
    const { content, index, pos, animatePos, imgDivClassName } = sliderProps
    const exitProps = pos ? {exit: { x: -pos, opacity: 0 }} : {}
  return (
    
    <motion.div
      key={index}
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: animatePos, opacity: 1 }}
      {...exitProps}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      {...imgDivClassName}
      ref={ref}
    >
      {content}
    </motion.div>
    
  );
});

export default Slider;
