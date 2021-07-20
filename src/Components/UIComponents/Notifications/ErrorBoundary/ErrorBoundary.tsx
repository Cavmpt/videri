import React, {useContext} from 'react'
import {ContextType, Context} from '../../../../Store/Provider'

export interface IErrorBoundaryProps {
  placeholder?: any
  children: React.ReactNode
}

export default function ErrorBoundary(props: IErrorBoundaryProps) {
  const {children} = props
  const context = useContext<ContextType>(Context)
  const {errors} = context
  return (
    <>
      <div>{errors}</div>
      {children}
    </>
  )
}
