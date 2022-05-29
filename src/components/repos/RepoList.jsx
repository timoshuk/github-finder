import PropTypes from "prop-types";

const RepoList = ({ repos }) => {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4font-bold card-title">
          Latest Repositories
        </h2>
        {repos.map((repo) => {
          return <h3>{repo.name}</h3>;
        })}
      </div>
    </div>
  );
};

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
