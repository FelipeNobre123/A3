import mongoose from "mongoose";

mongoose.connect("mongodb+srv://felipenobre:782148@cluster0.nfbpl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")


let db = mongoose.connection;

export default db;


  