const input = document.getElementById("input");
const button = document.getElementById("submitBtn");

button.addEventListener("click", () => {
  const imgContainer = document.querySelector(".img-container");
  imgContainer.innerHTML = "";
  if (input.value.length > 0) {
    const img = document.createElement("img");
    img.setAttribute("id", "qrCodeImg");
    img.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    imgContainer.append(img);
  } else {
    imgContainer.innerHTML = `<p>Please enter text or URL</p>`;
  }
  input.value = "";
});
