import React, { FC } from 'react'
import { generatePath } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import { USER } from '@/config/URL'
import ITile from './types'

const StyledWrapper = styled.div`
    border: var(--s) solid var(--color-dark-1);
    border-radius: calc(2 * var(--s));
    background: var(--color-light-0);
    padding: var(--dim-gutter);
    display: grid;
    grid-template-columns: 2fr auto;
    grid-template-rows: 1fr;
`

const Tile: FC<ITile> = ({ userId, title, lastName, firstName, picture }) => {
    return (
        <Link to={generatePath(USER, { userId })}>
            <StyledWrapper>
                <div>{picture}</div>
                <div>
                    <div>
                        <span>{title}</span>
                        <span>{lastName}</span>
                        <span>{firstName}</span>
                    </div>
                </div>
            </StyledWrapper>
        </Link>
    )
}

export default Tile
