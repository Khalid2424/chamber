const datefield = document.querySelector("date");
const datefieldUK = document.querySelector("h2");


const now = new Date();

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
    dateStyle: "full"
}).format(now);


datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

let dayOfWeek = now.getDay();
let bannerMessage = '';

if (dayOfWeek == 1 || dayOfWeek == 2) {
    bannerMessage = "Come join us for the chamber meet and greet Wednesday at 7:00 p.m";
} else { bannerMessage = ""; }
document.querySelector("#bannermessage").innerHTML = bannerMessage;