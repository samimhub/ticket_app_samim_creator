import DelectBlock from "./DlectBlock"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay"
import StatusDisplay from "./StatusDisplay"


function TicketCard() {
  return (
    <div className="flex flex-col text-black bg-slate-300 hover:bg-slate-50 rounded-md shadow-lg p-3 m-2">
      <div className=" flex mb-3">
         <PriorityDisplay />
      <div className="ml-auto">
        <DelectBlock />
      </div>
      </div>
      <h4>Ticket Title</h4>
      <hr className="h-px border-0 mb-2"/>
      <p className="whitespace-pre-wrap">This is Ticket Description! Please do this Ticket</p>
      <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs  my-1">27/01/2024 12:22 pm</p>
            <ProgressDisplay />
          </div>
          <div className="ml-auto  flex items-end">
            <StatusDisplay  />
          </div>
        </div>
    </div>
  )
}

export default TicketCard
