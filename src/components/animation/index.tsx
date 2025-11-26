'use client';
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import animation from './hoved.json'

export const Animation = () => {
  return (
    <DotLottieReact
      data={animation}
      autoplay
    />
  );
};