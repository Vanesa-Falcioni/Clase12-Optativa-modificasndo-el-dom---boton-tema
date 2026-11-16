const sitio = document.querySelector("body");
console.log(sitio);

const btnTema = document.querySelector("button");
console.log(btnTema);

// const menuItems = document.querySelectorAll("li");
// console.log(menuItems);

// const contenedorNoticias = document.querySelector(".noticias");
// console.log(contenedorNoticias);

// const articulos = document.querySelectorAll("article");
// console.log(articulos);

// const titulos = document.querySelectorAll("h2");
// // console.log(titulos);
// // console.log(titulos[0].innerHTML = "nuevo titulo");
// // titulos[0].innerHTML += "agrego";
// // titulos[0].innerHTML = `<h1>nuevo titulo</h1>`;
// titulos[0].style.color = "red";

// console.log(sitio.classList);
// console.log(sitio.classList.contains("dark"));
// sitio.classList.add("dark");

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Desarrollar la función a continuacion para que el usuario elija el tema del sitio.
// 2- Debemos preguntarle al usuario mediante un confirm si desea usar el modo oscuro.
// 3- Si el usuario confirma debemos aplicar la clase "dark" al "sitio", si cancela debe quedar en modo claro.
// 4- A su vez, si está en modo oscuro, el texto del boton debe decir "Cambiar a modo claro 🌞". De lo contrario, si está en modo claro debe decir "Cambiar a modo oscuro 🌛"
// como lo resolvimos en la clase de trabajo
// const sitio = document.querySelector("body");
// const btnTema = document.querySelector("button");
// function elegirTema() {
//   let resultado = confirm("¿Desea usar el modo oscuro?");
//   if (resultado) {
//     console.log(sitio.classList.add("dark"));
//     btnTema.innerHTML = `Modo claro`;
//   } else {
//     console.log(sitio);
//     btnTema.innerHTML = `Modo Oscuro`;
//   }
//   console.log(resultado);
// }
// elegirTema();
// como lo resolvio el profe en solucion sencilla sin escucha
// const sitio = document.querySelector("body");
// function elegirTema() {
//   let resp = confirm("quieres cambiar al modo oscuro?");
//   if (resp) {
//     sitio.classList.toggle("dark");
//   }
//   const oscuro = sitio.classList.contains("dark");
//   if (oscuro) {
//     btnTema.textContent = "cambiar a modo claro";
//   } else {
//     btnTema.textContent = "cambiar a modo oscuro";
//   }
// }
// elegirTema();
// solucion con escucha
btnTema.addEventListener("click", () => {
  sitio.classList.toggle("dark");
  const oscuro = sitio.classList.contains("dark");
  if (oscuro) {
    btnTema.textContent = "cambiar a modo claro";
  } else {
    btnTema.textContent = "cambiar a modo oscuro";
  }
});
