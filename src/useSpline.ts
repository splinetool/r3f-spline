import SplineLoader from '@splinetool/loader'
import { useGraph, useLoader } from '@react-three/fiber'

export default function useSpline(url: string) {
  const scene = useLoader(SplineLoader, url)
  return useGraph(scene)
}
