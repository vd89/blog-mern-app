const NotFound = ({ history }) => {
  console.log(history.location.pathname);
  return (
    <div className="container">
      <h1>404 </h1>
      <p>{history.location.pathname} Not Found </p>
    </div>
  );
};

export default NotFound;
