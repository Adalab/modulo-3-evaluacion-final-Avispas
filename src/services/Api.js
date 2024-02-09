// Fichero src/services/api.js
const callToApi = () => {
    // Llamamos a la API
    return fetch("https://hp-api.onrender.com/api/characters") 
      .then((response) => response.json())
      .then((response) => {
        // Cuando responde la API podemos limpiar los datos aquí
        const result = {
            name: response.name,
            id: response.id,
            species: response.species,
            patronus: response.patronus,
            ancestry: response. ancestry,
            image: response.image,
            alive: response.alive,
        };
        return result;
      });
  };
  
  export default callToApi;
