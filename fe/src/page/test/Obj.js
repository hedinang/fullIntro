import React, { useState, useRef } from "react";
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/three";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Chair } from "../threeD/threeDModel";

function Obj({ setIsDragging, floorPlane, position, kindOfObject }) {
    const [pos, setPos] = useState(position);
    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;

    let planeIntersectPoint = new THREE.Vector3();

    const dragObjectRef = useRef();

    const [spring, api] = useSpring(() => ({
        // position: [0, 0, 0],
        position: pos,
        scale: 1,
        rotation: [0, 0, 0],
        config: { friction: 10 }
    }));

    const bind = useDrag(
        ({ active, movement: [x, y], timeStamp, event }) => {
            if (active) {
                event.ray.intersectPlane(floorPlane, planeIntersectPoint);
                setPos([planeIntersectPoint.x, 1.5, planeIntersectPoint.z]);
            }

            setIsDragging(active);

            api.start({
                // position: active ? [x / aspect, -y / aspect, 0] : [0, 0, 0],
                position: pos,
                scale: active ? 1.2 : 1,
                // rotation: [y / aspect, x / aspect, 0]
            });
            return timeStamp;
        },
        { delay: true }
    );

    return (
        <animated.mesh {...spring} {...bind()} castShadow>
            {kindOfObject === 'furniture' ? <Chair
                ref={dragObjectRef}
                attach="geometry"
                args={[1.4, 0]}
                scale={0.3}
            /> :
                <dodecahedronBufferGeometry
                    ref={dragObjectRef}
                    attach="geometry"
                    args={[1.4, 0]}
                />
            }
            <meshNormalMaterial attach="material" />
        </animated.mesh>
    );
}

export default Obj;
