export const ContactForm = () => {
  $("#talentsage-contact-form").on("submit", function (e) {
    e.preventDefault();

    const myForm = e.target;
    const formData = new FormData(myForm as any);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => alert("Thank you for your submission"))
      .catch((error) => alert(error));
  });
};
