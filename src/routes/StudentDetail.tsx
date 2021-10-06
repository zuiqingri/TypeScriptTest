import { data } from "../data.json";
interface PropTypes {
  match: {
    params: {
      id: any;
    };
  };
}
export default function StudentDetail({ match }: PropTypes) {
  const id = match.params.id;
  const name = data.students[id].name;
  const age = data.students[id].age;
  return (
    <>
      <h1>StudentDetail</h1>
      <div>Name:{name}</div>
      <div>Age:{age}</div>
    </>
  );
}
