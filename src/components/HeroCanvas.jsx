import { useEffect, useMemo, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Line, Sparkles } from "@react-three/drei"

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    const onChange = (e) => setReduced(e.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  return reduced
}

function NetworkNodes() {
  const group = useRef(null)

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.08
      group.current.rotation.x += delta * 0.015
    }
  })

  const nodes = useMemo(() => {
    const pts = []
    for (let i = 0; i < 22; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2.3
      pts.push([
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      ])
    }
    return pts
  }, [])

  const edges = useMemo(() => {
    const lines = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const [x1, y1, z1] = nodes[i]
        const [x2, y2, z2] = nodes[j]
        const dist = Math.hypot(x1 - x2, y1 - y2, z1 - z2)
        if (dist < 1.55) lines.push([nodes[i], nodes[j]])
      }
    }
    return lines
  }, [nodes])

  return (
    <group ref={group}>
      {edges.map((points, i) => (
        <Line key={i} points={points} color="#67d4ff" transparent opacity={0.18} lineWidth={1} />
      ))}
      {nodes.map((position, i) => (
        <mesh key={i} position={position}>
          <sphereGeometry args={[0.032, 8, 8]} />
          <meshBasicMaterial color="#9fe6ff" transparent opacity={0.85} />
        </mesh>
      ))}
    </group>
  )
}

function HeroCanvas() {
  const reducedMotion = usePrefersReducedMotion()
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setEnabled(window.innerWidth >= 480)
  }, [])

  if (reducedMotion || !enabled) return null

  return (
    <div className="hero-canvas" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        <NetworkNodes />
        <Sparkles count={36} scale={5.5} size={1.3} speed={0.25} color="#67d4ff" opacity={0.35} />
      </Canvas>
    </div>
  )
}

export default HeroCanvas
