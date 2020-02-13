const url = ('https://developers.zomato.com/api/v2.1/geocode?lat=33.7556102000&lon=-84.4009150000')



fetch(url, {
    method: "GET",
    credentials: 'same-origin',
    headers: {
        "user-key": "7b8d1375f69ce2684e7f3aab5f1c2987",
        "Content-type": "application/json"
    }
})
    .then(response => response.json())
    .then(function(data) {
        // THIS IS A CALLBACK FUNCTION
        restaurantData(data);
    })
    .catch(function(error) {
        console.log(error);
});

// Lists all of the restaurants by name
// function restaurantData(data) {
//     console.log(data.nearby_restaurants);
//     const arrayRestaurantList = data.nearby_restaurants;

//     arrayRestaurantList.map(function(restaurants){
//         console.log(restaurants.restaurant.name);
//     })
// }
//Lists all city names
// function restaurantData(data) {
//         console.log(data.location);
//         const arrayCity = data.location;
    
//         arrayCity.map(function(city){
//             console.log(city.location.city_name);
//         })
//     }