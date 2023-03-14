import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex-col space-y-4 text-center">
          <div className="text-fuchsia-600 text-xl font-medium">404</div>
          <div className="text-5xl font-medium">Page not found</div>
          <div className="text-gray-500">
            Sorry, the page you're looking for isn't available.
          </div>
          <Link to='/'>
          <div className="flex items-center justify-center">
            <a href='/' className="bg-fuchsia-600 px-4 py-1 text-white font-medium rounded-lg  hover:scale-105 cursor-pointer">
              Visit Homepage
            </a>
          </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
