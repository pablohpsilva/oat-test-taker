import React from 'react'

const Icon = ({ src, alt = 'Icon...', size = 24 }) =>
    src && (
        <picture>
            <img src={src} alt={alt} height={size} />
        </picture>
    )

export default Icon
