import React from 'react'
import Tag from '@/components/tag'
import './style'

export default function About() {
  const toGithub = () => {
    window.open('https://github.com/fe-luna')
  }
  const toLinkedin = () => {
    window.open('https://www.linkedin.com/in/fe-luna')
  }
  const toResume = () => {
    window.open('https://github.com/fe-luna/fe-luna/blob/main/chen.pdf')
  }

  return (
    <div className='about-wrapper'>
      <Tag tag='h2' style={{ marginTop: 100 }}>
        <h2 className='title'>About</h2>
      </Tag>
      <Tag tag='p'>
        <span className='text'>
          I'm Luna, more than 4 years of working experience as a web and data developer, and 1 year experience of college lecturer teaching web development.<br />
          Competent in delivering high-quality web products leveraging the React tech stack, with a solid understanding of frontend engineering.<br />
          <br/>
          💪 I'm seeking a job as a Frontend Engineer (Singapore DP holder).<br />
          <span onClick={toResume} style={{ cursor: 'pointer' }}>👉 Click to view my resume.</span>
        </span>
      </Tag>
      <Tag tag='div'>
        <div className='icon github' onClick={toGithub} />
        <div className='icon linkedin' onClick={toLinkedin} />
      </Tag>
      <div className='bg'>FRONTEND</div>
    </div>
  )
}
