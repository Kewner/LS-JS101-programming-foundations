// Loop over the elements of the array fish, logging each one. Terminate the
// loop immediately after logging the string 'Nemo'.

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let idx = 0; idx < fish.length; idx += 1) {
  console.log(fish[idx]);
  if (fish[idx] === 'Nemo') break;
}