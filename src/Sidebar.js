import React from 'react';
import Channel from './Channel';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className="sidebar-top">
    <h5>FOLLOWED CHANNELS</h5>
    <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/996b84a5-b0a5-4d28-9619-b8e90cc25c66-profile_image-70x70.png'
    name='gdolphn'
    followers='98.4k' />
    <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/4949f77c-83b8-4443-a455-a212d77c6e51-profile_image-70x70.png'
    name='laski'
    followers='175k' />
    <h5>RECOMMENDED CHANNELS</h5>
    <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/c151af8a-4237-4721-932a-82285be5dadd-profile_image-70x70.png'
    name='Sunset'
    followers='15k' />
      <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/3011f0d8-5e92-4c87-814a-49f3b9f89cdd-profile_image-70x70.png'
    name='nixaims'
    followers='75k' />

    <p className='sidebar-topShowMore'>
        Show More
    </p>
    </div>
        <div className="sidebar-bottom">
            <div className="sidebar-bottomContainer">
                <i className='fas fa-search'></i>
                <input type='text' placeholder='Search to Add Friends' />
            </div>
        </div>
    </div>
  )
}

export default Sidebar