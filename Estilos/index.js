const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

const listUsers = async () => {
  const response = await fetch ("https://jsonplaceholder.typicode.com/posts/1/comments");
  const users = await response.json ();

  let tableBody = ``;
  users.forEach((user) => {
    tableBody += `<tr>
    <td class ="styled-tabletbodytr">${user.id} </td>
    <td class ="styled-tabletbodytr">${user.name}</td>
    <td class ="styled-tabletbodytr">${user.body}</td>
    <td class ="styled-tabletbodytr">${user.email}</td>
    </tr>`;
  });
  document.getElementById ("tableBodyU").innerHTML = tableBody;
};
window.addEventListener ("load", function () {
  listUsers ();
})