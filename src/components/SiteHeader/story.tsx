import React from 'react'
import { storiesOf } from '@storybook/react'

import { SiteHeader } from '@/components'
import readme from './readme.raw.md'

const SiteHeaderComp = () => <SiteHeader />

const opts = {
    notes: { markdown: readme }
}

storiesOf('Components|SiteHeader', module)
    .addDecorator(storyFn => <div>{storyFn()}</div>)
    .add('Complex example', () => <SiteHeaderComp />, opts)
