import React from 'react'
import './style'

interface Props {
  tag: string
  indent?: number
  style?: any
  children?: any
}

function Tag(props: Props) {
  const { indent = 0 } = props
  const begin = `<${props.tag}>`
  const end = `</${props.tag}>`
  return (
    <div style={{ paddingLeft: indent, ...props.style }}>
      <span className='tag'>{begin}</span>
      <div className='tag__children'>{props.children}</div>
      <span className='tag'>{end}</span>
    </div>
  )
}

export default Tag
