import '@/core/styles.global.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'

import { Router } from '@/core'
import { addClickHandler } from '@/utils/helpers'
import { IMount } from '@/types/core'

const Mount: IMount = el => {
    const history = createBrowserHistory()

    document.body.addEventListener('click', addClickHandler)

    ReactDOM.render(<Router history={history} />, el)
}

export default Mount
