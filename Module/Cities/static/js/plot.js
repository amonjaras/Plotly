// Sorting cities by Population growth
var sortedCities = cityGrowths.sort((a, b) => 
    a.Increase_from_2016 - b.Increase_from_2016).reverse();
console.log(sortedCities);

// Select the top five cities by population growth
var topFiveCities = sortedCities.slice(0, 5);
console.log(topFiveCities)

// Create Arrays of City Names and Growth Figures
var topFiveCityNames = cityGrowths.map(city => city.City);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

// Creating a Bar Chart
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);
