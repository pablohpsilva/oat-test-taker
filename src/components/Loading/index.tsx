import React from 'react'
import styled from 'styled-components/macro'

import loadingSVG from '@/assets/animation/loading.svg'

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: var(--dim-gutter);
`

const Loading = ({ size = 30 }) => (
    <StyledWrapper>
        <picture>
            <img src={loadingSVG} alt="loading..." height={size} />
        </picture>
    </StyledWrapper>
)

export default Loading
