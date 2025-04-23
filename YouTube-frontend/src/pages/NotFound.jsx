import { useRouteError, Link } from "react-router-dom";

function NotFound() {
  const err = useRouteError();
  return (
    <div>
      <img
        className="h-50 md:h-100 mx-auto mt-20"
        src="https://img.freepik.com/free-vector/monster-cartoon-character-holding-closed-sign-banner_1308-159938.jpg?t=st=1742744650~exp=1742748250~hmac=b1bdc6748cc54aec070bd77d3f20772b2279274b181b0387a04a302383110283&w=740"
      />
      <div className="text-center text-red-500">
        <h1 className="mt-4 text-lg md:text-3xl">OOPS!!!</h1>
        <h1 className="text-md md:text-2xl">
          {err.status} {err.data}
        </h1>
        <button className="mt-8 rounded py-2 px-4 bg-yellow-500">
          <Link to="/home" className="text-sm md:text-lg text-white">
            Go Back Home
          </Link>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
