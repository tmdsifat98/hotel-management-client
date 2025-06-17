export const myBookingPromise = (email) =>
  fetch(`https://assignment-11-server-beige-seven.vercel.app/myBookings?email=${email}`).then((res) => res.json());
