document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("house-form");

    form.addEventListener("submit", function(event) {
        var size = document.getElementById("house-size").value;
        var type = document.getElementById("house-type").value;
        var rooms = document.getElementById("num-rooms").value;
        var garage = document.getElementById("garage").value;
        var paymentMethod = document.querySelector('input[name="payment-method"]:checked');

        if (!size || !type || !rooms || !garage || !paymentMethod) {
            alert("Please fill in all fields");
            event.preventDefault(); // Prevent form submission if fields are not filled
        } else {
            // Form is valid, you can proceed with form submission
            // For example, you can send the form data to the server using AJAX
            // Here, I'm just logging the form data to the console
            console.log("Size: " + size);
            console.log("Type: " + type);
            console.log("Number of Rooms: " + rooms);
            console.log("Garage: " + garage);
            console.log("Payment Method: " + paymentMethod.value);
        }
    });
});
