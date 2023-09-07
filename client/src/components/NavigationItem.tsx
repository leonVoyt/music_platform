import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import classes from '@/styles/components/LeftBar.module.scss'

interface NavigationItemProps {
  img: string | StaticImageData
  link: string
  children: string
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  img,
  link,
  children,
}) => {
  const [current, setCurrent] = useState(false)
  const { pathname } = useRouter()
  // console.log(pathname, `${link}`)

  useEffect(() => {
    if (pathname === `${link}`) {
      setCurrent(true)
    } else {
      setCurrent(false)
    }
  }, [])
  return (
    <Link href={`${link}`}>
      <div
        className={`${classes['left-bar__navigation--item']} ${
          current ? classes['current'] : ''
        }`}
        // onClick={() => setCurrent(true)}
      >
        <Image alt="" src={img} />
        <span>{children}</span>
      </div>
    </Link>
  )
}

export default NavigationItem
