import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import { TextureLoader } from 'three';
function Chair(props) {
    const { nodes, materials } = useGLTF('./chair.glb')
    let textureList = ['./texture/wood1.jpg', './texture/wood.jpg',
        './texture/wood2.jpg', './texture/wood3.jpg', './texture/grass.jpg']
    let [items, setItems] = useState([
        { name: 'back', color: new TextureLoader().load(textureList[0]), isSelect: false },
        { name: 'cushions', color: new TextureLoader().load(textureList[1]), isSelect: false },
        { name: 'base', color: new TextureLoader().load(textureList[2]), isSelect: false },
        { name: 'legs', color: new TextureLoader().load(textureList[3]), isSelect: false },
        { name: 'supports', color: new TextureLoader().load(textureList[4]), isSelect: false },
    ])
    const meshRef = useRef(null);
    useFrame(() => {
        meshRef.current.position.y = -2;
    });
    useEffect(() => {

        let tmp = items.map(e => {
            if (e.isSelect === true) e.color = new TextureLoader().load(props.color)
            return e
        })
        setItems(tmp)
    }, [props.color])
    let choose = (e) => {
        let tmp = items.map(f => {
            if (f.name === e) f.isSelect = true
            else f.isSelect = false
            return f
        })
        props.changeItem(e)
        setItems(tmp)
    }
    return (
        <group
            scale={props.scale}
            dispose={null}
            ref={meshRef}
        >
            <mesh onClick={() => { choose('back') }} geometry={nodes.back.geometry} material={materials.laces}
            >
                <meshStandardMaterial map={items[0].color} attach="material" />
            </mesh>
            <mesh onClick={() => { choose('cushions') }} geometry={nodes.cushions.geometry} material={materials.laces}
            >
                <meshStandardMaterial map={items[1].color} attach="material" />
            </mesh>
            <mesh onClick={() => { choose('base') }} geometry={nodes.base.geometry} material={materials.laces}
            >
                <meshStandardMaterial map={items[2].color} attach="material" />
            </mesh>
            <mesh onClick={() => { choose('legs') }} geometry={nodes.legs.geometry} material={materials.laces}
            >
                <meshStandardMaterial map={items[3].color} attach="material" />
            </mesh>
            <mesh onClick={() => { choose('supports') }} geometry={nodes.supports.geometry} material={materials.laces}
            >
                <meshStandardMaterial map={items[4].color} attach="material" />
            </mesh>
        </group>
    )
}
export {
    Chair,
}