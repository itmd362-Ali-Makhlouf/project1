jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
  });

  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("betaSignUpForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var thankYou = document.createElement("p");
        thankYou.textContent = "Thank you for joining the Software Beta Test!";
        thankYou.style.fontSize = "1.5em"; 

  
        form.style.display = "none";
        form.parentNode.appendChild(thankYou);
    });
});

