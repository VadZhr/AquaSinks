import { Link } from "react-router-dom"

export default function linkAddNew({toPage}) {
  
  return (
    <Link className="add-new-btn" to={`/admin${toPage ?? ''}add-new`}>+</Link>
)
}
