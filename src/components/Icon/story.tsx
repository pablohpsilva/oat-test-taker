import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'

import { Icon } from '@/components'
import readme from './readme.raw.md'

const IconComp = ({
    src = text('src', 'https://placeimg.com/600/300/any'),
    alt = text('alt', 'https://placeimg.com/600/300/any'),
    size = number('size', 30)
}) => <Icon src={src} alt={alt} size={size} />

const opts = {
    notes: { markdown: readme }
}

storiesOf('Components|Icon', module)
    .addDecorator(storyFn => <div>{storyFn()}</div>)
    .add('Example', () => <IconComp />, opts)
