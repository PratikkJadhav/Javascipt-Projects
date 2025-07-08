const buttons = document.querySelectorAll(".button")

buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        const color = event.target.id;
        document.querySelector("body").style.backgroundColor = color;
    });
  });


