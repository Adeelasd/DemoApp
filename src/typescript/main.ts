//gets Header and footer
const header = "./layouts/header.html";
const footer = "./layouts/footers.html";
//sets html headers
fetch(header)
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.getElementById("header-body")!.innerHTML = data;
    setActiveNavBar();
  });
//set active pages according to url names only supports no nested url as of now
const setActiveNavBar = () => {
  //@ts-ignore
  let nav_link: Array<Element> = document.querySelectorAll(".nav-links")!;
  let current_location = window.location.href.split("/");
  let parsedlocation = current_location[current_location.length - 1];
  for (let items of nav_link) {
    let nav_url = items.getAttribute("href")!.split("/");
    let parsed_url = nav_url[nav_url.length - 1];
    if (parsedlocation == parsed_url) {
      items.className += " bg-white  text-gray-700";
    }
  }
};

//sets html footer

fetch(footer)
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.getElementById("footer-body")!.innerHTML = data;
    setFotterTime();
  });
const setFotterTime = () => {
  let footer_date = document.getElementById("footer-time")!;
  footer_date.textContent = new Date().getFullYear().toString();
};
