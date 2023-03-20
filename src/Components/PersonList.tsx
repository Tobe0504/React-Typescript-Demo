type PersonListProps = {
  personList: {
    first: string;
    last: string;
  }[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <>
      {props.personList.map((person) => {
        return (
          <div>
            {person.last}, {person.first}
          </div>
        );
      })}
    </>
  );
};

export default PersonList;
