import React from 'react'
import styled from 'styled-components/macro'

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
    return (
        <StyledWrapper picture={picture} size={size}>
            <picture>
                <img src={picture} alt={alt} hidden />
            </picture>
        </StyledWrapper>
    )
}

export default Avatar