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
        <Route path='/' element={<Main />} />
        <Route path='/auth' element={<Authentication />} />
        <Route path='/search' element={<Search />} />
        <Route path='/user' element={<User />} />
        <Route path='/board'>
          <Route path='write' element={<BoardWrite />} />
          <Route path='update/:boardNo' element={<BoardUpdate />} />
          <Route path='detail/:boardNo' element={<BoardDetail />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
