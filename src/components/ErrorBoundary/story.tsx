import React from 'react'
import { storiesOf } from '@storybook/react'

import { ErrorBoundary } from '@/components'
import readme from './readme.raw.md'

const ErrorBoundaryComp = () => <ErrorBoundary />

const opts = {
    notes: { markdown: readme }
}

storiesOf('Components|ErrorBoundary', module)
    .addDecorator(storyFn => <div>{storyFn()}</div>)
    .add('Complex example', () => <ErrorBoundaryComp />, opts)
