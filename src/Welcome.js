import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import {randInt} from "three/src/math/MathUtils";

function Box() {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.x += delta))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            position={[3-(Math.random()*6), 3-(Math.random()*6), 3-(Math.random()*6)]}
            ref={ref}
            scale={0.1 + (Math.random() * 0.5)}
            // onClick={(event) => click(!clicked)}
            // onPointerOver={(event) => (event.stopPropagation(), hover(true))}
            // onPointerOut={(event) => hover(false)}
            >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={Math.random() < 0.5 ? 'dodgerblue' : 'grey'} />
        </mesh>
    )
}

function Lights() {
    return (
        <group>
            <pointLight intensity={5} position={[0,0,0]}/>
            <ambientLight intensity={2} />
            <spotLight
                castShadow
                intensity={1}
                angle={Math.PI / 7}
                position={[100, 100, 100]}
                penumbra={1}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />
        </group>
    )
}

export default function Welcome() {
    return (
        <Canvas>
            <Lights />
            <Box  /><Box  /><Box  /><Box  /><Box  /><Box  /><Box  /><Box  /><Box  /><Box  /><Box  />
            {/*<OrbitControls />*/}
        </Canvas>
    )
}
