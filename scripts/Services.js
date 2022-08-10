import { getParkArea, getServicesName, getParkAreaServices } from "./database.js";

const parkAreas = getParkArea()
const parkAreaServices = getParkAreaServices() //id:, serviceId: parkId:
const servicesName = getServicesName() //id:, name:

//all i need this module to do is provide a list of parknames


//This function should match parkAreas to parking services using the parkAreaServices constant.
//the matching objects need to be pushed to a an empty array and returned

const filterServicesByArea = (services, parameter) => {
    //...declare empty array
    let servicesArray = []  //by changing to null enables the ability ot use a blank slate...

    //iterate parkAreaServices and parkArea to gain access to object keys that correspond
    for (const serviceObject of parkAreaServices) {
        for (const service of services)
            //conditional statement that will compare parkId of parkAreaService/serviceObject to parkAreas id)
            if (parameter.id === serviceObject.parkId && serviceObject.serviceId === service.id) {
                servicesArray.push(service)
            }
    }

    return servicesArray
}


export const servicesProvided = (currentPark) => {

    let html = ``
    const servicesObjects = filterServicesByArea(servicesName, currentPark)

    for (const serviceObject of servicesObjects) {

        html += `<li>${serviceObject.name}</li>`
    }
    return html
}

