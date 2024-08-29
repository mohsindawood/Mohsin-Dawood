// components/LoadingBorderBox.jsx
import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const loadingVariants = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 2,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
};

const LoadingBorderBox = () => {
  return (
    <Box
      sx={{
        width: 200,
        height: 200,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 1,
      }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: 1,
          border: '2px solid transparent',
          borderColor: 'blue',
          boxSizing: 'border-box',
        }}>
        <motion.div
          variants={loadingVariants}
          animate='animate'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: 1,
            border: '2px solid blue',
            borderColor: 'transparent',
            borderTopColor: 'blue',
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent',
            transformOrigin: '0 0',
          }}
        />
      </Box>
    </Box>
  );
};

export default LoadingBorderBox;
