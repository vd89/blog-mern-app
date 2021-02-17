const NotFound = ({ history }) => {
  return (
    <div className="container">
      <h1>404 </h1>
      <p>{history.location.pathname} Not Found </p>
    </div>
  );
};

export default NotFound;
