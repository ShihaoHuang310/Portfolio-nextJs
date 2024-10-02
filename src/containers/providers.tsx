import React from 'react'
import ActiveSectionProvider from './active-section'

type ProvidersProps = {
  children: React.ReactNode
}
export default function Providers({ children }: ProvidersProps) {
  return <ActiveSectionProvider>{children}</ActiveSectionProvider>
}
