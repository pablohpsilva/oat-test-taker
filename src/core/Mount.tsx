import '@/core/styles.global.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'

import { Store, Router } from '@/core'
import { IMountProps } from '@/types'

type IMount = (props: IMountProps) => void

const Mount: IMount = (el, initialState = {}) => {
    const history = createBrowserHistory()
    const store = Store(initialState)

    ReactDOM.render(
        <Provider store={store}>
            <Router history={history} />
        </Provider>,

        el
    )
}

export default Mount
