interface propTypes {
  location: {
    state: {
      menu: {
        name: string;
        age: number;
      };
    };
  };
}
export default function RouterPropTestResult(props: propTypes) {
  const name = props.location.state.menu.name;
  const age = props.location.state.menu.age;
  return (
    <>
      <h1>Router Prop Test Result</h1>
      <div>{name}</div>
      <div>{age}</div>
    </>
  );
}
