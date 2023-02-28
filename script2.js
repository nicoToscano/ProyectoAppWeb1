//Código para la invocación usando el objeto XMLHttpRequest
const botonXMLHttpRequest = document.getElementById("botonXMLHttpRequest");
botonXMLHttpRequest.addEventListener("click", function() {
  const xhr = new XMLHttpRequest();
  
  xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/charizard", true);
  
  xhr.onload = function() {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(data);
    } else {
      console.log("Error al realizar la petición");
    }
  };  
  xhr.send();
});
//Código para la invocación usando la API Fetch, realizar esto de forma asíncrona
const boton = document.querySelector(".botonFetch")
boton.addEventListener('click',()=>{ 
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then((response) => response.json())
  .then((data) => console.log(data));
})
//Código para la invocación usando las librería Jquery (+Ajax)
$(document).ready(function(){
  $("#botonJquery").click(function(){
      $.ajax({
          url: "https://pokeapi.co/api/v2/pokemon/charmander",
          dataType: "json",
          success: function(data) {
              console.log(data);
          },
          error: function() {
            console.error("Error al realizar la petición");
          }
      });
  });
});
//Código para la invocación usando la libreria Axios
document.getElementById("botonAxios").addEventListener("click", function(){
  axios.get("https://pokeapi.co/api/v2/pokemon/squirtle")
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});