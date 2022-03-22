import React from 'react'
import Tag from '@/components/tag'
import './style.scss'

export default function Home() {
  return (
    <div className='home-wrapper'>
      <Tag tag='h1' style={{ marginTop: 100 }}>
        <h1 className='h1'>
          Hi, <br /> I'm Luna,
          <br /> Web Engineer
        </h1>
      </Tag>
      <Tag tag='p' style={{ marginTop: 10 }}>
        <div className='grey-text'>Front End Engineer</div>
      </Tag>
      <div className='bg' />
    </div>
  )
}
