import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useInView } from 'react-intersection-observer'

import avatarSVG from '@/assets/icons/avatar.svg'

const StyledWrapper = styled.div`
    border-radius: calc(500 * var(--s));
    ${({ size }) =>
        size &&
        `
        height: calc(${size} * var(--s));
        width: calc(${size} * var(--s));
    `}
    ${({ picture }) =>
        picture &&
        `
        background: url(${picture});
        background-position: center;
        background-size: cover;
    `}
`

const Avatar = ({ alt, picture, size = 80 }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0
    })
    const [img, setImg] = useState(picture)
    const pic = inView ? img : ''

    const handleOnImgLoadError = () => {
        if (pic !== '') setImg(avatarSVG)
    }

    return (
        <StyledWrapper ref={ref} picture={pic} size={size}>
            <picture>
                <img src={pic} alt={alt} hidden onError={handleOnImgLoadError} />
            </picture>
        </StyledWrapper>
    )
}

export default Avatar
