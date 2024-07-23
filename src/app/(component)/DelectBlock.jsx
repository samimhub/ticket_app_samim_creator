"use client"

import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";

function DelectBlock({ id }) {
  const router = useRouter();

  const delectTicket = async () => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };
  return (
    <MdDelete className="w-10 h-8 text-blue-500 hover:cursor-pointer hover:text-red-400"
      onClick={delectTicket}
    />
  )
}

export default DelectBlock
