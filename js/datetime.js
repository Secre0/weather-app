function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString(); 
    document.getElementById('date-time').textContent = dateTimeString;
}

updateDateTime();
setInterval(updateDateTime, 1000);