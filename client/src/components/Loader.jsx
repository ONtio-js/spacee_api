import React from 'react'

const Loader = () => {
    return (
          <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: 'auto', background: 'transparent', display: 'block' }} width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, index) => (
              <g key={index} transform={`rotate(${angle} 50 50)`}>
                <rect x="47" y="24" rx="2.52" ry="2.52" width="6" height="12" fill="#FF55BB">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin={`${-angle / 360}s`} repeatCount="indefinite" />
                </rect>
              </g>
            ))}
          </svg>
    )
}

export default Loader