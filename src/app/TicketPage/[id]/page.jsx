import EditTicketForm from "@/app/(component)/EditTicketForm";

const getTicketById = async (id) => {
  try {
    const res = await fetch(`https://quickticket-creator-app.vercel.app/api/Tickets/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch....");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

let updateTicketData = {};
const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return <EditTicketForm ticket={updateTicketData} />;
};

export default TicketPage;
