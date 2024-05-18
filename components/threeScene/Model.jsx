import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import { Group } from 'three'

// useGLTF.preload('/3d/model/player/steve.glb')

export default function Model({ path = "/3d/model/player/steve.glb", scale = 0.175 }) {
    /** @type {Group}*/
    const group = useRef(null)
    const { nodes, materials, animations, scene } = useGLTF(path)
    return (
        <group
            ref={group} scale={scale} >
            <primitive object={scene} />
        </group>
    )
}