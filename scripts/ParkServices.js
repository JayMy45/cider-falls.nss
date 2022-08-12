import { getParkAreaServices, getParkArea, getServicesName } from "./database";

const parkAreaServices = getParkAreaServices()
const parkArea = getParkArea()
const serviceName = getServicesName()

//need to create a string of services
//declare export function to make string of services to be imported onto the website via html
const makeServicesAvailable = () => {
    //define a variable equal to an empty string
    let servicesArray = []

    //iterate the parkArea and parkAreaServices...
    for (const parkObject of parkArea) {
        for (const servicesObject of parkAreaServices) {
            //create conditional statement to filter the correct serviceName
            if (parkObject.id === servicesObject.parkId)
                //add to Array (.push())
                servicesArray.push(servicesObject)
        }
    }
    //return array to be exported where needed.
    return servicesArray
}

//create a function that iterates the array from makeServicesAvailable function
export const makeServiceString = () => {
    //define variable to store growing string initially equal to "" (empty)
    let makeString = ''

    //store invoked function in variable declared with const (parameter maybe needed)
    const servicesArrary = makeServicesAvailable()

    //iterate through serviceName in order to access object
    for (const nameObject of serviceName) {
        //iterate through servicesArray (aka. invoked function) to access keys
        for (const arrayObject of servicesArray) {
            if (nameObject.id === arrayObject.serviceId)
                makeString += `${nameObject.name}`
        }
    }
    return makeString
}

console.log(makeServicesString())
//create a conditional to compare and filter out needed information
//add to html string
//return string...