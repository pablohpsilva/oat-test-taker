import React, { FC } from 'react'

import IIcon from './types'

const Icon: FC<IIcon> = ({ src, alt = 'Icon...', size = 24 }) =>
    src && (
        <picture>
            <img src={src} alt={alt} height={size} />
        </picture>
    )

export default Icon
