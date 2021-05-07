import React, { useState, useEffect } from 'react';

const MouseTracker: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('mousemove', updatePosition)
    return () => {
      document.removeEventListener('mousemove', updatePosition)
    }
  }, [])

  return <p>X: {position.x}, Y: {position.y}</p>
}

export default MouseTracker;