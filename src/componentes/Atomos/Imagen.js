import React from 'react'

export const Imagen = ({img="../../descarga.jpg" }) => {
  return (
  /*     <img src={`${srcImagen} /> */
    <div> 
      <img
        src={
          img
            ? img
            : "https://uploads.codesandbox.io/uploads/user/7057e602-9a4b-48e2-a956-a6a83661dbe2/lUkO-download.png"
        }
        alt={img}
      />
    </div>
  )
}
