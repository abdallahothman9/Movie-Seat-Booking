const e = require("express");

const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
const ticketPrice = Number(movieSelect.value);
const updatedSelectedCount = () => {
  const SelectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = SelectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
};
let priceUp=(e)=>{
  ticketPrice=Number(e.target.value);
  updatedSelectedCount();
}
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updatedSelectedCount();
  }
});