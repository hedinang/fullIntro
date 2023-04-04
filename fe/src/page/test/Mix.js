import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Obj from "./Obj";
import { Button } from "antd";

export default function Mix() {
    const [isDragging, setIsDragging] = useState(false);
    const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const [elementList, setElementList] = useState([{
        kindOfObject: 'dsd',
        position: []
    }])
    const addElement = (e) => {
        elementList.push({
            kindOfObject: e,
            position: [0, 1, 0]
        })
        setElementList([...elementList])

    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '10px 0px 10px 0px' }}>
            <h1>Mix object like your want</h1>
            <Canvas style={{ height: '700px', width: '1000px', background: "white", borderColor: '#d1cccc', borderStyle: 'solid', borderWidth: '2px' }} shadows dpr={[1, 2]}>
                <ambientLight intensity={0.5} />
                <directionalLight
                    intensity={0.5}
                    castShadow
                    shadow-mapSize-height={1512}
                    shadow-mapSize-width={1512}
                />
                {elementList.map(e => {
                    return <Obj setIsDragging={setIsDragging} floorPlane={floorPlane} position={e.position} kindOfObject={e.kindOfObject} />
                })}
                <OrthographicCamera makeDefault zoom={50} position={[0, 70, 200]} />
                <OrbitControls minZoom={10} maxZoom={50} enabled={false} />
            </Canvas>
            <div >
                <Button type="primary" onClick={() => { addElement('furniture') }}>Add more 1 furniture</Button>
                <Button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => { addElement('sphere') }}>Add more 1 sphere</Button>
            </div>
        </div>
    );
}
