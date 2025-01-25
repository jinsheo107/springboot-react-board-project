import React from 'react';
import './style.css';
import { BaordListItem } from 'types/interface';
import { useNavigate } from 'react-router-dom';
import defaultProfileImage from 'assets/image/person.jpg';

interface Props {
  boardListItem: BaordListItem
}

// component: BoardList Item Component
export default function BoardItem({ boardListItem }: Props) {

  // properties
  const { boardNo, title, content, boardTitleImage } = boardListItem;
  const { favoriteCount, commentcount, viewCount } = boardListItem;
  const { writeDatetime, writerNickname, writerProfileImage } = boardListItem;

  // function: navigator
  // const navigator = useNavigate();

  // event handler: board item click event
  const onClickHandler = () => {
    // navigator(boardNo);
  }
  
  // render: BoardList Item Component Rendering
  return (
    <div className='board-list-item' onClick={onClickHandler}>
      <div className='board-list-item-main-box'>
        <div className='board-list-item-top'>
          <div className='board-list-item-profile-box'>
            <div className='board-list-item-profile-image' style={{ backgroundImage: `url(${writerProfileImage? writerProfileImage : defaultProfileImage})` }}></div>
          </div>
          <div className='board-list-item-write-box'>
            <div className='boad-list-item-writer-nickname'>{writerNickname}</div>
            <div className='board-list-item-write-date'>{writeDatetime}</div>
          </div>
        </div>
        <div className='board-list-item-middle'>
          <div className='board-list-item-title'>{title}</div>
          <div className='board-list-item-content'>{content}</div>
        </div>
        <div className='board-list-item-bottom'>
          <div className='board-list-item-counts'>{`댓글 ${commentcount} · 좋아요 ${favoriteCount} · 조회수 ${viewCount}`}</div>
        </div>
      </div>
      {boardTitleImage !== null && (
        <div className='board-list-item-image-box'>
          <div className='board-list-item-image' style={{ backgroundImage: `url(${boardTitleImage})` }}></div>
        </div>
      )}
    </div>
  )
}
