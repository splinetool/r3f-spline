import SplineLoader from '@splinetool/loader'
import { useGraph, useLoader } from '@react-three/fiber'
import type { Object3D } from 'three'

type Output = {
  nodes: Record<string, any>
  materials: Record<string, any>
}

export default function useSpline(url: string): Output {
  const scene = useLoader(SplineLoader, url)
  return useGraph(scene as unknown as Object3D)
}
