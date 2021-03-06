import React from 'react'

import IErrorBoundaryProps, { IErrorBoundaryState } from './types'

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
    public constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    public static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    public componentDidCatch() {
        const { hasError } = this.state
        if (hasError) {
            // @ts-ignore
            this.setState({ hasError: false })
        }
    }

    public render() {
        const { hasError } = this.state
        const { children, renderNotFound } = this.props
        return hasError ? renderNotFound() : children
    }
}

export default ErrorBoundary
