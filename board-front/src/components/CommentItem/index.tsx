import React from 'react'
import './style.css'

export default function CommentItem() {
  return (
    <div className='comment-list-item'>
      <div className='comment-list-item-top'>
        <div className='comment-list-item-profile-box'>
          <div className='comment-list-item-profile-image'></div>
        </div>
        <div className='comment-list-item-nickname'></div>
        <div className='comment-list-item-divider'></div>
        <div className='comment-list-item-time'></div>
      </div>
      <div className='comment-list-item-main'></div>
    </div>
  )
}
