import React from 'react';
import './style.css';
import defaultProfileImage from 'assets/image/person.jpg'
import { BaordListItem } from 'types/interface';
import { useNavigate } from 'react-router-dom';

interface Props {
  top3ListItem: BaordListItem
}

// component: Top 3 List Item Component
export default function Top3Item({ top3ListItem }: Props) {

  // properties 
  const { boardNo, title, content, boardTitleImage } = top3ListItem;
  const {favoriteCount, commentcount, viewCount} = top3ListItem;
  const { writeDatetime, writerNickname, writerProfileImage } = top3ListItem;

  // function: navigate function
  // const navigator = useNavigate();

  // event handler: item click event
  const onClickHandler = () => {
  // navigator(boardNo);
  }

  // render: Top 3 List Item Component Rendering
  return (
    <div className='top-3-list-item' style={{ backgroundImage: `url(${boardTitleImage})` }} onClick={onClickHandler}>
      <div className='top-3-list-item-main-box'>
        <div className='top-3-list-item-top'>
          <div className='top-3-list-item-profile-box'>
            <div className='top-3-list-item-profile-image' style={{ backgroundImage: `url(${writerProfileImage ? writerProfileImage : defaultProfileImage})` }}></div>
          </div>
          <div className='top-3-list-item-write-box'>
            <div className='top-3-list-item-nickname'>{writerNickname}</div>
            <div className='top-3-list-item-write-date'>{writeDatetime}</div>
          </div>
        </div>
        <div className='top-3-list-item-middle'>
          <div className='top-3-list-item-title'>{title}</div>
          <div className='top-3-list-item-content'>{content}</div>
        </div>
        <div className='top-3-list-item-bottom'>
          <div className='top-3-list-item-counts'>{`댓글 ${commentcount}· 좋아요 ${favoriteCount} · 조회수 ${viewCount}`}</div>
        </div>
      </div>
    </div>
  )
}