import { TiTick } from "react-icons/ti";

function PriorityDisplay({priority}) {
  return (
    <div className="flex justify-start align-baseline">
     <TiTick 
    className={` pr-1 ${
      priority > 0 ? " text-red-400" : " text-slate-400"
    }`}
    />
     <TiTick 
    className={` pr-1 ${
      priority > 1 ? " text-red-400" : " text-slate-400"
    }`}
    />
     <TiTick 
    className={` pr-1 ${
      priority > 2 ? " text-red-400" : " text-slate-400"
    }`}
    />
     <TiTick 
    className={` pr-1 ${
      priority > 3 ? " text-red-400" : " text-slate-400"
    }`}
    />
     <TiTick 
    className={` pr-1 ${
      priority > 4 ? " text-red-400" : " text-slate-400"
    }`}
    />
    </div>
  )
}

export default PriorityDisplay
