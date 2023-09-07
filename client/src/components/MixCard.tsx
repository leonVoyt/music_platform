import React from 'react'
import classes from '@/styles/components/MixCard.module.scss'
import Image from 'next/image'
import img from '@/assets/album1.svg'

const MixCard = () => {
  return (
    <div className={classes['mix-card']}>
      <div className={classes['container']}>
        <Image alt="" src={img} />
      </div>
    </div>
  )
}

export default MixCard
