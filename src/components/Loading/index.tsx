import React, { FC } from 'react'
import styled from 'styled-components/macro'

import loadingSVG from '@/assets/animation/loading.svg'
import { Icon } from '@/components'
import ILoading from './types'

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: var(--dim-gutter);
`

const Loading: FC<ILoading> = ({ size = 30 }) => (
    <StyledWrapper>
        <Icon src={loadingSVG} alt="loading..." size={size} />
    </StyledWrapper>
)

export default Loading
