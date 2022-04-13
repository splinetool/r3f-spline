import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import useSpline from '../src/useSpline'
import { OrbitControls, OrthographicCamera, Sky, useHelper } from '@react-three/drei'

export default function App() {
  return (
    <Canvas shadows dpr={[1, 2]} flat linear>
      <Suspense fallback={null}>
        <OrbitControls />
        <Scene />
      </Suspense>
    </Canvas>
  )
}

function Scene(props) {
  const { nodes, materials } = useSpline('https://prod.spline.design/JOgoI55ADZgorWoy/scene.spline')
  console.log({ nodes, materials })

  return (
    <>
      <color attach="background" args={['#FFE8DC']} />
      <group {...props} dispose={null}>
        <directionalLight
          castShadow
          intensity={0.6}
          position={[18.54, 196.55, 491.49]}
          rotation={[-0.38, 0.04, -0.09]}
          shadow-camera-far={5000}
          shadow-camera-left={-1000}
          shadow-camera-right={1000}
          shadow-camera-top={1000}
          shadow-camera-bottom={-1000}
        />
        <OrthographicCamera
          makeDefault
          far={50000}
          near={-50000}
          position={[421.6, -431.22, 801.18]}
          rotation={[0.45, 0.44, -0.2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus.geometry}
          material={nodes.Torus.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Rectangle 6'].geometry}
          material={nodes['Rectangle 6'].material}
          position={[-700.64, 343.77, -621.72]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Rectangle 5'].geometry}
          material={nodes['Rectangle 5'].material}
          position={[-458.87, 411.05, -435.92]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Rectangle 4'].geometry}
          material={nodes['Rectangle 4'].material}
          position={[40.66, 47, -435.92]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Rectangle 3'].geometry}
          material={nodes['Rectangle 3'].material}
          position={[-348.74, -162.23, -167.36]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Rectangle 2'].geometry}
          material={nodes['Rectangle 2'].material}
          position={[242.6, 207, -273.39]}
        />
      </group>
    </>
  )
}
