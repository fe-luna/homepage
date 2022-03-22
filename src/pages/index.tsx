import React from 'react'
import Tag from '@/components/tag'
import Home from './home'
import About from './about'

export default function () {
  return (
    <Tag tag='html' indent={30} style={{ paddingTop: 20, paddingBottom: 20 }}>
      <Tag tag='body' indent={30}>
        <Home />
        <About />
        <div style={{ height: 50 }} />
      </Tag>
    </Tag>
  )
}
