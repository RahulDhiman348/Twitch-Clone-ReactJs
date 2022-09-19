import React from 'react'
import './RecentItem.css'

const RecentItem = ({ url, title }) => {
  return (
    <div className='item'>
        <iframe 
         width="400"
         height="220" 
         src={url}
         title="TOXIC || Apex Legends Montage" 
         frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
         allowfullscreen></iframe>

    <div className="item-details">
        <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/3d366bf5-1fca-4c59-b38e-7ffd3e112d32-profile_image-70x70.png" alt='videoimg' />
        <div className="item-detailsText">
            <h4>{title}</h4>
            <p>SteelShotFPS</p>
            <p>Art & Gaming</p>
        </div>
    </div>
    </div>
  )
}

export default RecentItem