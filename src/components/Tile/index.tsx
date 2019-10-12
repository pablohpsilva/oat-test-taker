import React, { FC } from 'react'
import { generatePath } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import { Avatar } from '@/components'
import { USER } from '@/config/URL'
import ITile from './types'

const StyledWrapper = styled.div`
    border: var(--s) solid var(--color-dark-1-30);
    border-radius: calc(3 * var(--s));
    background: var(--color-light-0);
    padding: var(--dim-gutter);
    display: flex;
    justify-content: center;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto 10fr;
    grid-template-rows: 1fr;
    grid-gap: var(--dim-gutter);
    width: 100%;
    align-items: center;
`

const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    grid-gap: var(--dim-gutter);
    width: 100%;
    align-items: center;
`

const Tile: FC<ITile> = ({ userid, email, title, lastname, firstname, picture }) => {
    return (
        <Link to={generatePath(USER, { userid })}>
            <StyledWrapper>
                <Grid>
                    <Avatar picture={picture} alt={firstname} size={60}/>
                    <ContentGrid>
                        <div>
                            <span>{`${title ? `${title}. ` : ''}${lastname} ${firstname}`}</span>
                        </div>
                        <div>
                            <span>{email}</span>
                        </div>
                    </ContentGrid>
                </Grid>
            </StyledWrapper>
        </Link>
    )
}

export default Tile
