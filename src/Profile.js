import React from 'react'
import './Profile.css'
import RecentItem from './RecentItem'

const Profile = () => {
  return (
    <div className='profile'>
    <div className="profile-topLeft">
        <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/3d366bf5-1fca-4c59-b38e-7ffd3e112d32-profile_image-70x70.png" alt="logo" />

        <div className="profile-topLeftDetails">
            <h1>SteelShotFPS</h1>
            <h3>100 followers</h3>
        </div>
    </div>
    <div className="profile-topRight">
        <i className='fas fa-heart graybg'></i>
        <i className='fas fa-bell graybg'></i>
        <i className='fas fa-ellipsis-v'></i>
    </div>
    <div className="profile-menu">
      <h2 className='active'>Home</h2>
      <h2>About</h2>
      <h2>Schedule</h2>
      <h2>Videos</h2>
      <h2><i className='fas fa-arrow-up'></i></h2>
      <h2>Chat</h2>
    </div>
    <div className="profile-recent">
      <h2>Recent Broadcasts</h2>
      <div className="profile-recentItems">
        <RecentItem 
          url={'https://www.youtube.com/embed/GHzYmbGeDdc'}
          title={'Sample Video from my gaming channel'}
        />
        <RecentItem 
          url={'https://www.youtube.com/embed/UiK7BU_wiXg'}
          title={'Sample Video from my gaming channel'}
        />
        <RecentItem 
          url={'https://www.youtube.com/embed/JIzOH9zA9YU'}
          title={'Sample Video from my gaming channel'}
        />
        <RecentItem 
          url={'https://www.youtube.com/embed/yceA0UGQBd4'}
          title={'Sample Video from my gaming channel'}
        />
      </div>

      <div className="profile-categories">
      <h2>SteelShotFPS's recently streamed Categories</h2>
      <img src="https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg" height="280px" width="200px" alt="apex" />
      <h2>Apex Legends</h2>
      </div>
    </div>
    </div>
  )
}

export default Profile 