// Function to toggle collapsible sections
function toggleDescription(descriptionId) {
    const element = document.getElementById(descriptionId);
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block'; // Show description
    } else {
        element.style.display = 'none'; // Hide description
    }
}

// Form submission logic
document.getElementById('predictionForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Create a FormData object from the form
    let formData = new FormData(this);

    // Send the form data to the server using fetch API
    fetch('/predict', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json()) // Parse response as JSON
    .then(data => {
        console.log('Response received:', data); // Log the full response
        if (data.prediction === 'No') {
            window.location.href = '/no_heart_disease'; // Redirect to No Heart Disease page
        } else if (data.prediction === 'Yes') {
            window.location.href = '/heart_disease_likely'; // Redirect to Heart Disease Likely page
        } else {
            console.error('Unexpected prediction value:', data.prediction);
        }
    })
    .catch(error => console.error('Error:', error));
});
