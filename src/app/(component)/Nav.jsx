import Link from "next/link"
import { IoHomeOutline } from "react-icons/io5";
import { FaTicketAlt } from "react-icons/fa";


function Nav() {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-10">
        <Link href='/'>
        <IoHomeOutline className="w-12 h-8"/>
        </Link>
        <Link href='/TicketPage/new'>
        <FaTicketAlt className="w-12 h-8"/>
        </Link>
      </div>
      <div className="text-xl ">
      samim@gmail.com
      </div>
    </nav>
  )
}

export default Nav
