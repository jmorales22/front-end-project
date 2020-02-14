const get = url => {
    return fetch(url)
    .then(response => response.json())
    
    .then(data => data )
    
    .catch(error => error)
}
//variables
const nflApi = `https://feeds.nfl.com/feeds-rs/teams.json`

//functions
const getCities = () =>{
    get(nflApi).then(response => {
        renderTeamsCities(response)
    })
    const renderTeamsCities = data => {
        const cityNames = data.teams;
        const listOfCities = cityNames.map(city => city.cityState)
        listOfCities[0] = "Phoenix"
        listOfCities[4] = "Charlotte"
        listOfCities[16] = "Los Angeles"
        listOfCities[20] = "Boston"
        listOfCities[22] = "New York"
        listOfCities[30] = "Nashville"


        listOfCities.splice(32,2)
        listOfCities.splice(16,1)
        listOfCities.splice(22,1)
        console.log(listOfCities)
        const citySelectLabel = document.querySelector('.cityLabel')
        const cityElement = document.createElement('select');
        listOfCities.map(function(city){
        const cityOption= document.createElement('option');
        cityOption.value = city;
        cityOption.text = city;
        cityElement.appendChild(cityOption);
    });
    citySelectLabel.appendChild(cityElement);
    }
    
};


getCities();

let city = "detroit"

const url = ` http://opentable.herokuapp.com/api/restaurants?city=${city}`

fetch(url, {
    method: "GET",
    credentials: 'same-origin',
})
    .then(response => response.json())
    .then(function(data) {
        //console.log(data)
        //THIS IS A CALLBACK FUNCTION
        restaurantData(data);
    })
    .catch(function(error) {
        console.log(error);
});

//Lists all of the restaurants by name
function restaurantData(data) {
    console.log(data.restaurants);
    const arrayRestaurantList = data.restaurants;

    arrayRestaurantList.map(function(list) {
        console.log(list.name);
    })
}
