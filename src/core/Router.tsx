import Cookie from 'js-cookie'
import React, { FC, Suspense, useEffect } from 'react'
import { Router as ReactRouter, Redirect } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import { History } from 'history'
import { hot } from 'react-hot-loader'
import { Loader } from 'dh-react-athena-ui'

import { ErrorBoundary } from '@/components'

import { Main } from '@/layouts'
import { Home } from '@/screens'
import { ROOT } from '@/config/URL'

const isLoggedInNoSession = !Cookie.get('session') && Cookie.get('alToken')

const WithLayout = ({ layout: Layout, component: Component, ...rest }) =>
    isLoggedInNoSession ? (
        <div>please, log in</div>
    ) : (
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
                        <WithHotLayout layout={Main} path={ACCOUNT_SETTINGS} component={AccountSettings} />
                        <WithHotLayout layout={Main} path={DISCOVER} exact component={Discover} />
                        <WithHotLayout layout={Main} path={EDITOR} exact component={Editor} />
                        <WithHotLayout layout={Main} path={FAVORITES} exact component={Favorites} />
                        <WithHotLayout layout={Main} path={MY_HISTORY} exact component={MyHistory} />
                        <WithHotLayout layout={Main} path={MESSENGER} exact component={Messenger} />
                        <WithHotLayout layout={Main} path={MODEL_PAGE_CONTEST} exact component={ModelPage} />
                        <WithHotLayout layout={Main} path={MODEL_PAGE} exact component={ModelPage} />
                        <WithHotLayout layout={Main} path={ARTICLE_SINGLE} exact component={ArticlePage} />
                        <WithHotLayout layout={Main} path={CONTACT_US} exact component={ContactUs} />
                        <WithHotLayout layout={Main} path={FAQ} exact component={Faq} />
                        <WithHotLayout layout={Main} path={TERMS_AND_CONDITIONS} exact component={TermsAndConditions} />
                        <WithHotLayout layout={Main} path={ANTISPAM_POLICY} exact component={AntispamPolicy} />
                        <WithHotLayout layout={Main} path={REFUND_POLICY} exact component={RefundPolicy} />
                        <WithHotLayout layout={Main} path={[PRIVACY_POLICY, POLICY]} exact component={PrivacyPolicy} />
                        <WithHotLayout layout={Main} path={COOKIES_POLICY} exact component={CookiesPolicy} />
                        <WithHotLayout layout={Main} path={DMCA_COMPLAINT} exact component={DMCAComplaint} />
                        <WithHotLayout layout={Main} path={CHECK_NEW_PASSWORD} exact component={CheckNewPassword} />
                        <WithHotLayout layout={Main} path={LOGOUT} exact component={Logout} />
                        <WithHotLayout layout={Main} path={NOT_FOUND} exact component={NotFound} />
                        <WithHotLayout layout={Main} component={NotFound} />
                    </Switch>
                </Suspense>
            </ReactRouter>
        </>
    )
}

export default Router
