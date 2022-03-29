import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import useSpline from '../src/useSpline'

export default function App() {
  return (
    <Canvas shadows dpr={[1, 1.5]} camera={{ position: [-25, 5, 125], near: 0.01 }}>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}

function Scene() {
  const result = useSpline('https://prod.spline.design/Ms8MisSQZCaX4PgL/scene.spline')

  console.log(result)

  return null
}
