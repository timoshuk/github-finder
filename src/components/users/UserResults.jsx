import { useContext } from "react";

import Loader from "../Loader";
import UserItem from "./UserItem";

import GithubContext from "../../context/github/GithubContext";

const UserResults = () => {
  const { users, loading } = useContext(GithubContext);

  return loading ? (
    <Loader />
  ) : (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users?.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UserResults;
