import React, { useEffect, useReducer, useState } from "react";
import { actionTypes, initialState, reducer } from "../UseReducer";

const SECURITY_CODE = "linux";

export const UseReducerExample = ({ name }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!!state.loading) {
      setTimeout(() => {
        console.log("validando...");
        if (state.value !== SECURITY_CODE) {
          dispatch({
            type: actionTypes.error,
          });
        } else {
          dispatch({
            type: actionTypes.confirm,
          });
        }
      }, 3000);
    }

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
          onChange={(e) =>
            dispatch({
              type: actionTypes.write,
              payload: {
                value: e.target.value,
              },
            })
          }
        />
        <button onClick={() => dispatch({ type: actionTypes.check })}>
          Comprobar
        </button>
      </div>
    );
  } else if (state.confirmed && !state.deleted) {
    return (
      <>
        <p>Pedimos confirmacion, Estas segurx?</p>
        <button onClick={() => dispatch({ type: actionTypes.delete })}>
          Si, eliminar
        </button>
        <button onClick={() => dispatch({ type: actionTypes.reset })}>
          No, me arrepenti
        </button>
      </>
    );
  } else {
    return (
      <>
        <p>Tarea eliminda con exito!</p>
        <button onClick={() => dispatch({ type: actionTypes.reset })}>
          Volver atras
        </button>
      </>
    );
  }
};
