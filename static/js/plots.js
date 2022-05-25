d3.json("samples.json").then(function(data){
    console.log(data)
});
// Weekly belly button washing frequency
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});
// Sorting array in descending order
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a, b) => b - a);
    console.log(wfreq);
});
// Deleting null values
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a, b) => b - a);
    filteredWfreq = wfreq.filter(element => element != null);
    console.log(filteredWfreq);
});
// ID and Demographic information
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
    {console.log(key + ': ' + value);});
});
// Dynamically Generate Dropdown Menu Items
function init() {
    var selector = d3.select("#selDataset");

    d3.json("samples.json").then((data) => {
        console.log(data);
        var sampleNames = data.names;
        sampleNames.forEach((sample) => {
            selector
                .append("option")
                .text(sample)
                .property("value", sample);
        });
    })
};
init();

function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
}

function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resutlArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resutlArray[0];
        var PANEL = d3.select("#sample-metadata");

        PANEL.html("");
        //SKILL Drill Adding Demographic Info
        Object.entries(result).forEach(([key, value]) => {
            PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });
        
    });
}
