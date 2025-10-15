'use client'

export default function OctagonGrid() {
  return (
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="octagon" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <polygon 
              points="30,10 70,10 90,30 90,70 70,90 30,90 10,70 10,30" 
              fill="none" 
              stroke="rgba(255,69,0,0.3)" 
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#octagon)" />
      </svg>
    </div>
  )
}
