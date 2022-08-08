/*
This module will 
1. import guests database from database.js
2. iterate the database and create html string with specified information (ex. name, phone, checkout date(maybe))
3. will export the html to the main.js module to be constructed/organized before scripting to index.html module
4. provide interest as unordered list.
*/

import { getGuests } from "./database.js";
import { getServices } from "./database.js";

//declare variable to store getGuests.

const guestsObject = getGuests();
const servicesObject = getServices()


export const Guests = () => {
    let html = `<div class='ciderFalls__guest'>`

    for (const guest of guestsObject) {
        html += `<h2>${guest.name}</h2>
        <h4>Phone:  ${guest.phone}</h4>
        <h4>email:  ${guest.email}</h4>
        <ul>`
        for (const service of servicesObject) {
            if (service.id === guest.serviceId)
                `<li>${service.name}</li</ul`
        }
        html += `</div>`
    }
    return html
}