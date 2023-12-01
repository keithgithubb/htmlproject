// Function to format the current time as HH:MM AM/PM
function formatTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
}

// Function to format the current date as MMMM DD, YYYY
function formatDate(date) {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Function to update the current time and date
function updateDateTime() {
    var currentDate = new Date();
    
    // Update the current time
    var currentTimeElement = document.getElementById('currentTime');
    currentTimeElement.textContent = formatTime(currentDate);

    // Update the current date
    var currentDateElement = document.getElementById('currentDate');
    currentDateElement.textContent = formatDate(currentDate);
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();
