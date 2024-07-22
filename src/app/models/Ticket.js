import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    progress: Number,
    status: String,
    active: Boolean,
},
    {
        timestamps: true,
    }
);
export default mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema)