import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from 'views/Main';
import Authentication from 'views/Authentication';
import Search from 'views/Search';
import User from 'views/User';
import BoardDetail from 'views/Board/Detail';
import BoardWrite from 'views/Board/Write';
import BoardUpdate from 'views/Board/Update';
import Container from 'layouts/Container';
import { MAIN_PATH, AUTH_PATH, SEARCH_PATH, USER_PATH, BOARD_PATH, BOARD_WRITE_PATH, BOARD_DETAIL_PATH, BOARD_UPDATE_PATH } from 'constant';


// component: Application Component
function App() {

  // render: Application Component Rendering

  // description: main => '/' - Main
  // description: login + singup => '/auth' - Authentication
  // description: search => '/search/:searchWord' - Search
  // description: user => '/user/:eamil' - User

  // description: board detail => '/board/detail/:boardNo' - BoardDetail
  // description: board write => '/board/wrtie' - BoardWrite
  // description: board update => '/board/update/boardNo' - BoardUpdate

  return (
    <Routes>
      <Route element={<Container />}>
        <Route path={MAIN_PATH()} element={<Main />} />
        <Route path={AUTH_PATH()} element={<Authentication />} />
        <Route path={SEARCH_PATH(':searchWord')} element={<Search />} />
        <Route path={USER_PATH(':userEmail')} element={<User />} />
        <Route path={BOARD_PATH()}>
          <Route path={BOARD_WRITE_PATH()} element={<BoardWrite />} />
          <Route path={BOARD_DETAIL_PATH(':boardNo')} element={<BoardDetail />} />
          <Route path={BOARD_UPDATE_PATH(':boardNo')} element={<BoardUpdate />} />
        </Route>

        {/* 404 NOT FOUND */}
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
