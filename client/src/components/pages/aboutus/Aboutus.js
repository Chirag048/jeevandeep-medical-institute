import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { AContiner, Arow1, AH1, AP, Asection1, Acol, Aimg, AObj, AObjdiv, AOP } from './AboutusStyle'
import About from './img/about.svg'
import { Helmet } from "react-helmet";


const CheckStyle = {
    color: "#DAA520"
}

const Aboutus = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    return (
        <AContiner>
            <Helmet>
                <title>About us: Jeevandeep Medical Institute</title>
                <meta name="description" content="The Jeevandeep Medical Institute is a leading group of educational institutions that makes vocational education count. With an aim to create equal" />
            </Helmet>
            <Arow1>
                <AH1 data-aos="zoom-in" >About Us</AH1>
                <AP data-aos="zoom-in" >The Jeevandeep Medical Institute is a leading group of educational institutions
                that makes vocational education count. With an aim to create equal opportunities
                for every student to learn and succeed, the Jeevandeep Medical Institute catalyzes
                professional education through various courses and facilities. The world-class
                education delivered by experienced faculty propels students to excel in their
                chosen field and become skilled professionals. Under the umbrella of the Jeevandeep
                Medical Institute, our higher education colleges are charting a new trajectory
                for excellence in education, thereby fostering innovation and nurturing future
                leaders. The Jeevandeep Medical Institute has seen catapulting growth over the
                years. Slowly but steadily, we have been successful at adding a wide number of
                professional courses to our higher education colleges giving aspiring students
                a platform to develop into qualified professionals. Here’s a timeline of our progress
                as a distinguished educational institution.
                </AP>
            </Arow1>
            <Asection1>
                <Acol>
                    <Aimg data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" src={About} alt="Aboutus_img" />
                </Acol>
                <Acol>
                    <AH1 data-aos="zoom-in">What is Objectives of Jeevandeep Medical Institute ?</AH1>
                    <AP data-aos="zoom-in">A graduate nurse qualified as B.Sc (N) at Jeevandeep Medical
                    Institute, who has been prepared as a professional nurse
                    through University affiliated nursing education programme
                    and recognized by Indian Nursing Council, will work
                    independently in the hospital and community as a
                    member of healthcare system.
                        </AP>
                    <AObj>
                        <AObjdiv>
                            <CheckCircleOutlineIcon style={CheckStyle} />
                            <AOP data-aos="zoom-out-left">To grow a pattern of teaching for undergraduate and postgraduate nursing education.</AOP>
                        </AObjdiv>
                        <AObjdiv>
                            <CheckCircleOutlineIcon style={CheckStyle} />
                            <AOP data-aos="zoom-out-left">Facilitate high quality practical knowledge in all branches of nursing with superior demonstration.</AOP>
                        </AObjdiv>
                        <AObjdiv>
                            <CheckCircleOutlineIcon style={CheckStyle} />
                            <AOP data-aos="zoom-out-left">Help students to achieve self adequacy in graduate, postgraduate and G.N.M in medical education.</AOP>
                        </AObjdiv>
                    </AObj>
                </Acol>
            </Asection1>
        </AContiner>
    )
}

export default Aboutus
