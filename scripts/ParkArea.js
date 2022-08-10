//import in needed objects from database. need the getParkArea for park area names and id and services function as well.
import { getParkArea, getParkAreaServices, getServicesName } from "./database.js";
import { servicesProvided } from "./Services.js";

//may need two functions to provide the correct information...
//1function to make an array of activities/services provided numerically to area 
//2function to define the activity.


//declare variable to store object inside...equal to invoked functions (getParkArea and getParkAreaServices)
const parkAreas = getParkArea(); //id:, name:
const parkAreaServices = getParkAreaServices() //id:, serviceId: parkId:
const servicesName = getServicesName() //id:, name:


/*** GO TO SERVICE MODULE
This module needs to create the following html (singular responsibility principle):

ex: 
Chamfort River (parkArea)
  - Rafting (services offered)
  - Canoeing
  - Fishing

this function needs to loop through parkAreas then services.
Function1: create an array with the 
*/

//This function should match parkAreas to parking services using the parkAreaServices constant.
//the matching objects need to be pushed to a an empty array and returned


//declare export function to make HTML main.js
export const parkAreasList = () => {
    //declare empty string
    let parkHTML = ``

    //iterate parkAreas object to gain access to the name key
    for (const parkObject of parkAreas) {
        const matchingName = servicesProvided(parkObject)

        parkHTML += `<h3>${parkObject.name}</h3>
         <ul>${matchingName}</ul>`


        //return HTML
    }
    return parkHTML
}