import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      'Hi, my name is Ganzorig',
      'guy-who-loves-learning-things',
      '<ButLovesToCodeMore',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return <div>{text}</div>;
}
