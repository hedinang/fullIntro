import { Col, Image, Row } from 'antd';
import React from 'react';
import brand from '../asset/img/header/1.png'
// import brand from '../asset/img/header/mkt.png'
export const Footer = () => {
    return <div className='footer'>
        <Row className='container-logo'>
            <Image className='logo' preview={false}
                src={brand}
            // src={'https://weinlux.vn/wp-content/uploads/2022/10/Weinlux-logo-200.png'}
            />
        </Row>
        <Row>
            <Col lg={6} span={0} ></Col>
            <Col lg={4} span={24} className='footer-item footer-head'>
                <p>Head office: 122 Đào Tấn - Phường Cống Vị - Ba Đình - Hà Nội</p>
                <div className='brief-info'>Address</div>
            </Col>
            <Col lg={4} span={24} className='footer-item'>
                <p>dungtranhust2013@gmail.com</p>
                <div className='brief-info'>Mailbox</div>
            </Col>
            <Col lg={4} span={24} className='footer-item'>
                <p>+84 0392200524</p>
                <div className='brief-info'>Phone</div>
            </Col>
            <Col lg={6} span={6}></Col>
        </Row>
        <Row style={{ justifyContent: 'center' }}>
            <div className='footer-end'>
                Copyright © 2023 MIRACLE SOFTWARE. All Rights Reserved.
            </div>
        </Row>
    </div>
}