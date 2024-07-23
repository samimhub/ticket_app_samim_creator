"use client"

import { MdDelete } from "react-icons/md";

function DelectBlock({ id ,onDelect}) {

  const delectTicket = async () => {
    const res = await fetch(`https://quickticket-creator-app.vercel.app/api/Tickets/${id}`, {
      method: "DELETE",
    });
    
    if (res.ok) {
      onDelect(id);
    }
  };
  return (
    <MdDelete className="w-10 h-8 text-blue-500 hover:cursor-pointer hover:text-red-400"
      onClick={delectTicket}
    />
  )
}

export default DelectBlock
