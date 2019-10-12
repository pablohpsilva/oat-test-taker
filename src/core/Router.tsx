import React, { FC, Suspense } from 'react'
import { Router as ReactRouter, Redirect } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import { Main } from '@/layouts'
import { Home, Import } from '@/screens'
import { ROOT, IMPORT, USER } from '@/config/URL'
import { ErrorBoundary } from '@/components'

const Loader = () => <div>loading...</div>

const WithLayout = ({ layout: Layout, component: Component, ...rest }) =>
    (
        <Route
            {...rest}
            render={matchProps => (
                <Layout {...matchProps}>
                    <ErrorBoundary>
                        <Component {...matchProps} />
                    </ErrorBoundary>
                </Layout>
            )}
        />
    )

const WithHotLayout = hot(module)(WithLayout)
const Router: FC<{ history: History }> = ({ history }) => {
    return (
        <>
            <ReactRouter history={history}>
                <Suspense fallback={<Loader />}>
                    <Switch>
                        <Redirect path="/en" to={ROOT} />
                        <WithHotLayout layout={Main} path={ROOT} exact component={Home} />
                        <WithHotLayout layout={Main} path={IMPORT} exact component={Import} />
                        <WithHotLayout layout={Main} path={USER} exact component={Import} />
                        {/* <WithHotLayout layout={Main} component={NotFound} /> */}
                    </Switch>
                </Suspense>
            </ReactRouter>
        </>
    )
}

export default Router
