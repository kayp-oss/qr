import type React from 'react'
import type { PropsWithChildren, ReactNode } from 'react'

interface LayoutParam<P> {
  params: Promise<P>
}

export interface LayoutWrapperFn<P = object> extends Omit<React.FC, ''> {
  (props: PropsWithChildren<LayoutParam<P>>): ReactNode | Promise<ReactNode>
}

export * from './base-layout'
export * from './root-layout'
