import { Link } from "react-router-dom";
export default function RouterPropTest() {
  const menu = {
    name: "Kim",
    age: 30,
  };
  return (
    <>
      <h1>Router Prop Test</h1>
      <Link
        to={{
          pathname: "/routerproptestresult",
          state: {
            menu,
          },
        }}
      >
        {" "}
        Data Show
      </Link>
    </>
  );
}
