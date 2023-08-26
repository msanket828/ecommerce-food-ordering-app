import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="main">
      <div className="container">
        <h2>Oops! something went wrong....</h2>
        <br />
        <p>
          {err.status}:{err.statusText}
        </p>
      </div>
    </div>
  );
};

export default Error;
