import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 sm:my-16  text-center px-4">
      <h1 className="text-xl font-semibold  mb-4 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-orange-300">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue Ordering,{username}
        </Button>
      )}
    </div>
  );
}

export default Home;
