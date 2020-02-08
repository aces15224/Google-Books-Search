const mongoose = require("mongoose");
const db = require("../models");

// mongoose.connect(MONGODB_URI,{  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});


mongoose.connect(
    process.env.MONGODB_URI ||"mongodb://user:password1@ds041188.mlab.com:41188/heroku_6l7sd4v9"
);

const bookInfo = {
    authors: ["Cormac McCarthy"],
    description: "Cormac McCarthy's masterwork, Blood Meridian, chronicles the brutal world of the Texas-Mexico borderlands in the mid-nineteenth century. Its wounded hero, the teenage Kid, must confront the extraordinary violence of the Glanton gang, a murderous cadre on an official mission to scalp Indians and sell those scalps. Loosely based on fact, the novel represents a genius vision of the historical West, one so fiercely realized that since its initial publication in 1985 the canon of American literature has welcomed Blood Meridian to its shelf.",
    image: "https://books.google.com/books/content?id=s-QzccStux4C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE736dklGRPw9nFy9xYExJjUxI_g9iIBlXHFhirbI_cQ0Y_LCU7sPTEpFyTiyc4lRcc_aFOUpmJp2rXk8plqaM5T3GUtE2ZWEvI-Aymqw-ofuu1McfNLr6zg3LTuWj7R0UISbsJFn",
    link: "https://books.google.com/books?id=s-QzccStux4C&printsec=frontcover&dq=Blood+Meridian&hl=en&newbks=1&newbks_redir=0&sa=X&ved=2ahUKEwjqps6nvcDnAhXRHM0KHU0CCZ8QuwUwAHoECAgQBw#v=onepage&q=Blood%20Meridian&f=false",
    title: "Blood Meridian: Or the Evening Redness in the West"
}

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookInfo))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });