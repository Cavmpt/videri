import * as React from 'react'

import './RoundSkeleton.scss'

export interface IRoundSkeletonProps {
  height: string
  width: string
}

export default function RoundSkeleton(props: IRoundSkeletonProps): JSX.Element {
  return <div className='round-skeleton' />
}
