import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { Helmet } from "react-helmet";
import 'react-responsive-carousel/lib/styles/carousel.css'
import { Carousel } from 'react-responsive-carousel';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Home_img from './img/doctors_hwty.svg'
import Teachers from './img/teachers.svg'
import Hostel from './img/hostel.svg'
import Hospital from './img/hospital.svg'
import Placement from './img/placement.svg'
import Student1 from './img/student1.jpeg'
import Student2 from './img/student2.jpeg'
import Student3 from './img/student3.jpeg'
import { HContiner, HSection, Hcol, HContent1, HP1, HH1, HP2, Hdiv, HImg, HSection2, Hrow1, HH12, HP3, Hrow2, HCard, HCarddiv, HCardH3, HCardP, HCardcol, Avatardiv, HCdiv, HCH4, HCP, HrowM, HrowW } from './HomeStyle';
import ImgGallary from '../../imggallary/ImgGallary';

const BtnStyle = {
    color: "#ffffff", background: "#DAA520", margin: "10px",
}

const AvatarStyle = {
    background: "rgb(255 232 197)", width: "100px", height: "100px", padding: "10px",
}

const CAvatarStyle = {
    width: "100px", height: "100px", padding: "10px",
}

const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return (
        <HContiner>
            <Helmet>
                <title>Home : Jeevandeep Medical Institute</title>
                <meta name="description" content="We are institution for nursing in Surat and trains a students for B,Sc Nursing, M.Sc Nursing, G.N.M" />
            </Helmet>
            <HSection>
                <Hcol>
                    <HContent1 data-aos="zoom-in" >
                        <HP1>Hey Friends,</HP1>
                        <HH1>Education Is Not The Learning Of Facts, But Training Of The Mind To Think</HH1>
                        <HP2>We are institution for nursing in Surat and trains a students for B,Sc Nursing, M.Sc Nursing, G.N.M (General Nursing and Midwifery), and post basic B.Sc Nursing degrees.</HP2>
                        <Hdiv>
                            <Button data-aos="fade-up" data-aos-anchor-placement="top-bottom" href="/contactus" variant="contained" style={BtnStyle}>Apply Now</Button>
                            <Button data-aos="fade-up" data-aos-anchor-placement="top-bottom" href="tel:9624374008" variant="contained" style={BtnStyle}>Contact Now</Button>
                        </Hdiv>
                    </HContent1>
                </Hcol>
                <Hcol>
                    <HImg data-aos="fade-up-left" src={Home_img} alt="Home_img" />
                </Hcol>
            </HSection>

            <HSection2>
                <Hrow1>
                    <HH12 data-aos="fade-up">Why Choose Jeevandeep Medical Institute?</HH12>
                    <HP3 data-aos="fade-up">The Institution encourages the students, always welcomes new ideas and support for academic freedom that makes open discussion and inquiry possible.</HP3>
                </Hrow1>
                <Hrow2>
                    <HCardcol>
                        <HCard data-aos="fade-right">
                            <Avatardiv>
                                <Avatar alt="Teachers" src={Teachers} style={AvatarStyle} />
                            </Avatardiv>
                            <HCarddiv>
                                <HCardH3>Expert Teachers</HCardH3>
                                <HCardP>The college is packed by a well knit team of qualified faculty who are graduates and post graduates from premier nursing institutions of India.</HCardP>
                            </HCarddiv>
                        </HCard>
                        <HCard data-aos="fade-right">
                            <Avatardiv>
                                <Avatar alt="Hostel" src={Hostel} style={AvatarStyle} />
                            </Avatardiv>
                            <HCarddiv>
                                <HCardH3>Hostel</HCardH3>
                                <HCardP>Pertaining to the academic syllabus prescribed by the affiliated authorities all types of books are available for the students reference.</HCardP>
                            </HCarddiv>
                        </HCard>
                    </HCardcol>
                    <HCardcol>
                        <HCard data-aos="fade-left">
                            <Avatardiv>
                                <Avatar alt="Hospital" src={Hospital} style={AvatarStyle} />
                            </Avatardiv>
                            <HCarddiv>
                                <HCardH3>Hospital</HCardH3>
                                <HCardP>During the training period all students are assigned Hospital duties for increase their clinical experiencen the various type of Hospitals.</HCardP>
                            </HCarddiv>
                        </HCard>
                        <HCard data-aos="fade-left">
                            <Avatardiv>
                                <Avatar alt="Placement" src={Placement} style={AvatarStyle} />
                            </Avatardiv>
                            <HCarddiv>
                                <HCardH3>Placement</HCardH3>
                                <HCardP>Placement of students after graduation in this rewarding career is another on-going exercise that the Jeevandeep Medical Institute.</HCardP>
                            </HCarddiv>
                        </HCard>
                    </HCardcol>
                </Hrow2>
            </HSection2>
            <HSection2>
                <Hrow1>
                    <HH12 data-aos="fade-up">Testimonial</HH12>
                    <HP3 data-aos="fade-up">Stay connected with our nursing institution and submit your application to study with us. If you have any questions or concerns, please don’t hesitate to contact us.</HP3>
                </Hrow1>
                <HrowM>
                    <Carousel autoPlay showArrows={true} showIndicators={false} showThumbs={false} showStatus={false} useKeyboardArrows={true} infiniteLoop={true} width={300}>
                        <HCdiv>
                            <Avatar alt="Student_img" src={Student1} style={CAvatarStyle} />
                            <HCH4>"I met so many precious people at Jeevandeep Medical Institute : my classmates, the graduates, teachers and staff. They gave me support, advice and love.”</HCH4>
                            <HCP>- Kalal Teena (GNM Student)</HCP>
                        </HCdiv>
                        <HCdiv>
                            <Avatar alt="Student_img" src={Student2} style={CAvatarStyle} />
                            <HCH4>"I really like Jeevandeep Medical Institute. There are so many great things about Jeevandeep Medical Institute, but I think one of the best parts was our instructor."</HCH4>
                            <HCP>- Priyanka (GNM Student)</HCP>
                        </HCdiv>
                        <HCdiv>
                            <Avatar alt="Student_img" src={Student3} style={CAvatarStyle} />
                            <HCH4>"It was not easy but I got through it and now I can work as a Nurse. I am so excited about it! I’m so grateful to have met my instructor and the people At”</HCH4>
                            <HCP>- Patel Aashita (GNM Student)</HCP>
                        </HCdiv>
                    </Carousel>
                </HrowM>
                <HrowW>
                    <Carousel autoPlay showArrows={false} showIndicators={false} showThumbs={false} showStatus={false} useKeyboardArrows={true} infiniteLoop={true} width={600}>
                        <HCdiv>
                            <Avatar variant="rounded" alt="Student_img" src={Student1} style={CAvatarStyle} />
                            <HCH4>"I met so many precious people at Jeevandeep Medical Institute : my classmates, the graduates, teachers and staff. They gave me support, advice and love.”</HCH4>
                            <HCP>- Kalal Teena (GNM Student)</HCP>
                        </HCdiv>
                        <HCdiv>
                            <Avatar variant="rounded" alt="Student_img" src={Student2} style={CAvatarStyle} />
                            <HCH4>"I really like Jeevandeep Medical Institute. There are so many great things about Jeevandeep Medical Institute, but I think one of the best parts was our instructor."</HCH4>
                            <HCP>- Priyanka (GNM Student)</HCP>
                        </HCdiv>
                        <HCdiv>
                            <Avatar variant="rounded" alt="Student_img" src={Student3} style={CAvatarStyle} />
                            <HCH4>"It was not easy but I got through it and now I can work as a Nurse. I am so excited about it! I’m so grateful to have met my instructor and the people At”</HCH4>
                            <HCP>- Patel Aashita (GNM Student)</HCP>
                        </HCdiv>
                    </Carousel>
                </HrowW>
            </HSection2>
            <HSection2>
                <Hrow1>
                    <HH12 data-aos="fade-up">Some Picture That Tells About Us.</HH12>
                    <HP3 data-aos="fade-up">The Institution encourages the students, always welcomes new ideas and support for academic freedom that makes open discussion and inquiry possible.</HP3>
                </Hrow1>
                <ImgGallary />
            </HSection2>
        </HContiner>
    )
}

export default Home
