import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'

import { Avatar } from '@/components'
import readme from './readme.raw.md'

const AvatarComp = ({
    picture = text('picture', 'https://placeimg.com/600/300/any'),
    alt = text('alt', 'https://placeimg.com/600/300/any'),
    size = number('size', 86),
}) => <Avatar picture={picture} alt={alt} size={size} />

const opts = {
    notes: { markdown: readme }
}

storiesOf('Components|Avatar', module)
    .addDecorator(storyFn => <div>{storyFn()}</div>)
    .add('Example', () => <AvatarComp />, opts)
