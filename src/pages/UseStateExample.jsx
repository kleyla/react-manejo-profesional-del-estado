import React, { useEffect, useState } from "react";

const SECURITY_CODE = "linux";

export const UseStateExample = ({ name }) => {
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [value, setValue] = useState("");
  const [state, setState] = useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  useEffect(() => {
    console.log("Empezando el efecto");

    if (!!state.loading) {
      setTimeout(() => {
        console.log("validando...");
        if (state.value !== SECURITY_CODE) {
          // setError(true);
          setState({ ...state, error: true, loading: false });
        } else {
          setState({ ...state, error: true, loading: false, confirmed: true });
        }
        // setLoading(false);
      }, 3000);
    }

    console.log("Terminnando el efecto");
    return () => {
      //   second;
    };
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h1>{name} Example</h1>
        {state.error && !state.loading && <p>Error!</p>}
        {state.loading && <p>Cargando...</p>}
        <input
          type="text"
          value={state.value}
          onChange={(e) => setState({ ...state, value: e.target.value })}
        />
        {/* <button onClick={() => }>Comprobar</button> */}
        <button onClick={() => setState({ ...state, error: !state.error })}>
          Error?
        </button>
        <button
          onClick={() => {
            // setError(false);
            // setLoading(!loading);
            setState({ ...state, loading: !state.loading });
          }}
        >
          Comprobar
        </button>
      </div>
    );
  } else if (state.confirmed && !state.deleted) {
    return (
      <>
        <p>Pedimos confirmacion, Estas segurx?</p>
        <button onClick={() => setState({ ...state, deleted: true })}>
          Si, eliminar
        </button>
        <button
          onClick={() => setState({ ...state, confirmed: false, value: "" })}
        >
          No, me arrepenti
        </button>
      </>
    );
  } else {
    return (
      <>
        <p>Tarea eliminda con exito!</p>
        <button
          onClick={() =>
            setState({ ...state, confirmed: false, deleted: false, value: "" })
          }
        >
          Volver atras
        </button>
      </>
    );
  }
};
