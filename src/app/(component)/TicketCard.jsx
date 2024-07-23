import Link from "next/link"
import DelectBlock from "./DelectBlock"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay"
import StatusDisplay from "./StatusDisplay"


function TicketCard({ ticket,onDelect }) {
  const formatTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const date = new Date(timestamp);
    const formattedData = date.toLocaleString("en-us", options);
    return formattedData;
  }
  return (
    <div className="flex flex-col text-black bg-slate-300 hover:bg-slate-50 rounded-md shadow-lg p-3 m-2">
      <div className=" flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DelectBlock  onDelect={onDelect}/>
        </div>
      </div>
      <Link href={`/TicketPage/${ticket._id}`} style={{ display: "contents" }} className="cursor-pointer">
        <h4>{ticket.title}</h4>
        <hr className="h-px border-0 mb-2" />
        <p className="whitespace-pre-wrap">{ticket.description}</p>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs  my-1">{formatTimestamp(ticket.createdAt)}</p>
            <ProgressDisplay progress={ticket.progress} />
          </div>
          <div className="ml-auto  flex items-end">
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default TicketCard;
