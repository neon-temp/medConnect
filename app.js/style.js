
// an array of five doctor objects
// An array of numerical scores
let doctors = [
  { name: "Dr Brown", appointment: [5, 6, 5, 4, 10] },

  { name: "Dr Davis", appointment: [10, 10, 1, 0, 9] },

  { name: "Dr Garcia", appointment: [8, 10, 10, 2, 10] },

  { name: "Dr Johnson", appointment: [6, 6, 4, 8, 6] },

  { name: "Dr Lee", appointment: [9, 0, 3, 9, 9] },

  { name: "Dr Patel", appointment: [10, 3, 7, 8, 2] },

  { name: "Dr Smith", appointment: [10, 10, 10, 10, 10] },

  { name: "Dr Taylor", appointment: [9, 2, 6, 4, 9] },

  { name: "Dr Wilson", appointment: [9, 1, 7, 9, 4] },
];

// calculates the average of an array of appointment status.
function calculateAverage(doctor) {
  let total = Object.values(doctor.appointment);

  // check if the array is empty and return an error message
  if (total.length === 0) {
    return 0;
  }

  // using the reduce() method to sum up the appointment scores.

  const sum = total.reduce((sum, appointment) => sum + appointment, 0);

  // divide the total sum by the number of scores

  return sum / total.length;
}
doctors.forEach((doctor) => {
  console.log(doctor.name + "'s average is? ", calculateAverage(doctor));
});
