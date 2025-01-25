import React from 'react'
import { FavoriteListItem } from 'types/interface';
import defaultProfileImage from 'assets/image/person.jpg';
import './style.css';

interface Props {
  favoriteListItem: FavoriteListItem
}

// component: Favorite List Item Component
export default function FavoriteItem({ favoriteListItem }: Props) {
  // properties
  const { profileImage, nickname } = favoriteListItem;

  console.log(profileImage);
  console.log(defaultProfileImage);

  // render
  return (
    <div className='favorite-list-item'>
      <div className='favorite-list-item-profile-box'>
        <div className='favorite-list-item-profile-image' style={{ backgroundImage: `url(${profileImage ? profileImage : defaultProfileImage})` }}></div>
      </div>
      <div className='favorite-list-item-nickname'>{nickname}</div>
    </div>
  )
}
