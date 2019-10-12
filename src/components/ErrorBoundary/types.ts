import { ReactNode } from 'react'

export interface IErrorBoundaryState {
    hasError: boolean
}

export default interface IErrorBoundaryProps {
    renderNotFound: () => ReactNode
}
