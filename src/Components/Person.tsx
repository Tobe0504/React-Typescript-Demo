import PersonList from "./PersonList";

type PersonProps = {
  person: {
    first: string;
    last: string;
  };
};

const Person = (props: PersonProps) => {
  const personList = [
    { first: "Tobe", last: "Arinze" },
    { first: "Kamsy", last: "Okeke" },
  ];
  return (
    <div>
      {props.person.first} {props.person.last}
      <PersonList personList={personList} />
    </div>
  );
};

export default Person;
