const Names = [`Cleo`, `Etho`, `Scar`, `Bdubs`, `Alice`, `Bob`, `Carol`, `Ren`];
const Pays = [20, 30, 40, 50, 60, 70, 80];
const Occupations = [`Teacher`, `Artist`, `Astronaut`, `Programmer`, `Writer`, `YouTuber`];
const PeopleShowing = 10;
const People = [
  {
    names: `Alice`,
    occupations: `Teacher`,
    pays: 40
  },
  {
    names: `Etho`,
    occupations: `YouTuber`,
    pays: 50
  },
  {
    names: `Carol`,
    occupations: `Artist`,
    pays: 20
  }
];

const pickPersonStuff = setInterval(addPerson, 1000);


render();

function render() {
//Names
  const freeNames = document.querySelector("#freelancers-list .names");
  const NameElements = People.map((currentPerson) => {
    const element = document.createElement(`li`);
    element.textContent = currentPerson.names;
    return element;
  });
  freeNames.innerHTML= "";
  freeNames.replaceChildren(...NameElements);

//Occupation
  const freeOcco = document.querySelector("#job-list .occupation");
  const occoElements = People.map((currentPerson) => {
    const element = document.createElement(`li`);
    element.textContent = currentPerson.occupations;
    return element;
  });
  freeOcco.innerHTML= "";
  freeOcco.replaceChildren(...occoElements);

//Pay
  const freePay = document.querySelector("#payday-list .pay");
  const payElements = People.map((currentPerson) => {
    const element = document.createElement(`li`);
    element.textContent = currentPerson.pays;
    return element;
  });
  freePay.innerHTML= "";
  freePay.replaceChildren(...payElements);

  averagePrice();
}

function addPerson() {
  const randomName = Names[Math.floor(Math.random() * Names.length)];

  const randomJob = Occupations[Math.floor(Math.random() * Occupations.length)];

  const randomPay = Pays[Math.floor(Math.random() * Pays.length)];

  People.push({names: randomName, occupations: randomJob, pays: randomPay});

  render();//Run render AGAIN

  //Is bigger than 10 people?? If am.. stop
  if(People.length >= PeopleShowing) {
    clearInterval(pickPersonStuff);
  }
};


//-------------------------------------------------------------
//Calculating average Price

function averagePrice() {
  let allPay = People.reduce((sum, person) => {return sum + person.pays}, 0);

  let manyPeople = People.length;

  const mrAverage = document.querySelector("#freeAverage")// Points to HTML, gets info... then allows us to update info.
  const element = document.createElement('h2');
  element.textContent = allPay / manyPeople;

  mrAverage.replaceChildren(element);//Update on HTML is from this line. Pass element directly!
};

// Need to put averagePrice function in the render function since that is the thing thats going to be running multiple times.
