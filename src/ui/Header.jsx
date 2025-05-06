import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between bg-orange-500 text-gray-100 uppercase px-4 sm:px-6 ">
      <Link to="/" className="tracking-widest">
        Pizza Pronto Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;

// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import SearchOrder from "../features/order/SearchOrder";
// import Username from "../features/user/Username";

// function Header() {
//   const username = useSelector((state) => state.user.username);

//   const isLoggedIn = username !== "";

//   return (
//     <header className="flex items-center justify-between bg-orange-500 text-gray-100 uppercase px-4 py-1 sm:px-6">
//       <Link to="/" className="tracking-widest">
//         Pizza Pronto Co.
//       </Link>

//       {isLoggedIn ? <SearchOrder /> : <div className="py-2"></div>}

//       <Username />
//     </header>
//   );
// }

// export default Header;
