import SplineLoader from '@splinetool/loader'
import { useLoader } from '@react-three/fiber'

export default function useSpline(url: string) {
  return useLoader(SplineLoader, url)
}
