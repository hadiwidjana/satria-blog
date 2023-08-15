import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import {randInt} from "three/src/math/MathUtils";

function Box({x, y, z, size, color}) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
        ref.current.rotation.x += delta;
        ref.current.rotation.y += delta;
    })
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            position={[x, y, z]}
            ref={ref}
            scale={size}
            // onClick={(event) => click(!clicked)}
            // onPointerOver={(event) => (event.stopPropagation(), hover(true))}
            // onPointerOut={(event) => hover(false)}
            >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={color===1 ? 'dodgerblue' : 'grey'} />
        </mesh>
    )
}

function Lights() {
    return (
        <group>
            <pointLight intensity={20} position={[0,0,5]}/>
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

export default function Boxes() {
    return (
        <Canvas>
            <Lights />
            <Box x={-0.8} y={0} z={1} size={0.1} color={1}/>
            <Box x={-1.5} y={1} z={0} size={0.2} color={2}/>
            <Box x={-0.6} y={1} z={-2} size={0.5} color={1}/>
            <Box x={-2} y={-1} z={1} size={1} color={2}/>
            <Box x={0.2} y={2.2} z={0} size={0.2} color={1}/>
            <Box x={2.2} y={0} z={-1} size={0.8} color={2}/>
            <Box x={1.4} y={2} z={2} size={0.1} color={1}/>
            <Box x={-1.2} y={2} z={1.2} size={0.6} color={2}/>
            <Box x={0.4} y={-1} z={2.6} size={0.8} color={1}/>
            <Box x={2} y={1} z={1.5} size={0.3} color={2}/>
            <Box x={1.2} y={-1} z={2.3} size={0.5} color={1}/>
            <Box x={2} y={1} z={0.4} size={0.1} color={2}/>
            {/*<OrbitControls />*/}
        </Canvas>
    )
}
