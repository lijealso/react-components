import React from 'react'
import ComponenteCinco from "./ComponenteCinco";

const ComponenteQuatro = (props) => {
    return (
      <div className="componente">
        <p>Título: {props.titulo}</p>
        <ComponenteCinco texto="texto do componente cinco" />
        <ComponenteCinco texto="texto do componente cinco" />
        <ComponenteCinco texto="texto do componente cinco" />
      </div>
    );
}
export default ComponenteQuatro