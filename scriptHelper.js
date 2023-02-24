// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === "" || testInput === null || testInput === 0) {
        return "Empty";
    } else if (!isNaN(parseInt(testInput))){ 
        return "Is a number";
    } return "Not a number";


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementId('pilotName')
    let copilotStatus = document.getElementId('copilotName')
    let fuelStatus = document.getElementId('fuelStatus')
    let launchStatus = document.getElementId('launchStatus')
    let cargoStatus = document.getElementId('cargoStatus')

    if (validateInput(pilotStatus) === 'Empty' || validateInput(copilotStatus) === 'Empty' || validateInput(fuelStatus) === 'Empty' || validateInput(launchStatus) === 'Empty' || validateInput(launchStatus) === 'Empty' || validateInput(cargoStatus)=== 'Empty') {
        window.alert('All fields are required!')
            }

    if (validateInput(pilotStatus) === 'Not a number' || validateInput(copilot) === 'Not a number' || validateInput(fuelStatus) === 'Not a number' || validateInput(launchStatus) === 'Not a number' || validateInput(cargoStatus) === "Not a number") {
        window.alert('Make sure to enter valid information for each field!')
             }   

        else {
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`
            copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch.`

        }
    }  

    if (Number(fuelStatus) < 10000) {
        fuelStatus.innerHTML = 'There is not enough fuel for the journey.'
        launchStatus.innerHTML = 'Shuttle not ready for launch.'
    } else if  (Number(cargoStatus) > 10000) {
        cargoStatus.innerHTML = 'There is too much mass for the shuttle to take off.'
        launchStatus.innerHTML = 'Shuttle not ready for launch.'
    }

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
