/*
This module will 
1. import guests database from database.js
2. iterate the database and create html string with specified information (ex. name, phone, checkout date(maybe))
3. will export the html to the main.js module to be constructed/organized before scripting to index.html module
4. provide interest as unordered list.
*/

import { getGuests } from "./database.js";
import { getServicesName } from "./database.js";

//declare variable to store getGuests.

const guestsObject = getGuests();
const servicesObject = getServicesName()


export const Guests = () => {
    let html = `<ul>`

    for (const guest of guestsObject) {
        html += `<li><h4>${guest.name}</h4></li>`


    }
    html += `</ul>`
    return html
}