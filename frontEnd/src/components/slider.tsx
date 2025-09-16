import { motion, AnimatePresence } from "framer-motion";
import React, {useRef, useState, useImperativeHandle, forwardRef, AnimationEventHandler} from 'react'

type sliderProps = {
  content?: any
  index?: number | string
  pos?: number | string
  animatePos?: number | string
} & React.ComponentProps<typeof motion.div>;


const Slider = forwardRef<HTMLDivElement, sliderProps>((sliderProps, ref) => {
    const { content, index, pos, animatePos, ...rest } = sliderProps
  return (
    
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: animatePos, opacity: 1 }}
      exit={{x:pos, opacity: 0}}
      {...rest}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      ref={ref}
    >
      {content}
    </motion.div>
    
  );
});

export default Slider;
