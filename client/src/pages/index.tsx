import RootLayout from '@/app/layout'
import React, { useEffect } from 'react'
import classes from '../styles/pages/index.module.scss'
import RecomendedItem from '@/components/RecomendedItem'
import RecomendedColumn from '@/components/RecomendedColumn'

const index = () => {
  useEffect(() => {
    // console.log(ref.current?.offsetWidth)
    const handleResize = () => {
      console.log('111')
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <RootLayout>
      <div className={classes.recomended}>
        <h2>Good afternoon</h2>
        <div className={classes['recomended__list']}>
          <RecomendedItem />
          <RecomendedItem />
          <RecomendedItem />
          <RecomendedItem />
          <RecomendedItem />
          <RecomendedItem />
        </div>
        <RecomendedColumn />
        <RecomendedColumn />
        <RecomendedColumn />
        <RecomendedColumn />
        <RecomendedColumn />
      </div>
    </RootLayout>
  )
}

export default index
