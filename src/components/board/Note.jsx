import React, { useState } from 'react'
import { motion } from "framer-motion";

export default function Note({index, data}) {
  return (
    <motion.textarea
    key={index}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={`w-[300px] h-[300px] flex items-center justify-center rounded-md font-FuzzyBubblesRegular`}
    style={{
      filter: 'drop-shadow(0 4px 4px rgba(0,0,0,0.25))',
      backgroundColor: data.color,
      padding: '20px',
      fontSize: '40px',
      outline: 'none',
      caret: 'none',
      textWrap: 'pretty',
      overflow: 'clip',
    }}
  >
    </motion.textarea>
)
}
