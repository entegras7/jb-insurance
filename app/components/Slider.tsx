"use client"
import { useEffect, useState } from "react";

export default function Slider() {
    // Hero Slider State
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { id: 1, img: '/images/family_secure.jpg', title: 'Secure Your Family', text: 'Trusted by thousands in Raxaul.' },
        { id: 2, img: '/images/car_drive.jpg', title: 'Drive Safe', text: 'Instant Motor Policy Issuance.' },
        { id: 3, img: '/images/business_plan.jpg', title: 'Business Plans', text: 'Shop & Office Insurance.' },
    ];

    useEffect(() => {
        const heroInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => {
            clearInterval(heroInterval);
        };
    }, [slides.length]);

    return (
        <div className="slider">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url('${slide.img}')` }}
                >
                    <div className="slide-content">
                        <h2>{slide.title}</h2>
                        <p>{slide.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}