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

//create click eventListener that will popUp message when services are clicked
document.addEventListener(
    'click',
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("services")) {
            const [, serviceId] = itemClicked.id.split("--")

            for (const nameObject of servicesName) {
                if (nameObject.id === parseInt(serviceId)) {
                    const servicesLocal = servicesLocation(nameObject)
                    window.alert(`${nameObject.name} is available at ${servicesLocal}`)
                }
            }
        }
    }
)


//declare function that will display which locations services are offered
const servicesLocation = (nameObject) => {
    //declare empty that can be added upon when matches are found
    let serviceArray = []
    //iterate both servicesName and parkAreas...
    for (const parkObjecti of parkAreas) {
        for (const servIceObject of parkAreaServices) {
            if (nameObject.id === servIceObject.serviceId && servIceObject.parkId === parkObjecti.id) {
                serviceArray.push(parkObjecti.name)
            }
        }
    }

    return serviceArray.join(' and ')
}


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

        html += `<li id="services--${serviceObject.id}">${serviceObject.name}</li>`
    }
    return html
}




//*****************adding services to Main.js to input a div above places...*****************/

const filterServices = () => {
    //...declare empty array
    let servicesArray = []  //by changing to null enables the ability ot use a blank slate...

    //iterate parkAreaServices and parkArea to gain access to object keys that correspond
    for (const service of servicesName) {
        //conditional statement that will compare parkId of parkAreaService/serviceObject to parkAreas id)
        servicesArray.push(service.name)
    }
    return servicesArray
}


export const joinServices = (nameObject) => {

    return `<div id="join--${parkAreas.id}"><h3>Park Services: ${filterServices().join(", ")}</h3></div>`
}

document.addEventListener(
    'click',
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("join")) {
            const [, joinId] = itemClicked.id.split("--")

            for (const nameObject of servicesName) {
                if (joinObject.id === parseInt(joinId)) {
                    const joinLocal = joinServices(filterServices())
                    window.alert(`${nameObject.name} is available at ${joinLocal}`)
                }
            }
        }
    }
)
//objective is to provide a list of services to be displayed on the page in a div
//declare an export function that will loop through service provided and provide each in a string 
