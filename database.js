// Agregar un documento con datos personalizados
export async function getGames(newNameDoc, objValor) {
  const response = await fetch('https://api-futbol-dywbxph5q-hernans-projects-b8ac9745.vercel.app/games', {
    method: 'GET', 
    mode: 'cors',// Método POST
  })
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(data => {
      console.log('Success:', data); // Mostrar los datos devueltos
      return data;
    })
    .catch((error) => {
      console.error('Error:', error); // Manejar cualquier error
    });

    return response;
}

  