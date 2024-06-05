import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './categories.css'
import LinkAddNew from '../components/linkAddNew'
import axios from 'axios'
import { combineSlices } from '@reduxjs/toolkit'
import AdminService from '../service/adminService'
import { addCategory, getCategoryPage } from '../features/category/categorySlice';
import IsLoading from '../components/isLoading'
import SkeletonLoading from '../components/skeletonLoading'






export default function Categories() {
  const allCategories = useSelector(state => state.categorySlice.allCategories)
  const isLoading = useSelector(state => state.categorySlice.isLoading)
  const [path, setPath] = useState(['bath', 'counter', 'shower', 'sinks'])
  const dispatch = useDispatch()
  const data = JSON.stringify({state: 20000})

  useEffect(() => { 
    dispatch(getCategoryPage())
  },[])

  if(isLoading){
    return <SkeletonLoading/>
  }

  return (
    <section className="admin-categories">
      {allCategories.map((element, i) => (
        <Link key={i} className="category-card" to={`/admin/categories/${element.categoryPath}`}>
          <h1>{element.categoryName}</h1>
        </Link>
      ))}

      <LinkAddNew toPage='/categories/'/>
    </section>

  )
}
