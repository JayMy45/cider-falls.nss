/* this module will serve as the main point of creating the html display.
here all modules that build html strings will be organized here. 
1. import functions from modules
2. declare a variable for the querySelector("#whatever id I choose") [ex. const mainContainer = document.querySelector("#container")].
3. create draft webpage setup for the website.
4. main.innerHTML the application to targeted id...======> mainContainer.innerHTML = applicationHTML
*/
// import { parkAreasList } from "./ParkArea.js"
import { Guests } from "./Guest.js"
import { parkAreasList } from "./ParkArea.js"
import { joinServices } from "./Services.js"
// import { makeServiceString } from "./ParkServices.js"




const mainContainer = document.querySelector("#container")

const applicationHTML = `

<article class="parkArea__article1">
<div>${joinServices()}</div>
    <section class="parkAreas__list">
    <div>${parkAreasList()}</div>
    </section>
</article>

<article class="parkArea__article2">
    <section class="">
    <h3><strong><i>Guests List</i></strong></h3>
    <div>${Guests()}</div>
    </section>
</article>
`
mainContainer.innerHTML = applicationHTML