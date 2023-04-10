import React, { useEffect, useState } from 'react'
import { Col, Image, Row } from 'antd'
import { IntroduceThreeDesktop, IntroduceThreeMobile } from '../component/IntroduceThreeD'
import d2 from '../asset/img/leader/d2.jpg'
import duc1 from '../asset/img/leader/duc1.jpg'
import tu2 from '../asset/img/leader/tu2.jpg'
import na1 from '../asset/img/leader/na1.jpg'

import messi from '../asset/img/leader/messi.png'
import ronaldo from '../asset/img/leader/ronaldo.png'
import maradona from '../asset/img/leader/maradona.png'
import pele from '../asset/img/leader/pele.png'
import tp1 from '../asset/img/partner/tp1.png'
import skilloan from '../asset/img/partner/skilloan.png'
import weinlux from '../asset/img/partner/weinlux.png'
import supermomos from '../asset/img/partner/supermomos.jpg'
import { SlideAuto, SlideShow } from '../component/Slide'
import { useNavigate } from 'react-router-dom'


export default function Home() {
    const navigate = useNavigate()
    const partnerList = [
        {
            img: 'https://ghdc.vn/uploads/images/banner/2022-06-27-09-19-00vina-removebg-preview.png',
            url: 'https://vinaphone.com.vn/'
        },
        {
            img: 'https://ghdc.vn/uploads/images/banner/2022-06-27-09-17-50mobi.png',
            url: 'https://www.mobifone.vn/'
        },
        {
            img: 'https://ghdc.vn/uploads/images/banner/2022-06-25-11-20-13viettel.png',
            url: 'https://viettel.com.vn/en/'
        },
        {
            img: skilloan,
            url: 'https://mechanicsmarketplace.com'
        },
        {
            img: weinlux,
            url: 'https://weinlux.vn'
        },
        {
            img: tp1
        },
        {
            img: supermomos,
            url: 'http://75.119.131.21:3300/social-detail'
        }
    ]
    const serviceList = [
        {
            img: ''
        },
        {
            img: 'https://ghdc.vn/uploads/images/banner/2022-06-27-09-19-00vina-removebg-preview.png',
            title: 'Digital Marketing Online',
            criteriaList: ['GOOGLE ADS', 'MMS BRANDNAME', 'YOUTUBE TRAFFIC', 'FACEBOOK ADS', '3D SHOPPING']
        },
        {
            img: 'https://ghdc.vn/uploads/images/banner/2022-06-27-09-19-00vina-removebg-preview.png',
            title: 'Information Technology',
            criteriaList: ['VIRTUAL SERVER RENTAL', 'PLATFORM', 'WEBSITE DESIGN FOR BUSINESS', 'BUSINESS SOLUTION PROVIDER', 'SOFTWARE OUTSOURCING']
        },
        {
            img: 'https://ghdc.vn/uploads/images/banner/2022-06-27-09-19-00vina-removebg-preview.png',
            title: 'Value-added services',
            criteriaList: ['ADCALL', 'AUTO SMS', 'VOICE OTP', 'MOBILE GAME']
        },
        {
            img: ''
        }
    ]
    const slideLeaderList = [
        {
            img: ''
        },
        { img: d2, name: 'messi', position: 'Nodejs and Reactjs' },
        { img: duc1, name: 'ronaldo', position: 'Java and Ios' },
        { img: na1, name: 'maradona', position: 'Android and Flutter' },
        {
            img: tu2, name: 'pele', position: 'Java and Reactjs'
        },
        {
            img: ''
        },
    ]
    const navigateService = (e) => {
        navigate('/three')
    }
    const service = (e) => {
        const img = e.img
        switch (img) {
            case '':
                return <Col lg={3} span={0}>
                </Col>
            default:
                return <Col lg={6} span={24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {/* <Image src={e.img} style={{ padding: '0 25px' }} /> */}
                    <Row ><h2>{e.title}</h2></Row>
                    {e.criteriaList.map(f => <Row style={{
                        width: '100%', padding: '0 20px',
                        color: '#337ab7', marginTop: '10px', fontWeight: 'bold', cursor: 'pointer'
                    }}
                        onClick={() => { navigateService(f) }}
                    >{f}</Row>)}
                </Col>
        }
    }
    const leader = e => {
        const img = e.img
        switch (img) {
            case '':
                return <Col lg={4} span={0}>
                </Col>
            default:
                return <Col lg={4} span={24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Image src={e.img} width={200} height={300} preview={false} />
                    <h2 style={{ width: '100%', justifyContent: 'center', marginTop: '10px', display: 'flex' }}>{e.name}</h2>
                    <h3 style={{ width: '100%', justifyContent: 'center', color: '#797979', marginTop: '10px', display: 'flex' }}>{e.position}</h3>
                </Col>
        }
    }
    const images = [
        "https://ghdc.vn/home/image1-home3.png",
        "https://ghdc.vn/home/image2-home3.png",
    ];
    let [responsive, setResponsive] = useState('desktop')
    let [longestLine, setLongestLine] = useState(100)
    useEffect(() => {
        function handleResize() {
            setResponsive(responsive)
            setLongestLine(window.innerWidth * 1.4)
        }
        window.addEventListener("resize", handleResize)
        handleResize()
    }, [])
    return (
        <div>
            <IntroduceThreeDesktop />
            <IntroduceThreeMobile longestLine={longestLine} />
            <h2 style={{ textAlign: 'center', fontSize: '30px' }}>Our partner</h2>
            <SlideAuto contentList={partnerList} numOfItem={5} className='long-slide' />
            <SlideAuto contentList={partnerList} numOfItem={3} className='medium-slide' />
            <SlideAuto contentList={partnerList} numOfItem={1} className='short-slide' />
            <h2 style={{ textAlign: 'center', fontSize: '30px', marginTop: '100px' }}>Our service</h2>
            <Row>
                {serviceList.map(e => service(e))}
            </Row>
            <Row style={{ fontSize: '30px', justifyContent: 'center', marginTop: '150px', textAlign: 'center' }}>More than 10 years of experience in the
                field of information technology
            </Row>
            <SlideShow contentList={images} />
            <Row style={{ fontSize: '30px', justifyContent: 'center', marginTop: '100px' }}>Team member
            </Row>
            <Row style={{ marginTop: '50px' }}>
                {slideLeaderList.map(e => leader(e))}
            </Row>
        </div>

    )
}
