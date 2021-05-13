import { CardHtml } from "../templates/template-html";

const DataDumy = async () => {
  await fetch("https://restaurant-api.dicoding.dev/list")
    .then((response) => response.json())
    .then((result) =>
      result.restaurants.forEach((items) => {
        const conten_main = document.querySelector(".conten");
        conten_main.innerHTML += CardHtml(items);
      })
    );
};

export { DataDumy };
