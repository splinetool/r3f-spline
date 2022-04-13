[![](https://raw.githubusercontent.com/splinetool/react-spline/main/.github/screenshots/hero.png)](https://my.spline.design/splinereactlogocopycopy-eaa074bf6b2cc82d870c96e262a625ae/)

# r3f-spline

**r3f-spline** is a React hook that lets you use your Spline scene with [react-three-fiber](https://github.com/pmndrs/react-three-fiber).

🌈 [Spline](https://spline.design/) is a friendly 3d collaborative design tool for the web.

[Website](https://spline.design/) &mdash;
[Twitter](https://twitter.com/splinetool) &mdash;
[Community](https://discord.gg/M9hNDMqvnw) &mdash;
[Documentation](https://docs.spline.design/)

## Install

```bash
yarn add @splinetool/r3f-spline @splinetool/loader
```

or

```bash
npm install @splinetool/r3f-spline @splinetool/loader
```

**NOTE**: make sure you also install the `@react-three/fiber` and `three` dependencies.

## Usage

```jsx
import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/2fzdsSVagfszNxsd/scene.spline')

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Rectangle.geometry} material={materials['Rectangle Material']} />
    </group>
  )
}
```

## Examples
