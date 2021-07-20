import * as React from 'react'

import './RoundSkeleton.scss'

export interface IRoundSkeletonProps {
  placeholder?: null
}

export default function RoundSkeleton(props: IRoundSkeletonProps): JSX.Element {
  return <div className='round-skeleton' />
}
