import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number, select } from '@storybook/addon-knobs'

import { Icon } from '@/components'
import importSVG from '@/assets/icons/import.svg'
import avatarSVG from '@/assets/icons/avatar.svg'
import readme from './readme.raw.md'

const selectIcons = {
    avatarSVG,
    importSVG
}

const IconComp = ({
    src = select('src', selectIcons, importSVG),
    alt = text('alt', 'I am an icon'),
    size = number('size', 30)
}) => <Icon src={src} alt={alt} size={size} />

const opts = {
    notes: { markdown: readme }
}

storiesOf('Components|Icon', module)
    .addDecorator(storyFn => <div>{storyFn()}</div>)
    .add('Example', () => <IconComp />, opts)
