import Image from 'next/image'
import React from 'react'
import githubLogo from '../../../public/media/Github.png'
import instaLogo from '../../../public/media/Instagram.png'

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://github.com/theKevinator900">
        <div className="logo">
          <Image src={githubLogo} alt="Github Logo"/>
        </div>
      </a>
      <a href="https://www.instagram.com/thekevinator900/">
        <div className="logo">
          <Image src={instaLogo} alt="Instagranm Logo"/>
        </div>
      </a>
    </div>
  )
}

export default Socials