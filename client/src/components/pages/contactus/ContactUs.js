import React, { useEffect } from 'react'
import Aos from 'aos'
import { Helmet } from "react-helmet";
import "aos/dist/aos.css"
import { CUContiner, CUSection, CUCard, CUCardimg, CUCarddiv, CUCardH1, CUCardH3 } from './ContactUsStyle'
import surat from './img/Surat.jpg'
import dharampur from './img/dharampur.jpg'
import valsad from './img/Valsad.jpg'
import vyara from './img/vyara.jpg'
import ContactForm from '../contactform/ContactForm'

const ContactUs = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    return (
        <CUContiner>
            <Helmet>
                <title>Contact Us: Jeevandeep Medical Institute</title>
                <meta name="description" content="The Jeevandeep Medical Institute is a leading group of educational institutions that makes vocational education count. With an aim to create equal" />
            </Helmet>
            <CUSection>
                <CUCard data-aos="zoom-in">
                    <CUCardimg src={surat} alt="surat" />
                    <CUCarddiv>
                        <CUCardH1>Surat</CUCardH1>
                        <CUCardH3>Mo: 9624374008</CUCardH3>
                    </CUCarddiv>
                </CUCard>
                <CUCard data-aos="zoom-in">
                    <CUCardimg src={dharampur} alt="dharampur" />
                    <CUCarddiv>
                        <CUCardH1>Dharampur</CUCardH1>
                        <CUCardH3>Mo: 9624374008</CUCardH3>
                    </CUCarddiv>
                </CUCard>
                <CUCard data-aos="zoom-in">
                    <CUCardimg src={valsad} alt="valsad" />
                    <CUCarddiv>
                        <CUCardH1>Valsad</CUCardH1>
                        <CUCardH3>Mo: 9624374008</CUCardH3>
                    </CUCarddiv>
                </CUCard>
                <CUCard data-aos="zoom-in">
                    <CUCardimg src={vyara} alt="vyara" />
                    <CUCarddiv>
                        <CUCardH1>Vyara</CUCardH1>
                        <CUCardH3>Mo: 9624374008</CUCardH3>
                    </CUCarddiv>
                </CUCard>
            </CUSection>
            <ContactForm />
        </CUContiner>
    )
}

export default ContactUs
