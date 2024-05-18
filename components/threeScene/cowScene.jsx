'use client';
import { Canvas, useThree } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Model from './Model';
import { useProgress, Html, ScrollControls, OrbitControls } from '@react-three/drei';

function Loader() {
    const { progress, active } = useProgress()
    return <Html center className='flex justify-center font-minecraft_text items-center gap-x-2 text-xl text-black'>
        {progress.toFixed(1)}{" "}%
    </Html>
}

const CowScene = () => {
    return (
        <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
            <Suspense fallback={<Loader />}>
                <ScrollControls damping={0.2} pages={0} >
                    <OrbitControls makeDefault autoRotate maxPolarAngle={Math.PI} enablePan={false} enableRotate={true} enableZoom={false} />
                    <ambientLight intensity={1.2} />
                    <directionalLight position={[2, 1, 1]} />
                    <Model path='/3d/model/mob/cow.glb' scale={0.150} />
                </ScrollControls>
            </Suspense>
        </Canvas>
    )
}

export default CowScene