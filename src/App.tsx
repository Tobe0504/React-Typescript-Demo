import "./App.css";
import Button from "./Components/Button";
import Greet from "./Components/Greet";
import Input from "./Components/Input";

function App() {
  return (
    <div className="App">
      <Greet name="Tobe" messagesCount={12} isLoggeddIn={true} />
      <Button
        handleClick={(event) => {
          console.log(event);
        }}
      />
      <Input
        value=""
        handleChange={(event) => {
          console.log(event);
        }}
        style={{ border: "1px solid red", display: "block" }}
      />
    </div>
  );
}

export default App;
