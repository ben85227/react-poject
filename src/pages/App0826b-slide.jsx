import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import '../css/App0826b.css'
import React, { useState } from 'react'

const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { url: '../src/images/p3.jpg' },
        { url: '../src/images/p5.jpg' },
        { url: '../src/images/p7.jpg' },
        { url: '../src/images/p9.jpg' },
    ]

    const prevSlide = () => {
        setCurrentIndex((prevIndex)=> {
    prevIndex === 0 ? slides.length - 1 : prevIndex - 1
})
    }

const nextSlide = () => {
    setCurrentIndex((prevIndex)=> {
    prevIndex ===  slides.length - 1 ? 0: prevIndex + 1
})

}

const Arrow = (direction, onClick) => {
    <div>
        {
            direction === "left"
                ? (
                    <FaArrowLeft />
                )
                : (
                    <FaArrowRight />
                )
        }
    </div>

}
return (
    <div className='wrsp'>
        <h1>輪播</h1>
        <div className='slide'>
            <div className='slideImg' style={{
                backgroundImage: `url(${slides[currentIndex].url})`
            }}>
            </div>
            <Arrow direction={'left'} onClick={prevSlide} />
            <Arrow direction={'right'} onClick={nextSlide} />
        </div>
    </div>
)
}

export default App