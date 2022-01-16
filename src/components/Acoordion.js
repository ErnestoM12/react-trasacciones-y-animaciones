import React, { useState, useRef } from 'react'
import arrowImg from '../img/arrow.svg'
import propTypes from 'prop-types'

const Acoordion = ({ title, content, bgColor }) => {

    const [isExpanded, setIsExpanded] = useState(false)

    const contentRef = useRef()



    const panelStyles = {
        background: bgColor,
        color: '#fff',
        padding: '0.5em 1em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        userSelect: 'none' //esto sirbe para que no seleccione el texto del panel


    }

    const contentStyles = {
        height: isExpanded ? contentRef.current.scrollHeight : '0px',
        overflow: 'hidden',
        transition: 'all 340ms ease-out',
        border: `1px solid ${bgColor}`,
        padding: isExpanded ? '0.8em 0.5em' : '0 0.5em'

    }

    const imageStyles = {
        width: '1em',
        transition: 'transform 250ms ease', //hace la rotacion sea mas lenta
        transform: isExpanded ? 'rotate(90deg)' : 'rotate(0)', //rota la imagen 90 grados

    }

    const toggle = () => setIsExpanded(!isExpanded)


    return (
        <div>
            <div style={panelStyles}
                onClick={toggle}>
                <span>{title}</span>
                <img
                    src={arrowImg}
                    alt='flecha'
                    style={imageStyles}
                />
            </div>
            <div
                style={contentStyles}
                ref={contentRef}>

                {content}
            </div>
        </div>
    )
}

Acoordion.defaultProps = {
    title: '',
    content: '',
    bgColor: 'gray'
}

Acoordion.propTypes = {
    title: propTypes.string,
    content: propTypes.string,
    bgColor: propTypes.string,
}

export default Acoordion
