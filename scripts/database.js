/*
create a database that contains objectArrays of parkAreas, Guest, Services, and Employees (bonus)
declare export functions for each dataset created using .map() method
*/

const database = {
    parkAreas: [
        { id: 1, name: 'Chamfort River' },
        { id: 2, name: 'Lost Wolf Hiking Trail' },
        { id: 3, name: 'Gander River' },
        { id: 4, name: 'Pine Bluffs' },
        { id: 5, name: 'Lodge' },
        { id: 6, name: 'Campgrounds' }
    ],

    guests: [
        { id: 1, name: 'Deaquanita Harris' },
        { id: 2, name: 'Curtis Jackson' },
        { id: 3, name: 'Robinson Vilmont' },
        { id: 4, name: 'Jeremia Henderson' },
        { id: 5, name: 'OShea Jackson' },
        { id: 6, name: 'Andre Benjamin' },
        { id: 7, name: 'Melissa Elliott' },
        { id: 8, name: 'Cheryl James' },
        { id: 9, name: 'Tarik Trotter' },
        { id: 10, name: 'Sandra Denton' }
    ],

    servicesName: [
        { id: 1, name: 'Rafting ' },
        { id: 2, name: 'Canoeing' },
        { id: 3, name: 'Fishing' },
        { id: 4, name: 'Hiking' },
        { id: 5, name: 'Picnicking' },
        { id: 6, name: 'Rock Climbing' },
        { id: 7, name: 'Hotel' },
        { id: 8, name: 'Restaurant' },
        { id: 9, name: 'Nature Preserve' },
        { id: 10, name: 'Lodging' },
        { id: 11, name: 'Parking' },
        { id: 12, name: 'Zip Lines' },
        { id: 13, name: 'Information' }
    ],

    parkAreaServices: [
        { id: 1, serviceId: 1, parkId: 1 },
        { id: 2, serviceId: 2, parkId: 1 },
        { id: 3, serviceId: 3, parkId: 1 },
        { id: 4, serviceId: 4, parkId: 2 },
        { id: 5, serviceId: 5, parkId: 2 },
        { id: 6, serviceId: 6, parkId: 2 },
        { id: 7, serviceId: 3, parkId: 3 },
        { id: 8, serviceId: 4, parkId: 3 },
        { id: 9, serviceId: 4, parkId: 4 },
        { id: 10, serviceId: 5, parkId: 4 },
        { id: 11, serviceId: 12, parkId: 4 },
        { id: 12, serviceId: 10, parkId: 5 },
        { id: 13, serviceId: 11, parkId: 5 },
        { id: 14, serviceId: 13, parkId: 5 },
        { id: 15, serviceId: 5, parkId: 5 },
        { id: 16, serviceId: 13, parkId: 6 },
        { id: 17, serviceId: 10, parkId: 6 },
        { id: 18, serviceId: 11, parkId: 6 },
    ],

    // guestActivity: [
    //     { id: 1, guestId: 1, serviceID: 12 },
    //     { id: 2, guestId: 2, serviceID: 8 },
    //     { id: 3, guestId: 3, serviceID: 10 },
    //     { id: 4, guestId: 4, serviceID: 1 },
    //     { id: 5, guestId: 5, serviceID: 2 },
    //     { id: 6, guestId: 6, serviceID: 4 },
    //     { id: 7, guestId: 7, serviceID: 4 },
    //     { id: 8, guestId: 8, serviceID: 13 },
    //     { id: 9, guestId: 9, serviceID: 7 },
    //     { id: 10, guestId: 10, serviceID: 5 },
    // ]

}

//declare export function to make database available to correct modules

export const getParkArea = () => {
    //return database using .map method -> it will iterate a copy of the object it is called upon.
    return database.parkAreas.map(parkAreas => ({ ...parkAreas }))
}

export const getGuests = () => {
    return database.guests.map(guests => ({ ...guests }))
}

export const getServicesName = () => {
    return database.servicesName.map(services => ({ ...services }))
}

export const getParkAreaServices = () => {
    return database.parkAreaServices.map(parkAreaServices => ({ ...parkAreaServices }))
}

export const getGuestActivity = () => {
    return database.guestActivity.map(guestActivity => ({ ...guestActivity }))
}