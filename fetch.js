
function apiCall() {
    // Retrieve values from Document Object Model
    let data = {
        username: document.querySelector(".username").value,
        firstName: document.querySelector(".firstname").value,
        lastname: document.querySelector(".lastname").value,
        email: document.querySelector(".email").value
    }

    // POST data to API
    fetch('https://y821wpw70k.execute-api.af-south-1.amazonaws.com/dev/register', {
        // Specify POST method
        method: "POST",
        // Convert data to JSON and send to API
        body: JSON.stringify(data),
        // Attache API key header
        headers: {
            "x-api-key": "fInOx4OVXPaT1R8aYrIfe9jnDb8MZmRM7UskCARZ"
        }
    })
        // Reformat API response
        .then(response => response.json())
        // Log response in console
        .then(json => console.log(json))
        .catch(error => console.log('API error' + error))
}

// Trigger API call when Sign up button is clicked
const button = document.querySelector(".button").addEventListener('click', apiCall);