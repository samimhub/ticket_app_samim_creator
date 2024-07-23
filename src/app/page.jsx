"use client"
import React, { use, useEffect, useState } from "react";
import TicketCard from "./(component)/TicketCard";


const getTickets = async () => {
  try {
    const res = await fetch("https://quickticket-creator-app.vercel.app/api/Tickets",{
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

  useEffect(() => {
    const fetchTickets = async () => {
        const data = await getTickets();
        setTickets(data?.tickets || []);
        setTimeout(() => {
          setLoading(false);
        },2000);
    }
    fetchTickets();
  }, []);

  const handleDelete = (id) => {
    setTickets(tickets.filter(ticket => ticket.id !== id));
  };

  if (loading) {
    return <p className="flex justify-center items-center text-3xl mt-10">Loading...</p>;
  }

  if (tickets.length === 0) {
    return <p className="flex justify-center items-center text-3xl mt-10">No tickets.</p>;
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
                      onDelect={handleDelete}
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
