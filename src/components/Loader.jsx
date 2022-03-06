import React from "react";

class Loader extends React.Component {
  componentWillUnmount() {
    console.log("Loader componentWillUnmount");
  }

  render() {
    return <p>Cargando...</p>;
  }
}

export { Loader };
