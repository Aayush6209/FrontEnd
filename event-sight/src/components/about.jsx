import React, { useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import Arjun from '../assets/about/arjun.jpg';
import Shivam from '../assets/about/shivam.png';
import Aayush from '../assets/about/aayush.jpg';
import Sarthak from '../assets/about/sarthak.jpg';
import BgImg from "../assets/BGImage/about.jpg";

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Row, Col
  } from 'reactstrap';

function About(props) {

    const items = [
        {
            header: "Arjun Kathail",
            src: Arjun,
            altText: '',
            caption: '',
            github: "https://github.com/arjun-kathail",
            linkedin: "https://www.linkedin.com/in/arjun-kathail/",
        },
        {
            header: "Shivam Arora",
            src: Shivam,
            altText: '',
            caption: '',
            github: "https://github.com/shivam-arora-13",
            linkedin: "https://www.linkedin.com/in/shivam-arora-911765191/",
        },
        {
            header: "Aayush Gupta",
            src: Aayush,
            altText: '',
            caption: '',
            github: "https://github.com/aayush6209",
            linkedin: "https://www.linkedin.com/in/aayush-gupta-721360192/",
        },
        {
            header: "Sarthak Chauhan",
            src: Sarthak,
            altText: '',
            caption: '',
            github: "https://github.com/sarthak-chauhan",
            linkedin: "https://www.linkedin.com/in/sarthak-chauhan-5287b8188/",
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <h2 className="carouselHeader">{item.header}</h2>
                <div className="imageCrop"><img className="aboutImage" src={item.src} alt={item.altText} /></div>
                <Row style={{ 
                    width: "150px",
                    margin: "auto"
                    }}>
                  <Col><a href={item.github} rel="noreferrer" target="_blank"><AiFillGithub size="30px" /></a></Col>
                  <Col><a href={item.linkedin} rel="noreferrer" target="_blank"><AiFillLinkedin size="30px" /></a></Col>
                </Row>
            </CarouselItem>
        );
    });

    let header=<div className="aboutHeader">
        <h1>About Us</h1>
    </div>

    let carousel = <div className="aboutCarousel"><Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        ride={1000}
    >
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </div>

    return (
        <div style={{
        backgroundImage: `url(${BgImg})`,
        height : "101vh",
        backgroundSize : "cover",
        backgroundRepeat: "no-repeat",
        }}>
            {header}
            {carousel}
        </div>
    );
}

export default About;