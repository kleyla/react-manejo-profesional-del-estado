import React from "react";
import { Loader } from "../components/Loader";

const SECURITY_CODE = "linux";

class ClassState extends React.Component {
  constructor(props) {
    //   debemos llamar a super cuando querramos modificar this que viene de React.Component
    super(props);

    this.state = {
      value: "",
      error: false,
      loading: false,
    };
  }
  componentWillMount() {
    console.log("1 componentWillMount");
  }
  componentDidMount() {
    console.log("2 componentDidMount");
  }
  componentDidUpdate() {
    // Se ejecuta cada vez que nuestro componente se actualiza
    console.log("componentDidUpdate");
    if (!!this.state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validacion");
        if (SECURITY_CODE === this.state.value) {
          this.setState({ loading: false });
        } else {
          this.setState({ loading: false, error: true });
        }
        console.log("terminando la validacion");
      }, 3000);
    }
  }
  // componentWillUnmount() {
  //   console.log("last componentWillUnmount");
  // }

  render() {
    // const { error, loading, value } = this.state;

    return (
      <div>
        <h1>{this.props.name} Example</h1>
        {this.state.error && !this.state.loading && <p>Error!</p>}
        {this.state.loading && <Loader />}

        <input
          placeholder="Codigo"
          type="text"
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <button
          onClick={() =>
            this.setState((prevState) => ({
              error: !prevState.error,
            }))
          }
        >
          Comprobar
        </button>
        <button
          onClick={() =>
            this.setState((prevState) => ({
              loading: !prevState.loading,
            }))
          }
        >
          Loading
        </button>
      </div>
    );
  }
}

export { ClassState };
