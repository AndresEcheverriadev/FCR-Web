const currentDate = new Date();
const timestamp = currentDate.getTime();

console.log(timestamp);

setTimeout(() => {
  console.log(timestamp);
}, 2000);
