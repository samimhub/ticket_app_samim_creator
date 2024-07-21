import { TiTick } from "react-icons/ti";

function PriorityDisplay({ priority }) {

  console.log("Priority:", priority);

  // Define the number of priority levels
  const maxPriority = 5;
  
  return (
    <div className="flex justify-start align-baseline">
      {Array.from({ length: maxPriority }, (_, index) => (
        <TiTick
          key={index}
          className={`pr-1 ${
            priority > index ? "text-red-400" : "text-slate-400"
          }`}
        />
      ))}
    </div>
  );
}

export default PriorityDisplay;
