import React from 'react'
import { storiesOf } from '@storybook/react'

import { SiteContent } from '@/components'
import readme from './readme.raw.md'

const SiteContentComp = () => <SiteContent>This is a content :)</SiteContent>

const opts = {
    notes: { markdown: readme }
}

storiesOf('Components|SiteContent', module)
    .addDecorator(storyFn => <div>{storyFn()}</div>)
    .add('Example', () => <SiteContentComp />, opts)
