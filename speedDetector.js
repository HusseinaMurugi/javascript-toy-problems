function speedDetector(speed) {
  const speedLimit = 70;
  const kmPerDemerit = 5;

  if (speed <= speedLimit) {
    console.log("Ok");
    alert("Ok");
  } else {
    const points = Math.floor((speed - speedLimit) / kmPerDemerit);
    if (points > 12) {
      console.log("License suspended");
      alert("License suspended");
    } else {
      console.log("Points:", points);
      alert("Points: " + points);
    }
  }
}

let speedInput = prompt("Enter the speed of the car:");
speedInput = Number(speedInput); 
speedDetector(speedInput);
