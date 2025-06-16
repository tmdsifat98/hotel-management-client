export const myBookingPromise = (email) =>
  fetch(`http://localhost:3000/myBookings?email=${email}`).then((res) => res.json());
