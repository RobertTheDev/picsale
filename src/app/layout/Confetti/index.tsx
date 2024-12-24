'use client';

import ReactConfetti from 'react-confetti';

export default function Confetti() {
  return (
    <ReactConfetti
      colors={['#ed1f35', '#fee008']}
      friction={0.99}
      gravity={0.5}
      height={window.innerHeight}
      initialVelocityX={4}
      initialVelocityY={10}
      numberOfPieces={400}
      onConfettiComplete={undefined}
      opacity={1}
      recycle={false}
      run={true}
      tweenDuration={5000}
      width={window.innerWidth}
      wind={0}
    />
  );
}
