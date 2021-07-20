import * as React from 'react'
import './RectangularSkeleton.scss'

export interface IRectangularSkeletonProps {}

export default function RectangularSkeleton(
  props: IRectangularSkeletonProps,
): JSX.Element {
  return <div className='rectangular-skeleton' />
}
