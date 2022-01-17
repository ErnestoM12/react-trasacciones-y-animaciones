import React, { useState } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import propTypes from 'prop-types'
import './Carrousel.css'

const Carrousel = ({ images }) => {
    const [ActiveIndex, setActiveIndex] = useState(0)
    const [direction, setDirection] = useState('left')

    const left = () => {
        setDirection('left')


        if (ActiveIndex > 0) {
            setActiveIndex(ActiveIndex - 1)
        } else {
            setActiveIndex(images.length - 1)
        }
    }

    const right = () => {
        setDirection('right')

        if (ActiveIndex < images.length - 1) {
            setActiveIndex(ActiveIndex + 1)
        } else {
            setActiveIndex(0)
        }
    }


    return (
        <div className='Carrousel'>
            <div className='Carrousel_Buttons'>
                <button onClick={left}>atras</button>
                <button onClick={right}>siguiente</button>
            </div>

            <TransitionGroup>
                <CSSTransition
                    timeout={10000}
                    classNames={`slide-${direction}`}
                    key={ActiveIndex}
                >
                    <img
                        src={images[ActiveIndex].src}
                        alt={images[ActiveIndex].title}
                        className='Carrousel_img'
                    />
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}
Carrousel.defaultProps = {
    images: []
}

Carrousel.propTypes = {
    images: propTypes.arrayOf(
        propTypes.shape({
            src: propTypes.string,
            title: propTypes.string
        })
    )

}

export default Carrousel
