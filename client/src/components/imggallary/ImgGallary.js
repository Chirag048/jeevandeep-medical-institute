import React from 'react'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import styled from 'styled-components';

export const GContiner = styled.div`
    margin-bottom: 20px;
    width: 70%;
    height: auto;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
    border: 1px solid;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

const smallItemStyles = {
    cursor: 'pointer',
    objectFit: 'cover',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
}

const ImgGallary = () => {
    return (
        <Gallery id="simple-gallery">
            <GContiner>
                <Item
                    original="https://res.cloudinary.com/dd2mcowjv/image/upload/v1622970615/Jeevandeep/20180809_133822-min_1_mquvgu.jpg"
                    thumbnail="https://res.cloudinary.com/dd2mcowjv/image/upload/v1622970615/Jeevandeep/20180809_133822-min_1_mquvgu.jpg"
                    width="1920"
                    height="440"
                    id="so-first"
                >
                    {({ ref, open }) => (
                        <img
                            alt="jeevandip_img"
                            style={smallItemStyles}
                            src="https://res.cloudinary.com/dd2mcowjv/image/upload/v1622970615/Jeevandeep/20180809_133822-min_1_mquvgu.jpg"
                            ref={ref}
                            onClick={open}
                        />
                    )}
                </Item>
                <Item
                    original="https://res.cloudinary.com/dd2mcowjv/image/upload/v1622322130/Jeevandeep/IMG-20190910-WA0033_qnucjv.jpg"
                    thumbnail="https://res.cloudinary.com/dd2mcowjv/image/upload/v1622322130/Jeevandeep/IMG-20190910-WA0033_qnucjv.jpg"
                    width="1280"
                    height="960"
                >
                    {({ ref, open }) => (
                        <img
                            alt="jeevandip_img"
                            style={smallItemStyles}
                            src="https://res.cloudinary.com/dd2mcowjv/image/upload/v1622322130/Jeevandeep/IMG-20190910-WA0033_qnucjv.jpg"
                            ref={ref}
                            onClick={open}
                        />
                    )}
                </Item>
                <Item
                    original="https://res.cloudinary.com/dd2mcowjv/image/upload/v1622322131/Jeevandeep/IMG-20191203-WA0015_lxy6sj.jpg"
                    thumbnail="https://res.cloudinary.com/dd2mcowjv/image/upload/v1622322131/Jeevandeep/IMG-20191203-WA0015_lxy6sj.jpg"
                    width="1024"
                    height="768"
                >
                    {({ ref, open }) => (
                        <img
                            alt="jeevandip_img"
                            style={smallItemStyles}
                            src="https://res.cloudinary.com/dd2mcowjv/image/upload/v1622322131/Jeevandeep/IMG-20191203-WA0015_lxy6sj.jpg"
                            ref={ref}
                            onClick={open}
                        />
                    )}
                </Item>
                <Item
                    original="https://res.cloudinary.com/dd2mcowjv/image/upload/v1622322128/Jeevandeep/IMG-20150807-WA0009_ythkhx.jpg"
                    thumbnail="https://res.cloudinary.com/dd2mcowjv/image/upload/v1622322128/Jeevandeep/IMG-20150807-WA0009_ythkhx.jpg"
                    width="1280"
                    height="960"
                >
                    {({ ref, open }) => (
                        <img
                            alt="jeevandip_img"
                            style={smallItemStyles}
                            src="https://res.cloudinary.com/dd2mcowjv/image/upload/v1622322128/Jeevandeep/IMG-20150807-WA0009_ythkhx.jpg"
                            ref={ref}
                            onClick={open}
                        />
                    )}
                </Item>
                <Item
                    original="https://res.cloudinary.com/dd2mcowjv/image/upload/v1622322128/Jeevandeep/2_ocd37q.jpg"
                    thumbnail="https://res.cloudinary.com/dd2mcowjv/image/upload/v1622322128/Jeevandeep/2_ocd37q.jpg"
                    width="420"
                    height="570"
                >
                    {({ ref, open }) => (
                        <img
                            alt="jeevandip_img"
                            style={smallItemStyles}
                            src="https://res.cloudinary.com/dd2mcowjv/image/upload/v1622322128/Jeevandeep/2_ocd37q.jpg"
                            ref={ref}
                            onClick={open}
                        />
                    )}
                </Item>
                <Item
                    original="https://res.cloudinary.com/dd2mcowjv/image/upload/v1622322128/Jeevandeep/3_qpvsui.jpg"
                    thumbnail="https://res.cloudinary.com/dd2mcowjv/image/upload/v1622322128/Jeevandeep/3_qpvsui.jpg"
                    width="420"
                    height="570"
                >
                    {({ ref, open }) => (
                        <img
                            alt="jeevandip_img"
                            style={smallItemStyles}
                            src="https://res.cloudinary.com/dd2mcowjv/image/upload/v1622322128/Jeevandeep/3_qpvsui.jpg"
                            ref={ref}
                            onClick={open}
                        />
                    )}
                </Item>
            </GContiner>
        </Gallery>
    )
}

export default ImgGallary
