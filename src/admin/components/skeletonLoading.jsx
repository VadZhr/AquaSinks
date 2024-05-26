import React from 'react'
import LinkAddNew from './linkAddNew'
import './skeletonLoading.css'

export default function skeletonLoading() {
  return (
    <section className="skeleton">
      {[0,0,0,0,0,0,0,0,0].map((element, i) => (
        <div key={i} className="skeleton-card loading">
        </div>
      ))}
      <LinkAddNew/>
    </section>
  )
}
