import { useRouteError, Link } from "react-router-dom";
const Error = () => {
  const error = useRouteError();

  return (
    <main className="grid min-h-[100vh] place-items-center px-8 ">
      <h4 className="text-center font-bold text-4xl">there was an error... </h4>
    </main>
  );
};
export default Error;
