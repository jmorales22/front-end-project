const get = url => {
  return fetch(url)
    .then(response => response.json())

    .then(data => data)

    .catch(error => error);
};
//variables
const nflApi = `https://feeds.nfl.com/feeds-rs/teams.json`;

//functions
const getCities = () => {
  get(nflApi).then(response => {
    renderTeamsCities(response);
  });
  const renderTeamsCities = data => {
    const cityNames = data.teams;
    const listOfCities = cityNames.map(city => city.cityState);
    listOfCities[0] = "Phoenix";
    listOfCities[4] = "Charlotte";
    listOfCities[16] = "Los Angeles";
    listOfCities[20] = "Boston";
    listOfCities[22] = "New York";
    listOfCities[30] = "Nashville";

    listOfCities.splice(32, 2);
    listOfCities.splice(16, 1);
    listOfCities.splice(22, 1);
    console.log(listOfCities);
    const citySelectLabel = document.querySelector(".cityLabel");
    const cityElement = document.createElement("select");
    listOfCities.map(function(city) {
      const cityOption = document.createElement("option");
      cityOption.value = city;
      cityOption.text = city;
      cityElement.appendChild(cityOption);
    });
    citySelectLabel.appendChild(cityElement);
  };
};

getCities();

//let city = "detroit"

// const url = ` http://opentable.herokuapp.com/api/restaurants?city=${city}`;

const url = "http://opentable.herokuapp.com/api/restaurants?city=phoenix";

//const atl = "http://opentable.herokuapp.com/api/restaurants?city=atlanta";

//const bal = "http://opentable.herokuapp.com/api/restaurants?city=baltimore";

//const buf = "http://opentable.herokuapp.com/api/restaurants?city=buffalo";

//const char = "http://opentable.herokuapp.com/api/restaurants?city=charlotte";

//const chi = "http://opentable.herokuapp.com/api/restaurants?city=chicago";

//const cin = "http://opentable.herokuapp.com/api/restaurants?city=cincinnati";

//const cle = "http://opentable.herokuapp.com/api/restaurants?city=cleveland";

//const dal = "http://opentable.herokuapp.com/api/restaurants?city=dallas";

//const den = "http://opentable.herokuapp.com/api/restaurants?city=denver";

//const det = "http://opentable.herokuapp.com/api/restaurants?city=detroit";

//Find Green Bay
//const gb = "http://opentable.herokuapp.com/api/restaurants?city=";

//const hou = "http://opentable.herokuapp.com/api/restaurants?city=houston";

//const indy = "http://opentable.herokuapp.com/api/restaurants?city=indianapolis";

//const jags = "http://opentable.herokuapp.com/api/restaurants?city=jacksonville";

//Find Kansas City
//const kc = "http://opentable.herokuapp.com/api/restaurants?city=kansas_city";

//const raiders = "http://opentable.herokuapp.com/api/restaurants?city=vegas";

//const chargers = "http://opentable.herokuapp.com/api/restaurants?city=angeles";

//const rams = "http://opentable.herokuapp.com/api/restaurants?city=angeles";

//const mia = "http://opentable.herokuapp.com/api/restaurants?city=miami";

const temporaryVariable = "Arizona1";

fetch(url, {
  method: "GET",
  credentials: "same-origin"
})
  .then(response => response.json())
  .then(function(data) {
    //console.log(data)
    //THIS IS A CALLBACK FUNCTION

    restaurantData(data, temporaryVariable);
  })
  .catch(function(error) {
    console.log(error);
  });

//Lists all of the restaurants by name

function restaurantData(data, city) {
  console.log(data.restaurants);
  const arrayRestaurantList = data.restaurants;

  const columnArea = document.getElementById(city);
  const listArea = document.createElement("ul");
  columnArea.appendChild(listArea);

  arrayRestaurantList.map(function(list, index) {
    if (index < 5) {
      const listItem = document.createElement("li");
      listItem.innerHTML = list.name;
      listArea.append(listItem);
    }
    console.log("what is the city list", list.name);
  });
}

// const atlGetPosts = () => {
//   return fetch(`http://opentable.herokuapp.com/api/restaurants?city=atlanta`)
//     .then(res => res.json())
//     .then(posts => console.log(posts));
// };
