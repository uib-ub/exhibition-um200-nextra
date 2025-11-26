'use client';
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const LottieAnimation = ({ animation }: { animation: string }) => {
  return (
    <DotLottieReact
      src={`/animations/${animation}.json`}
      autoplay
    />
  );
};