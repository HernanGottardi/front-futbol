import {getGames} from './database.js';

function elegirImagen(categoria)
{
    console.log(categoria)
    if (categoria == "AFCCHA") 
    {
        return "public/Imagenes/AFC.png";
    }
    else if (categoria == "PE")
    {
        return "public/Imagenes/peru.png";
    }
    else if (categoria == "ENG")
    {
        return "public/Imagenes/inglaterra.jpeg";
    }
    else if (categoria == "IT")
    {
        return "public/Imagenes/italia.jpg";
    }
    else if (categoria == "COL")
    {
            return "public/Imagenes/colombia.png";
    }
    else if (categoria == "BRA")
    {
        return "public/Imagenes/brasil.jpg";
    }
    else if (categoria == "URU")
    {
        return "public/Imagenes/uruguay.jpeg";
    }
    else if (categoria == "AFCCHA")
    {
        return "public/Imagenes/uruguay.jpeg";
    }
    else
    {
        return "public/Imagenes/argentina.jpg";
    }
}

const contenedorEl = document.querySelector(".contenedor")

const games = getGames();
console.log("games: ", games)


games.then(allGames => {

    allGames.forEach(game => 
    {
        if (game.id != "init")
        {
            const contenedorOpcionesEl = document.createElement("div")
            contenedorOpcionesEl.className = "opcionesParaVer";

            const contenedorTituloImagen = document.createElement("div")
            contenedorTituloImagen.className = "contenedorTituloImagen";

            const tituloEl = document.createElement("h5")
            tituloEl.className = "tituloPartido"
            tituloEl.textContent = game.id;

            const imagen = document.createElement("img");
            imagen.setAttribute("src", elegirImagen(game.data.Categoria))
            imagen.setAttribute("class", "imgPais")
            
            contenedorTituloImagen.append(imagen)
            contenedorTituloImagen.append(tituloEl)
            
            
            contenedorOpcionesEl.append(contenedorTituloImagen)

            if (game.data.Programas.length != 0)
            {
                const listaOpciones = document.createElement("ul");
                const listaProgramas = game.data.Programas
                const listaEnlaces = game.data.URLs

                for (let i = 0; i < listaProgramas.length; i++) 
                {
                    const contenedorLiEl = document.createElement("li");

                    const valorPrograma = listaProgramas[i];
                    const valorEnlace = listaEnlaces[i];

                    const enlaceEl = document.createElement("a");
                    enlaceEl.className = "enlacePrograma"
                    enlaceEl.setAttribute("href", valorEnlace)
                    enlaceEl.setAttribute("target", "_blank")

                    enlaceEl.textContent = `${valorPrograma}`

                    contenedorLiEl.append(enlaceEl);

                    listaOpciones.append(contenedorLiEl)
                }

                contenedorOpcionesEl.append(listaOpciones)

                contenedorEl.append(contenedorOpcionesEl)

    
            }
        }
    });
})
