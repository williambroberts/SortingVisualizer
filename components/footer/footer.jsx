import React from 'react'
import FooterItem from './footerItem'
import IconGithub from '../icons/socials/github'

const Footer = () => {
  return (
<footer>
<nav>
    <FooterItem link={"https://github.com/williambroberts/SortingVisualizer.git"} icon={<IconGithub/>} text={"Github"} />
</nav>
</footer>  
)
}

export default Footer