document.querySelectorAll('.img_div').forEach(div => {
    const defaultImg = div.querySelector('.img-default');
    const hoverImg = div.querySelector('.img-hover');

    div.addEventListener('mouseenter', () => {
      defaultImg.style.opacity = '0';
      hoverImg.style.opacity = '1';
    });

    div.addEventListener('mouseleave', () => {
      defaultImg.style.opacity = '1';
      hoverImg.style.opacity = '0';
    });
  });


  //Nav menu
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to black */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "black";
}


/* Form Validation */
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const successMessage = document.getElementById("form-success");

    form.addEventListener("submit", function (e) {
      const name = form.querySelector("#name").value.trim();
      const email = form.querySelector("#email").value.trim();
      const message = form.querySelector("#message").value.trim();

      // Basic validation rules
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let hasError = false;

      if (name.length < 2) {
        alert("Please enter a valid name (at least 2 characters).");
        hasError = true;
      } else if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        hasError = true;
      } else if (message.length < 10) {
        alert("Your message must be at least 10 characters.");
        hasError = true;
      }

      if (hasError) {
        e.preventDefault(); // Stop form from submitting
        return;
      }

      
      e.preventDefault(); // Stop actual submission for custom message
      form.style.display = "none";
      successMessage.style.display = "flex";
    });
  });




  //Hero icons on hover
  document.addEventListener("DOMContentLoaded", function () {
    const iconWrappers = document.querySelectorAll(".icon-wrapper");

    iconWrappers.forEach(wrapper => {
      const icon = wrapper.querySelector("i");
      const label = wrapper.querySelector(".icon-label");

      // Set initial opacity
      label.style.opacity = "0";
      label.style.transition = "opacity 0.3s ease";

      icon.addEventListener("mouseenter", () => {
        label.style.opacity = "1";
      });

      icon.addEventListener("mouseleave", () => {
        label.style.opacity = "0";
      });
    });
  });
