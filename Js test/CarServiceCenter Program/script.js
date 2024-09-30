function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const services = document.getElementById('services').value;

    if (name === "" || email === "" || phone === "" || address === "" || services === "") {
        alert("Please fill in all fields.");
        return false;
    }

    alert("Registration successful!");
    return true;
}
