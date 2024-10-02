// Agregar un documento con datos personalizados
export async function getGames() 
{
  const response = await fetch('https://front-futbol.vercel.app/games', {
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

  