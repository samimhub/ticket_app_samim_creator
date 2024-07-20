"use client"
import React, { use, useEffect, useState } from "react";
import TicketCard from "./(component)/TicketCard";


const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};


const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showTickets,setShowTickets] =useState(false)

  useEffect(() => {
    const fetchTickets = async () => {
        const data = await getTickets();
        setTickets(data?.tickets || []);
        setShowTickets(true);
        setTimeout(() => {
          setLoading(false);
        },2000);
    }
    fetchTickets();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!showTickets) {
    return <p>Loading tickets...</p>;
  }
  if (tickets.length === 0) {
    return <p>No tickets.</p>;
  }
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
