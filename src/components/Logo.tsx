import React from 'react';

interface LogoProps {
  className?: string;
  theme?: 'light' | 'dark';
  height?: number | string;
}

export default function Logo({ className = '', theme, height = 32 }: LogoProps) {
  // Map theme prop to text color, letting the SVG fill-currentColor inherit correctly
  const textColorClass = theme === 'light' ? 'text-gray-950' : theme === 'dark' ? 'text-white' : 'text-current';

  return (
    <svg
      viewBox="0 0 182.93 82.39"
      className={`h-auto fill-current select-none transition-colors duration-300 ${textColorClass} ${className}`}
      style={{ height }}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bernadette Levera Logo"
    >
      <g id="Layer_3">
        {/* Stylized 'B' part of the monogram */}
        <g>
          <path
            fill="currentColor"
            d="M59.25,56.75l10.5,9.6c-3.33,4.07-7.47,7.17-12.4,9.3c-4.93,2.14-10.47,3.2-16.6,3.2c-5.4,0-10.42-0.88-15.05-2.65c-4.63-1.76-8.65-4.28-12.05-7.55c-3.4-3.26-6.05-7.1-7.95-11.5c-1.9-4.4-2.85-9.23-2.85-14.5c0-5.26,0.95-10.1,2.85-14.5c1.9-4.4,4.57-8.23,8-11.5c3.43-3.26,7.47-5.78,12.1-7.55c4.63-1.76,9.65-2.65,15.05-2.65c6.07,0,11.57,1.05,16.5,3.15s9.07,5.19,12.4,9.25l-10.5,9.6c-2.33-2.73-4.98-4.8-7.95-6.2c-0.62-0.29-1.24-0.55-1.88-0.77c-2.43-0.89-5.02-1.33-7.77-1.33c-3.09,0-5.93,0.49-8.53,1.47c-0.16,0.06-0.32,0.12-0.47,0.18c-2.73,1.1-5.1,2.65-7.1,4.65s-3.55,4.37-4.65,7.1c-1.1,2.74-1.65,5.77-1.65,9.1c0,3.34,0.55,6.37,1.65,9.1c1.1,2.74,2.65,5.1,4.65,7.1s4.37,3.55,7.1,4.65c0.15,0.06,0.31,0.12,0.47,0.18c2.6,0.98,5.44,1.47,8.53,1.47c2.75,0,5.34-0.45,7.77-1.36c0.64-0.22,1.26-0.49,1.88-0.79C54.27,61.57,56.92,59.49,59.25,56.75z"
          />
        </g>

        {/* Stylized 'L' part of the monogram */}
        <polyline
          fill="currentColor"
          points="90.11,20.64 90.11,7.64 125.96,7.64 160.76,50.11 160.76,7.64 176.76,7.64 176.76,77.64 163.36,77.64 116.98,20.64 125.59,20.64 136.18,20.64"
        />

        {/* L Accent block 1 */}
        <rect
          x="41.65"
          y="35.74"
          width="31.18"
          height="12.7"
          fill="currentColor"
        />

        {/* L Accent block 2 */}
        <rect
          x="90.11"
          y="35.74"
          width="31.18"
          height="12.7"
          fill="currentColor"
        />

        {/* Vertical intersecting accent bar */}
        <polygon
          fill="#327AFC"
          points="88.32,7.64 88.32,77.64 72.12,77.64 72.69,7.64"
          className="drop-shadow-[0_0_8px_rgba(50,122,252,0.35)]"
        />

        {/* Horizontal intersecting accent block */}
        <rect
          x="85.7"
          y="64.64"
          width="41.19"
          height="13"
          fill="#327AFC"
          className="drop-shadow-[0_0_8px_rgba(50,122,252,0.35)]"
        />

        {/* Glowing brand dot accent */}
        <path
          fill="#327AFC"
          d="M139.94,64.64h0.28c3.59,0,6.5,2.91,6.5,6.5v0c0,3.59-2.91,6.5-6.5,6.5h-0.28c-3.59,0-6.5-2.91-6.5-6.5v0C133.44,67.55,136.35,64.64,139.94,64.64z"
          className="drop-shadow-[0_0_8px_rgba(50,122,252,0.35)]"
        />
      </g>
    </svg>
  );
}

