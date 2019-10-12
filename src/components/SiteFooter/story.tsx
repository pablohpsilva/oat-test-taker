import React from 'react'
import { storiesOf } from '@storybook/react'

import { SiteFooter } from '@/components'
import readme from './readme.raw.md'

const SiteFooterComp = () => <SiteFooter />

const opts = {
    notes: { markdown: readme }
}

storiesOf('Components|SiteFooter', module)
    .addDecorator(storyFn => <div>{storyFn()}</div>)
    .add('Complex example', () => <SiteFooterComp />, opts)
