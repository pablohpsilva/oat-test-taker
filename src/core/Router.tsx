import React, { FC, Suspense } from 'react'
import { Router as ReactRouter, Redirect } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import { Main } from '@/layouts'
import { Home, Import, User } from '@/screens'
import { ROOT, IMPORT, USER } from '@/config/URL'
import { ErrorBoundary, Loading } from '@/components'

const WithLayout = ({ layout: Layout, component: Component, ...rest }) => (
    <Route
        {...rest}
        render={matchProps => (
            <Layout {...matchProps}>
                <ErrorBoundary renderNotFound={() => <div>error :(</div>}>
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
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Redirect path="/en" to={ROOT} />
                        <WithHotLayout layout={Main} path={ROOT} exact component={Home} />
                        <WithHotLayout layout={Main} path={IMPORT} exact component={Import} />
                        <WithHotLayout layout={Main} path={USER} exact component={User} />
                    </Switch>
                </Suspense>
            </ReactRouter>
        </>
    )
}

export default Router
