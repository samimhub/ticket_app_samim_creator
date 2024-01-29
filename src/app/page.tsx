import TicketCard from "./(component)/TicketCard"

function Dashboard() {
  return (
    <div className="p-4">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
      </div>
    </div>
  )
}

export default Dashboard;
