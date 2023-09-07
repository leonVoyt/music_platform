import React from 'react'
import classes from '@/styles/components/RecomendedItem.module.scss'
import Image from 'next/image'
import img from '@/assets/album1.svg'
import { useTypeSelector } from '@/store/hooks/useTypeSelector'

const RecomendedItem = () => {
  const { isHide, loading, error } = useTypeSelector(
    (state) => state.hideBarReducer
  )

  return (
    <div
      className={`${classes['recomended__list--item']} ${
        isHide ? classes['current'] : ''
      }`}
    >
      <Image alt="" src={img} />
      <div className="name">
        <p>
          <b>Chill Mix</b>
        </p>
      </div>
    </div>
  )
}

export default RecomendedItem
