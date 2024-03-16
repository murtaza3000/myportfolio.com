document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // You can add code here to handle form submission, like sending data to a server
    // For this example, let's just log the form data
    const formData = new FormData(this);
    for (let entry of formData.entries()) {
      console.log(entry[0] + ': ' + entry[1]);
    }
  });
  