import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'

import { Loading } from '@/components'
import readme from './readme.raw.md'

const LoadingComp = ({ size = number('size', 30) }) => <Loading size={size} />

const opts = {
    notes: { markdown: readme }
}

storiesOf('Components|Loading', module)
    .addDecorator(storyFn => <div>{storyFn()}</div>)
    .add('Example', () => <LoadingComp />, opts)
