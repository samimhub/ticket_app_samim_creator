import Link from "next/link"
import { IoHomeOutline } from "react-icons/io5";
import { FaTicketAlt } from "react-icons/fa";


function Nav() {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-8">
        <Link href='/'>
        <IoHomeOutline className="icon"/>
        </Link>
        <Link href='/TicketPage/new'>
        <FaTicketAlt className="icon"/>
        </Link>
      </div>
      <div>
      samim@gmail.com
      </div>
    </nav>
  )
}

export default Nav
