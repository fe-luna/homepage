import React, { useState } from 'react'
import Tag from '@/components/tag'
import './style'

export default function About() {
  const mail = ['feluna.zhang', 'gmail.com'].join('@')
  const [isShowMail, setisShowMail] = useState(false)
  const toGithub = () => {
    window.open('https://github.com/fe-luna')
  }
  const toLinkedin = () => {
    window.open('https://www.linkedin.com/in/fe-luna')
  }

  return (
    <div className='about-wrapper'>
      <Tag tag='h2' style={{ marginTop: 100 }}>
        <h2 className='title'>About</h2>
      </Tag>
      <Tag tag='p'>
        <span className='text'>
          I'm Luna, graduated from Xiamen University. <br /> Five-year work expreience, freelancers for the last two
          years, focusing on front end development.
          <br />
        </span>
        <span className='text'>
          {'Contact me?  '}
          {isShowMail ? (
            <span>{`${mail}`}</span>
          ) : (
            <span onClick={setisShowMail.bind(null, true)}>Click me to get my email.</span>
          )}
        </span>
      </Tag>
      <Tag tag='div'>
        <div className='icon github' onClick={toGithub} />
        <div className='icon linkedin' onClick={toLinkedin} />
      </Tag>
      <div className='bg'>FRONT-END</div>
    </div>
  )
}
