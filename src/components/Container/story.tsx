import React from 'react'
import { storiesOf } from '@storybook/react'

import { Container } from '@/components'
import readme from './readme.raw.md'

const ContainerComp = () => <Container>I'm centered!</Container>

const opts = {
    notes: { markdown: readme }
}

storiesOf('Components|Container', module)
    .addDecorator(storyFn => <div>{storyFn()}</div>)
    .add('Example', () => <ContainerComp />, opts)
