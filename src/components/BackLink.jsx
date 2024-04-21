import { Link, useNavigate } from "react-router-dom"
import './backlink.css'

export default function BackLink({prevPage}) {
  const navigate = useNavigate()
  return (
    <Link className='product-item-btn back-btn' to={`/products${prevPage ? `${'/'+prevPage}` : ''}`}></Link>
  )
}
