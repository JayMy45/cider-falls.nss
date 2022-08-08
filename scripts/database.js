/*
create a database that contains objectArrays of parkAreas, Guest, Services, and Employees (bonus)
declare export functions for each dataset created using .map() method
*/

const database = {
    parkAreas: [{ id: , name: , locationId: , guestId: , servicesId: , employeeId: }],

    guests: [{ id: , name: , phone: , email: , checkin: , checkout: , servicesId: , parkId: , assignmentId: }],

    services: [{ id: }],

    employees: [{ id:, name:, email:, phone:, employeeId:, hireDate:, serviceId:, parkId:, assignmentId:, }],

    assignments: [{ id:, guestId:, employeeId:, servicesId:, parkId:, }]

}

//declare export function to make database available to correct modules

export const getParkArea = () => {
    //return database using .map method -> it will iterate a copy of the object it is called upon.
    return database.parkAreas.map(parkAreas => ({ ...parkAreas }))
}

export const getGuests = () => {
    return database.guests.map(guests => ({ ...guests }))
}

export const getServices = () => {
    return database.services.map(services => ({ ...services }))
}

export const getEmployees = () => {
    return database.employees.map(employees => ({ ...employees }))
}

export const getAssignments = () => {
    return database.assignments.map(assignments => ({ ...assignments }))
}