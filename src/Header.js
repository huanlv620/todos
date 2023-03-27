import { memo } from "react"

function Header() {
  console.log('huan cute')
  return (
    <ul>
      <li>Home </li>
      <li>Maibox</li>
      <li>Analytics</li>
      <li>Dashboard</li>
    </ul>
  )
}

export default memo(Header)