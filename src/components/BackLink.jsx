import { Link, useNavigate } from "react-router-dom"
import './backlink.css'

export default function BackLink() {
  const navigate = useNavigate()
  return (
    <button className='product-item-btn back-btn' onClick={() => navigate(-1)}></button>
  )
}
