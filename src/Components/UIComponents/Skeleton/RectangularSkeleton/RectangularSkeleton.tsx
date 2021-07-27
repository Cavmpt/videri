import * as React from 'react'
import './RectangularSkeleton.scss'

export interface IRectangularSkeletonProps {
  height: string
  width: string
}

export default function RectangularSkeleton(
  props: IRectangularSkeletonProps,
): JSX.Element {
  const {height, width} = props
  return <div style={{height, width}} className='rectangular-skeleton' />
}
