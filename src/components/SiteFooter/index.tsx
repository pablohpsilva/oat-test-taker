import React from 'react'
import styled from 'styled-components/macro'
import useBreakpoint from '@w11r/use-breakpoint'

const StyledSiteFooter = styled.div`
    display: grid;
    width: 100%;
    ${({ gap }) => gap && `gap: ${gap};`}
    ${({ cols }) => cols && `grid-template-columns: ${cols};`}
    ${({ rows }) => rows && `grid-template-rows: ${rows};`}
`

const SiteFooter = () => {
    const cols = useBreakpoint('auto auto auto', ['tablet-', 'auto auto'])
    return (
        <StyledSiteFooter cols={cols} rows="1fr">
            <div> </div>
            <div>OAT - Test Takers</div>
            <div>refresh</div>
        </StyledSiteFooter>
    )
}

export default SiteFooter
