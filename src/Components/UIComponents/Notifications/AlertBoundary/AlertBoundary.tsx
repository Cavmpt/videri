import React, {useContext} from 'react'
import {Context, ContextType} from '../../../../Store/Provider'

export interface IAlertBoundaryProps {}

export default function AlertBoundary(props: IAlertBoundaryProps) {
  const context = useContext<ContextType>(Context)
  const {alerts} = context
  return <>{alerts && <div>{alerts}</div>}</>
}
