import React from 'react'
import NavigationItem from './NavigationItem'
import home from '../assets/home.png'
import searchIcon from '../assets/search (2).png'
import library from '../assets/Library_S.png'
import createPlaylist from '../assets/Subtract.png'
import liked from '../assets/Liked Songs_S.png'
import classes from '@/styles/components/LeftBar.module.scss'

const LeftBar = () => {
  return (
    <div className={classes[`left-bar`]}>
      <div className={classes['left-bar__container']}>
        <div className={classes['left-bar__navigation']}>
          <NavigationItem img={home} link="/">
            Home
          </NavigationItem>
          <NavigationItem img={searchIcon} link="/search">
            Search
          </NavigationItem>
          <NavigationItem img={library} link="/library">
            Your Library
          </NavigationItem>
          <hr />
          <NavigationItem img={createPlaylist} link="/fd">
            Create Playlist
          </NavigationItem>
          <NavigationItem img={liked} link="/ffd">
            Liked Songs
          </NavigationItem>
        </div>
        <hr />

        <div className={classes['left-bar--playlists']}>
          <h2>Your playlist`s</h2>
          <p>fsdfaasf</p>
          <p>fsdfaasf</p>
          <p>fsdfaasf</p>
          <p>fsdfaasf</p>
          <p>fsdfaasf</p>
          <p>fsdfaasf</p>
        </div>
      </div>
    </div>
  )
}

export default LeftBar
