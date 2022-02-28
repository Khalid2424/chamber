var temp = 57;
var wspeed = 15;
var windchill = (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(wspeed, 0.16)) + (0.4275 * temp * Math.pow(wspeed, 0.16));

var windchill = Math.round(windchill);
document.getElementById("windchill").innerHTML = windchill;