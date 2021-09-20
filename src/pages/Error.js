import { Link } from "react-router-dom";

const Error = () => {
  <section className="error-page section">
    <div className="error-container">
      <h1>Oops! it's a Dead End</h1>
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
    </div>
  </section>;
};

export default Error;
