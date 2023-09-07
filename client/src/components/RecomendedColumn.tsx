import React, { useEffect, useMemo, useRef } from 'react'
import classes from '@/styles/components/RecomendedColumn.module.scss'
import MixCard from './MixCard'
const RecomendedColumn = () => {
  const ref = useRef<HTMLDivElement>(null)

  //   useEffect(() => {
  //     // console.log(ref.current?.offsetWidth)
  //     const handleResize = () => {
  //       console.log(ref.current?.offsetWidth)
  //     }
  //     window.addEventListener('resize', handleResize)

  //     return () => {
  //       window.removeEventListener('resize', handleResize)
  //     }
  //   }, [])

  return (
    <div className={classes['recomended__column']}>
      <div className={classes['recomended__column--text']}>
        <h5>Your top mixes</h5>
        <p className="opacity">SEE ALL</p>
      </div>
      <div className={classes['recomended__column--list']} ref={ref}>
        <MixCard />
        <MixCard />
        <MixCard />
        <MixCard />
      </div>
    </div>
  )
}

export default RecomendedColumn
