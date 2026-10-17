const shapes = [
  { kind: 'ring', top: '10%', left: '6%', size: 90, color: '#38bdf8', dur: 24, delay: 0 },
  { kind: 'code', text: '</>', top: '18%', left: '78%', size: 44, color: '#a78bfa', dur: 20, delay: -4 },
  { kind: 'square', top: '30%', left: '88%', size: 56, color: '#f472b6', dur: 28, delay: -8 },
  { kind: 'code', text: '{ }', top: '42%', left: '4%', size: 40, color: '#fbbf24', dur: 26, delay: -2 },
  { kind: 'ring', top: '55%', left: '90%', size: 70, color: '#38bdf8', dur: 30, delay: -12 },
  { kind: 'code', text: '=>', top: '68%', left: '10%', size: 36, color: '#f472b6', dur: 22, delay: -6 },
  { kind: 'square', top: '78%', left: '72%', size: 80, color: '#a78bfa', dur: 32, delay: -10 },
  { kind: 'code', text: '( )', top: '88%', left: '40%', size: 38, color: '#38bdf8', dur: 24, delay: -14 },
  { kind: 'code', text: '+', top: '6%', left: '45%', size: 34, color: '#fbbf24', dur: 18, delay: -3 },
  { kind: 'ring', top: '92%', left: '88%', size: 50, color: '#f472b6', dur: 26, delay: -9 },
]

function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="bg-blob b1" />
      <div className="bg-blob b2" />
      <div className="bg-blob b3" />
      <div className="bg-shapes">
        {shapes.map((shape, index) => {
          const style = {
            top: shape.top,
            left: shape.left,
            color: shape.color,
            '--dur': `${shape.dur}s`,
            '--delay': `${shape.delay}s`,
            ...(shape.kind === 'code'
              ? { fontSize: shape.size }
              : { width: shape.size, height: shape.size }),
          }

          return (
            <span key={index} className={`bg-shape ${shape.kind}`} style={style}>
              {shape.kind === 'code' ? shape.text : null}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default Background