'use client'

import React, { useEffect } from 'react'

export default function CallUsSelector() {
  useEffect(() => {
    // this ensures the element is recognized after script loads
    if (typeof window !== 'undefined') {
      console.log('CallUsSelector loaded')
    }
  }, [])

  return (
    <call-us-selector
      phonesystem-url="https://fastwheellimo.3cx.us"
      party="fastwheellimo"
    ></call-us-selector>
  )
}
