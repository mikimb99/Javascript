function sumar(num) {
  console.log(num);
}
sumar(10);

const sumarDos = (num1, num2) => {
  return num1 + num2;
};

const result = sumarDos(20, 30);
console.log(result);

//la función de => retorna sin return lo que
//este despues de la flecha
const mensaje = () => "Me llamo Mikel";

const response = mensaje();
console.log(response);

const mensaje2 = (nombre) => {
  return "Hola soy " + nombre;
};

const response2 = mensaje2("Julián");
console.log(response2);

//si ponemos num= valor en la función de flecha,
//siempre y cuando no tome por pantalla un valor
//quedará ese valor por defecto.
//si pongo sumavalor(4), tomará 4 +3 no tomará el 3
const sumavalor = (num = 3) => {
  console.log(num + 3);
};
sumavalor();

const suma3 = (num) => {
  console.log(num + 3);
};
suma3(9);

//template string

const numero = (num1, num2) => {
  return `el numero es: ${num1 + num2}`;
};

const result3 = numero(10, 20);
console.log(result3);

//opción sin {}
const numero2 = (num1, num2) => `el numero es: ${num1 + num2}`;
const result2 = numero2(10, 20);
console.log(result2);

//OBJETOS

const mascota = {
  nombre: "Tom",
  edad: 10,
  vivo: true,
  razas: ["reptil", "mamífero"]
};

console.log(mascota);
console.log(mascota.edad); //solo quiero una propiedad
console.log(mascota.razas[1]); //accedemos al segundo
mascota.id = 1; //añadir propiedad

//también podemos guardarlo en una const
const nombreMascota = mascota.nombre;
console.log(nombreMascota);

//DESTRUCTURING
//Guardamos las constantes de un objeto y
//las podemos llamar directamente
const { edad, nombre } = mascota;
console.log(edad);
console.log(nombre);

//---------------------------------------------

const web = {
  nombre: "blueweb",
  links: {
    enlace: "www.blueweb.com"
  },
  redes: {
    youtube: {
      enlace: "youtube.com/blueweb",
      nick: "blueweb.yt"
    }
  }
};

const enlaceYT = web.redes.youtube.enlace;
console.log(enlaceYT);

const { enlace, nick } = web.redes.youtube;

console.log(enlace, nick);
console.log(enlace);

//fetch
//para llamar a una API

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => res.json())
  .then((data) => {
    //console.log(data)
    //el slice para que me tome los 5 primeros nombres
    data.results.slice(0, 5).forEach((element) => {
      console.log(element.name);
    });
  })
  .catch((error) => console.log(error));

//Async y await

const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    console.log(data.results.slice(0, 5));
  } catch (error) {
    console.log(error);
  }
};
obtenerPokemones();

//MAP--> CREA UN NUEVO ARRAY CON LOS RESULTADOS DE LA LLAMADA A LA FUNCIÓN INDICADA

const obtenernombrePokemons = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    //pinto un array de solo los nombres con el map
    const nombreP = data.results.slice(0, 5).map((pokemon) => pokemon.name);
    console.log(nombreP);
  } catch (error) {
    console.log(error);
  }
};
obtenernombrePokemons();
//FILTER--> Para filtrar

const obtenernPokemonsfilter = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    //filtro por los objetos que tengan de nombre bulbasaur
    const nombreP = data.results.filter(
      (pokemon) => pokemon.name == "bulbasaur"
    );
    console.log(nombreP);
  } catch (error) {
    console.log(error);
  }
};
obtenernPokemonsfilter();

const obtenernPokemonsfiltersin = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    //filtro por los objetos que no tengan de nombre bulbasaur
    const nombreP = data.results.filter(
      (pokemon) => pokemon.name !== "bulbasaur"
    );
    console.log(nombreP);
  } catch (error) {
    console.log(error);
  }
};
obtenernPokemonsfiltersin();
