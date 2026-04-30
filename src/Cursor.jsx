import { useCursor } from './hooks/useCursor'

export default function Cursor() {
  const { dotRef, ringRef, hovered } = useCursor()

  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] mix-blend-screen"
        style={{
          width: hovered ? 0 : 8,
          height: hovered ? 0 : 8,
          background: '#A8FF78',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.25s, height 0.25s',
          boxShadow: '0 0 8px #A8FF78',
        }}
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] mix-blend-screen"
        style={{
          width: hovered ? 52 : 34,
          height: hovered ? 52 : 34,
          border: `1.5px solid rgba(168,255,120,${hovered ? 0.7 : 0.35})`,
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s cubic-bezier(0.16,1,0.3,1), height 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s',
        }}
      />
    </>
  )
}
