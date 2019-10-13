import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, select, number, object } from '@storybook/addon-knobs'

import { Tile } from '@/components'
import uuid from '@/utils/uuid'
import readme from './readme.raw.md'

const TileComp = ({
    userId = text('userId', uuid()),
    firstName = text('firstName', 'Figgaro'),
    lastName = text('lastName', 'Delgado'),
    title = text('title', 'Mr'),
    picture = text('picture', 'https://placeimg.com/600/300/any')
}) => <Tile userId={userId} firstName={firstName} lastName={lastName} title={title} picture={picture} />

const opts = {
    notes: { markdown: readme }
}

storiesOf('Components|Tile', module)
    .addDecorator(storyFn => <div>{storyFn()}</div>)
    .add('Example', () => <TileComp />, opts)
