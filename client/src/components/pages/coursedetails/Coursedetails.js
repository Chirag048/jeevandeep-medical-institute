import React from 'react'
import { CDSection, CDdiv, CDCard, CDcol1, CDimg, CDcol2, CDinfo, CDP, CDH1, CDH2 } from './CoursedetailsStyle';
import Button from '@material-ui/core/Button';
import svg1 from './img/doctor_kw5l.svg'
import svg2 from './img/doctors_hwty.svg'
import svg3 from './img/medical_care_movn.svg'
import svg4 from './img/medical_research_qg4d.svg'
import svg5 from './img/medicine_b1ol.svg'
import { Helmet } from "react-helmet";

const BtnStyle = {
    color: "#ffffff", background: "#DAA520", margin: "10px",
}

const CourseDetails = () => {
    return (
        <CDSection>
            <Helmet>
                <title>Course : Jeevandeep Medical Institute</title>
                <meta name="description" content="The Jeevandeep Medical Institute is a leading group of educational institutions that makes vocational education count. With an aim to create equal" />
            </Helmet>
            <CDdiv>
                <CDCard>
                    <CDcol1>
                        <CDimg src={svg1} alt="svg" />
                    </CDcol1>
                    <CDcol2>
                        <CDH1>General Nursing and Midwifery (GNM)</CDH1>
                        <CDinfo>
                            <CDH2>Qualification:</CDH2>
                            <CDP>Standard 12 pass (Science, Commerce, Arts)</CDP>
                        </CDinfo>
                        <CDinfo>
                            <CDH2>Duration:</CDH2>
                            <CDP>3 years theory + 6 months practical</CDP>
                        </CDinfo>
                        <CDinfo>
                            <CDH2>Recognition:</CDH2>
                            <CDP>KNC and INC Standardized</CDP>
                        </CDinfo>
                        <CDinfo>
                            <CDH2>Age limit:</CDH2>
                            <CDP>17 to 35 years</CDP>
                        </CDinfo>
                        <Button href="/contactus" variant="contained" style={BtnStyle}>Apply Now</Button>
                    </CDcol2>
                </CDCard>
            </CDdiv>
            <CDdiv>
                <CDCard>
                    <CDcol1>
                        <CDimg src={svg2} alt="svg" />
                    </CDcol1>
                    <CDcol2>
                        <CDH1>PC / DPC (Patient Care / Diploma Patient Care)</CDH1>
                        <CDinfo>
                            <CDH2>Qualification:</CDH2>
                            <CDP>Standard 10,11,12 pass/fail</CDP>
                        </CDinfo>
                        <CDinfo>
                            <CDH2>Duration:</CDH2>
                            <CDP>1 to 2 years</CDP>
                        </CDinfo>
                        <CDinfo>
                            <CDH2>Recognition:</CDH2>
                            <CDP>BSS Standardized</CDP>
                        </CDinfo>
                        <CDinfo>
                            <CDH2>Age limit:</CDH2>
                            <CDP>17 to 35 years</CDP>
                        </CDinfo>
                        <Button href="/contactus" variant="contained" style={BtnStyle}>Apply Now</Button>
                    </CDcol2>
                </CDCard>
            </CDdiv>
            <CDdiv>
                <CDCard>
                    <CDcol1>
                        <CDimg src={svg3} alt="svg" />
                    </CDcol1>
                    <CDcol2>
                        <CDH1>D.M.L.T (Diploma in Medical Laboratory Technology)</CDH1>
                        <CDinfo>
                            <CDH2>Qualification:</CDH2>
                            <CDP>Standard 10,11,12 pass/fail</CDP>
                        </CDinfo>
                        <CDinfo>
                            <CDH2>Duration:</CDH2>
                            <CDP>2 year</CDP>
                        </CDinfo>
                        <CDinfo>
                            <CDH2>Recognition:</CDH2>
                            <CDP>BSS Standardized</CDP>
                        </CDinfo>
                        <CDinfo>
                            <CDH2>Age limit:</CDH2>
                            <CDP>17 to 35 years</CDP>
                        </CDinfo>
                        <Button href="/contactus" variant="contained" style={BtnStyle}>Apply Now</Button>
                    </CDcol2>
                </CDCard>
            </CDdiv>
            <CDdiv>
                <CDCard>
                    <CDcol1>
                        <CDimg src={svg4} alt="svg" />
                    </CDcol1>
                    <CDcol2>
                        <CDH1>X-Ray Tech</CDH1>
                        <CDinfo>
                            <CDH2>Qualification:</CDH2>
                            <CDP>Standard 10,11,12 pass/fail</CDP>
                        </CDinfo>
                        <CDinfo>
                            <CDH2>Duration:</CDH2>
                            <CDP>1 to 2 years</CDP>
                        </CDinfo>
                        <CDinfo>
                            <CDH2>Recognition:</CDH2>
                            <CDP>BSS Standardized</CDP>
                        </CDinfo>
                        <CDinfo>
                            <CDH2>Age limit:</CDH2>
                            <CDP>17 to 35 years</CDP>
                        </CDinfo>
                        <Button href="/contactus" variant="contained" style={BtnStyle}>Apply Now</Button>
                    </CDcol2>
                </CDCard>
            </CDdiv>
            <CDdiv>
                <CDCard>
                    <CDcol1>
                        <CDimg src={svg5} alt="svg" />
                    </CDcol1>
                    <CDcol2>
                        <CDH1>OT Tech (Operation Theatre Technology)</CDH1>
                        <CDinfo>
                            <CDH2>Qualification:</CDH2>
                            <CDP>Standard 10,11,12 pass/fail</CDP>
                        </CDinfo>
                        <CDinfo>
                            <CDH2>Duration:</CDH2>
                            <CDP>1 year</CDP>
                        </CDinfo>
                        <CDinfo>
                            <CDH2>Recognition:</CDH2>
                            <CDP>BSS Standardized</CDP>
                        </CDinfo>
                        <CDinfo>
                            <CDH2>Age limit:</CDH2>
                            <CDP>17 to 35 years</CDP>
                        </CDinfo>
                        <Button href="/contactus" variant="contained" style={BtnStyle}>Apply Now</Button>
                    </CDcol2>
                </CDCard>
            </CDdiv>
        </CDSection>
    )
}

export default CourseDetails
