import React, { useEffect, useRef, useState } from 'react'

export default function Valentine() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const noRef = useRef<HTMLButtonElement | null>(null)
  const [step, setStep] = useState<number>(0) // 0: intro, 1: question, 2: reveal
  const [noStyle, setNoStyle] = useState({ left: '50%', top: '65%' })

  useEffect(() => {
    if (step === 1) moveNoButton()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step])

  function clamp(v: number, a: number, b: number) {
    return Math.max(a, Math.min(b, v))
  }

  function moveNoButton() {
    const container = containerRef.current
    const btn = noRef.current
    if (!container || !btn) return
    const cRect = container.getBoundingClientRect()
    const bRect = btn.getBoundingClientRect()
    const padding = 12
    const maxX = Math.max(0, cRect.width - bRect.width - padding)
    const maxY = Math.max(0, cRect.height - bRect.height - padding)
    const x = clamp(Math.random() * maxX, 0, maxX)
    const y = clamp(Math.random() * maxY, 0, maxY)
    setNoStyle({ left: `${x}px`, top: `${y}px` })
  }

  return (
    <div className="valentine-container" ref={containerRef}>
      {step === 0 && (
        <div className="intro">
          <h1>Hi Baobao</h1>
          <h1> I have something to ask you?</h1>
          <div style={{ marginTop: 14 }}>
            <button className="yes" onClick={() => setStep(1)}>
              Next
            </button>
          </div>
        </div>
      )}

      {step === 1 && (
        <>
          <h1>Will you be my Valentine?</h1>
          <div className="button-area">
            <button className="yes" onClick={() => setStep(2)}>
              Yes
            </button>

            <button
              ref={noRef}
              className="no"
              style={{ position: 'absolute', ...noStyle }}
              onMouseEnter={moveNoButton}
              onMouseMove={moveNoButton}
              onPointerDown={(e) => {
                e.preventDefault()
                moveNoButton()
              }}
              onClick={(e) => e.preventDefault()}
              tabIndex={-1}
            >
              No
            </button>
          </div>
        </>
      )}

      {step === 2 && (
        <div className="message final">
          <div className="final-image" aria-hidden>
            <img
              src="https://media.giphy.com/media/NxC8VtyxqhMtpLoEEN/giphy.gif"
              alt="Happy teddy bear"
              width={160}
              height={160}
            />
          </div>
          <h2>That was a tough choice =P</h2>
          <p>I'm happy you said yes! Text me and I'll give you the details</p>
        </div>
      )}
    </div>
  )
}
