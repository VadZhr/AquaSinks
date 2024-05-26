import React from 'react'
import Sidebar from './sidebar'
import { Outlet } from 'react-router-dom'

export default function mainPage() {
  return (
    <main className="main-screen">
      <Sidebar></Sidebar>
      <section className="content">
        <Outlet/>    
      </section>
    </main>
  )
}
