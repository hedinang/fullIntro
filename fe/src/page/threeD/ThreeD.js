import React, { useState } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Col, Row } from 'antd'
import { Chair } from './threeDModel'
import { IntroduceThreeDesktop, IntroduceThreeMobile } from '../../component/IntroduceThreeD'
import styles from './ThreeD.module.scss'
import Mix from '../test/Mix'
export default function ThreeD() {
    let [color, setColor] = useState('./texture/wood.jpg')
    let [item, setItem] = useState('back')
    const longestLine = 100
    let changeItem = (e) => {
        setItem(e)
    }
    let textureList = ['./texture/blue.png', './texture/red.png',
        './texture/slightBlue.png', './texture/purple.png', './texture/wood.jpg', './texture/wood1.jpg',
        './texture/wood2.jpg', './texture/wood3.jpg', './texture/grass.jpg']

    let changeTexture = (e) => {
        setColor(e)
    }

    return (
        <div>
            <IntroduceThreeDesktop />
            <IntroduceThreeMobile longestLine={longestLine} />
            <h2 style={{ textAlign: 'center' }}>Demo</h2>
            <Row className={styles['content']}>
                <Col span='3' />
                <Col span='8' className={styles['texture']}>
                    <h1 className={styles['title-texture']}>
                        Textures
                    </h1>
                    <Row >
                        {textureList.map(e =>
                            <Col span={8} onClick={() => { changeTexture(e) }} style={{ backgroundImage: `url(${e})`, height: '100px' }} />
                        )}
                    </Row>
                </Col>
                <Col span='2' />
                <Col span='8' className={styles['landscape']}>
                    <h1>Choose 1 part on the chair to change texture</h1>
                    <Canvas style={{ height: '400px', width: '400px' }} camera={{ position: [0, 20, 0] }}>
                        <ambientLight />
                        <Chair color={color} changeItem={changeItem} />
                        <OrbitControls />
                    </Canvas>
                    <h3>{item}</h3>
                </Col>
                <Col span='3' />
            </Row>
            <Mix />
        </div>
    )
}
