     document.addEventListener('DOMContentLoaded', () => {
        fetch("https://api.snoopi.io/check?apikey=5219ba742fff139d862ef512d1f9df4a")
            .then(response => response.json())
            .then(json => {
                document.getElementById('location').innerText = json.City + ", " + json.State;
            })
            .catch(error => {
                console.error("Error fetching the location data:", error);
            });
    });