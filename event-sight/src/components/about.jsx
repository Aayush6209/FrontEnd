import React, { useState } from 'react';
import Arjun from '../assets/about/arjun.png';
import Shivam from '../assets/about/shivam.jfif';
import Aayush from '../assets/about/aayush.jpg';
import Sarthak from '../assets/about/sarthak.jpg';
import BgImg from "../assets/BGImage/about.jpg";

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

function About(props) {

    const items = [
        {
            header: "Arjun Kathail",
            src: Arjun,
            altText: '',
            caption: ''
        },
        {
            header: "Shivam Arora",
            src: Shivam,
            altText: '',
            caption: ''
        },
        {
            header: "Aayush Gupta",
            src: Aayush,
            altText: '',
            caption: ''
        },
        {
            header: "Sarthak Chauhan",
            src: Sarthak,
            altText: '',
            caption: ''
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
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
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
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </div>

    return (
        <div className="aboutPage" style={{
        backgroundImage: `url(${BgImg})`,
        height : "100vh",
        backgroundSize : "cover",
        backgroundRepeat: "no-repeat"}}>
            {header}
            {carousel}
        </div>
    );
}

export default About;