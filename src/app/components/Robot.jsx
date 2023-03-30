"use client"
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 robot.gltf
Author: Moon dong hwa (https://sketchfab.com/moondonghwa)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/zbrush-for-concept-mech-design-dver-a421f87ebeb94b6684c28769b028dd4a
Title: ZBrush for Concept - Mech Design D.ver
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/robot.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials['default']} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials['default']} />
          <mesh geometry={nodes.defaultMaterial_2.geometry} material={materials['default']} />
          <mesh geometry={nodes.defaultMaterial_3.geometry} material={materials['default']} />
          <mesh geometry={nodes.defaultMaterial_4.geometry} material={materials['default']} />
          <mesh geometry={nodes.defaultMaterial_5.geometry} material={materials['default']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/robot.gltf')