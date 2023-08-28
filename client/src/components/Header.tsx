import Image from 'next/image'
import React from 'react'
import avatar from '@/assets/Screenshot 2022-06-05 at 12.21 1.svg'
import indicator from '@/assets/Polygon 3.png'
import arrow from '@/assets/Polygon 2 (Stroke).png'
import { useTypeSelector } from '@/store/hooks/useTypeSelector'
import { useAction } from '@/store/hooks/useAction'
import clsses from '@/styles/components/Header.module.scss'

const Header = () => {
  const { isHide, loading, error } = useTypeSelector(
    (state) => state.hideBarReducer
  )
  const { setIsHide } = useAction()
  return (
    <header className={clsses.header}>
      <div className={clsses['main__buttons']}>
        <div className={clsses['main__buttons--left']}>
          <Image alt="" src={arrow} />
        </div>
        <div className={clsses['main__buttons--right']}>
          <Image alt="" src={arrow} />
        </div>
      </div>
      <div className={clsses['avatar-bar']} onClick={() => setIsHide(!isHide)}>
        <div className={clsses['avatar-bar__avatar']}>
          <Image alt="" src={avatar} />
        </div>
        <div className={clsses['avatar-bar__text']}>
          <span>david</span>
        </div>
        <div className={clsses['avatar-bar__indicator']}>
          <Image alt="" src={indicator} />
        </div>
      </div>
    </header>
  )
}

export default Header
