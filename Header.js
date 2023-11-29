import { Icon } from '@iconify/react' 
import React from 'react'
import locationIcon from '@iconify/icons-mdi/fire-alert';
import LocationInfo from './LocationInfo'

const Header = () => {
  return (
    <div className='header'>
                <div class="box-with-background">
        <h1><Icon icon = {locationIcon} className="header-icon" /> InfernoAlert </h1>
        <h4> (powered by NASA)</h4>
  </div>
    </div>
  )
}

export default Header