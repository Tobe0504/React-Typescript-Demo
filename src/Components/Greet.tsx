import Person from "./Person";

type GreetProps = {
  name: string;
  messagesCount?: number;
  isLoggeddIn: boolean;
};

const Greet = (props: GreetProps) => {
  const person = {
    first: "Tobeenna",
    last: "Ezimorah",
  };
  return (
    <div>
      <h2>
        {props.isLoggeddIn
          ? `Welcome ${props.name} to this React typescript Tutorial. You have
        ${props.messagesCount} messages to read`
          : "Welcome Guest"}
      </h2>
      <Person person={person} />
    </div>
  );
};

export default Greet;
