window.onload = () => {
  let devourButton = document.getElementsByClassName("readybtn");
  let addButton = document.getElementById("addbtn");

  function devour(event) {
    let id = this.getAttribute("data-id");
    console.log(id);

    fetch("/api/burgers/" + id, { method: "PUT" }).then(location.reload());
  }

  function addBurger(event) {
    event.preventDefault();
    let data = { burger: document.forms["main"].elements["addburger"].value };
    console.log(data);
    fetch("/api/burgers/", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(location.reload());
  }

  //Listeners activated
  for (let i = 0; i < devourButton.length; i++) {
    devourButton[i].addEventListener("click", devour);
  }

  addButton.addEventListener("click", addBurger);
};
