import React, { useState, useEffect, useRef, useContext } from "react";
import { ThemeContext } from '../App';

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)

  const domRef = useRef<HTMLInputElement>(null)

  const { color, backgroundColor } = useContext(ThemeContext)
  const style = {
    color,
    backgroundColor
  }

  useEffect(() => {
    document.title = `点击了${like}次`
  }, [like])

  useEffect(() => {
    if (domRef && domRef.current) {
      domRef.current.focus()
    }
  }, [like])

  return (
    <>
      <button style={style} onClick={() => { setLike(like + 1) }}>
        {like}❥
      </button>
      <button onClick={() => { setOn(!on) }}>
        {on ? 'On' : 'Off'}
      </button>
      <input type="text" ref={domRef} />
    </>
  )
}

export default LikeButton;