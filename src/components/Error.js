import { useRouteError } from "react-router-dom";

const Error = () => {
  const router = useRouteError();
  console.log(router);
  return (
    <div>
      <h2>Oops❗ Something went wrong </h2>
      <h1>
        {router.status} {router.statusText} ❌
      </h1>
      <h2>{router.error.message}</h2>
    </div>
  );
};

export default Error;
