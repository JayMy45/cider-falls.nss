//import in needed objects from database. need the getParkArea for park area names and id and services function as well.
import { getParkArea, getGuests } from "./database.js";
import { servicesProvided } from "./Services.js";

//may need two functions to provide the correct information...
//1function to make an array of activities/services provided numerically to area 
//2function to define the activity.


//declare variable to store object inside...equal to invoked functions (getParkArea and getParkAreaServices)
const parkAreas = getParkArea(); //id:, name:
const guestObject = getGuests()


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("parkAreas")) {
            const [, parkAreasId] = itemClicked.id.split("--")

            for (const parkObject of parkAreas) {
                if (parkObject.id === parseInt(parkAreasId)) {
                    const numberOfGuest = numberOfGuestInArea(parkObject)
                    window.alert(`There are ${numberOfGuest} guest in this area`)
                }
            }
        }

    }
)


//declare function that will count the number of guest at a particular park by 
//conditional that if parkAreas.id === guest.locationId then count add to n (n++ counter)
const numberOfGuestInArea = (parkObject) => {
    //declare variable equal to 0 to add to if condition is true.
    let n = 0

    //iterate parkArea 
    for (const guest of guestObject) {
        if (parkObject.id === guest.locationId)
            n++
    }
    return n
}


//declare export function to make HTML main.js
export const parkAreasList = () => {
    //declare empty string
    let parkHTML = ``

    //iterate parkAreas object to gain access to the name key
    for (const parkObject of parkAreas) {
        const matchingName = servicesProvided(parkObject)

        parkHTML += `<div class="parkAreas__details"><h3 id="parkAreas--${parkObject.id}">${parkObject.name}</h3>
         <ul>${matchingName}</ul>`


        //return HTML
        parkHTML += `</div>`
    }

    return parkHTML
}
