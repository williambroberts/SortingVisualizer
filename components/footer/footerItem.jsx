import React from 'react'

const FooterItem = ({link,text,icon}) => {
  return (
    <a className='footer-anchor'
    href={link} target='_blank'><span>{icon}</span> {text}</a>
  )
}

export default FooterItem