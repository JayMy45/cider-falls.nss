import { getParkArea, getServicesName, getParkAreaServices } from "./database.js";

const parkAreas = getParkArea()
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

//filterServicesByArea had a two parameters (services, parameter) services was to bring servicesName into the function but because it is a globally scoped variable it wasnt needed...
//parameter "parameter" is needed to allow the results from ParkArea module to come in...

const filterServicesByArea = (parameter) => {
    //...declare empty array
    let servicesArray = []  //by changing to null enables the ability ot use a blank slate...

    //iterate parkAreaServices and parkArea to gain access to object keys that correspond
    for (const serviceObject of parkAreaServices) {
        for (const service of servicesName)
            //conditional statement that will compare parkId of parkAreaService/serviceObject to parkAreas id)
            if (parameter.id === serviceObject.parkId && serviceObject.serviceId === service.id) {
                servicesArray.push(service)
            }
    }

    return servicesArray
}


export const servicesProvided = (currentPark) => {

    let html = ``
    const servicesObjects = filterServicesByArea(currentPark)

    for (const serviceObject of servicesObjects) {

        html += `<li>${serviceObject.name}</li>`
    }
    return html
}

