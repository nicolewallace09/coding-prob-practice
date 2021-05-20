// decline or accept veggies using forEach 

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
const declineEverything = (veggies) => {
  veggies.forEach(politelyDecline); 
}

const acceptEverything = (veggies) => {
  veggies.forEach(veggies => console.log('Ok, I guess I will eat some ' + veggies + '.'))
}