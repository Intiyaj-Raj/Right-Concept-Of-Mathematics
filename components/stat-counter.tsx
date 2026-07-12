'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

export function StatCounter({ end, suffix = '', duration = 2.5, className = '' }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <span ref={ref} className={className}>
      {inView ? <CountUp end={end} duration={duration} suffix={suffix} /> : `0${suffix}`}
    </span>
  );
}
