# MANEJO PROFESIONAL DEL ESTADO

## Estado y ciclo de vida con Hooks y Clases

## Estados independientes y compuestos

### Estados independientes

```js
const [error, setError] = useState(false);
const [loading, setLoading] = useState(false);
const [value, setValue] = useState("");
```

### Estados compuestos con useState

```js
const [state, setState] = useState({
  value: "",
  error: false,
  loading: false,
});
```

## Código imperativo y declarativo en React

**Paradigma**
Paradigma de programación son la forma que traducimos lo que pensamos al código que vamos a escribir.
.
**Paradigma imperativo:**
Describir el paso a paso de lo que vamos a hacer en el código.
.
**Paradigma declarativo**
Cuanto mas declarativo, menos se concentra en el paso a paso. Eso se vera en otra función.

### Estados imperativos con useState

### Estados semideclarativos con useState

En vez de cambiar el estado en el mismo jsx creamos funciones y lo invocamos
