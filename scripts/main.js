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
import { servicesProvided } from "./Services.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Cider Falls</h1>

<article class="">
    <section class="">
    </section>
    <section class="">
    </section>
</article>

<article class="">
    <section class="">

    <div>${parkAreasList()}</div>
    </section>
    <section class="">
    <h3><strong><i>Guests List</i></strong></h3>
    <div>${Guests()}</div>
    </section>
</article>
`
mainContainer.innerHTML = applicationHTML