import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h2>Formulário</h2>
      <MyForm user={{ name: "Lucas mendes ", email: "lucas@hotmail.com" }} />

    </div>
  );
}

export default App;
