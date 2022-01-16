import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'

import './Slides.css'

const Slides = ({ images, interval }) => {
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(
        () => {
            const tick = setInterval(() => {

                if (activeIndex < images.length - 1) {
                    setActiveIndex(activeIndex + 1)
                } else {
                    setActiveIndex(0)
                }
            }, interval)

            /**debemos limpiar los evenlistener o intervals en cada ejecucion */
            return () => clearInterval(tick)
        },
        /**cuando cualquier de esta propiedades cabie se va volver a ejecutar */
        [activeIndex, images.length, interval]
    )

    return (
        <div className='Slide'>
            <div className='Slide_Container'>
                {images.map(({ src, title }, index) => (
                    <img
                        src={src}
                        alt={title}
                        key={src}
                        className={
                            index === activeIndex
                                ? 'Slide_Container_Img animaShow'
                                : 'Slide_Container_Img animaHide'
                        }
                    />
                ))}
                <div className='Slide_Container_Title'>
                    {images[activeIndex].title}
                </div>
            </div>
        </div>
    )
}


Slides.defaultProps = {
    interval: 5000,
    images: []
}

Slides.propTypes = {
    interval: propTypes.number,
    images: propTypes.arrayOf(
        propTypes.shape({
            src: propTypes.string.isRequired,
            title: propTypes.string.isRequired
        })
    )
}

export default Slides