import Footer from 'layouts/Footer'
import Header from 'layouts/Header'
import { Outlet, useLocation } from 'react-router-dom'
import React from 'react'
import { AUTH_PATH } from 'constant';

export default function Container() {

  // 현재 페이지 pathname
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <Outlet/>
      {pathname !== AUTH_PATH() && <Footer/>}
    </>
  )
}
