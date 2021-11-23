const navbar = document.querySelector("nav ul");
const navbarButton = document.querySelector("nav button");
const cover = document.querySelector(".cover");
const downloadCV = document.querySelector("#download_cv");

const hideNavbar = () => {
    navbar.classList.add("hideNavbar");
    cover.classList.add("hidenCover");
};

navbarButton.addEventListener("click", () => {
    navbar.classList.toggle("hideNavbar");
    cover.classList.toggle("hidenCover");
});

cover.addEventListener("click", hideNavbar);

window.addEventListener("hashchange", hideNavbar);

function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "sender@email_address.com",
      Password: "Enter your password",
      To: 'receiver@email_address.com',
      From: "sender@email_address.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
      Attachments: [
        {
          name: "File_Name_with_Extension",
          path: "Full Path of the file"
        }]
    })
      .then(function (message) {
        alert("Mail has been sent successfully")
      });
  }