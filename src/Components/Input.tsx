type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
};

const Input = (props: InputProps) => {
  return (
    <input
      type="text"
      value={props.value}
      onChange={props.handleChange}
      style={props.style}
    />
  );
};

export default Input;
