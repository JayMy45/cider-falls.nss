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
        { id: 1, name: 'Deaquanita Harris', locationId: 2 },
        { id: 2, name: 'Curtis Jackson', locationId: 1 },
        { id: 3, name: 'Robinson Vilmont', locationId: 1 },
        { id: 4, name: 'Jeremia Henderson', locationId: 3 },
        { id: 5, name: 'OShea Jackson', locationId: 6 },
        { id: 6, name: 'Andre Benjamin', locationId: 5 },
        { id: 7, name: 'Melissa Elliott', locationId: 1 },
        { id: 8, name: 'Cheryl James', locationId: 2 },
        { id: 9, name: 'Tarik Trotter', locationId: 6 },
        { id: 10, name: 'Sandra Denton', locationId: 4 }
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

    guestLocation: [
        { id: 1, guestId: 1, parkId: 12 },
        { id: 2, guestId: 2, parkId: 8 },
        { id: 3, guestId: 3, parkId: 10 },
        { id: 4, guestId: 4, parkId: 1 },
        { id: 5, guestId: 5, parkId: 2 },
        { id: 6, guestId: 6, parkId: 4 },
        { id: 7, guestId: 7, parkId: 4 },
        { id: 8, guestId: 8, parkId: 13 },
        { id: 9, guestId: 9, parkId: 7 },
        { id: 10, guestId: 10, parkId: 5 },
    ]

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