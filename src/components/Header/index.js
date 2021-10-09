import React from "react";

const Header = () => {
  return (
    <div className="jumbotron text-center">
      <h1 className="display-4">Welcome, Grocery App!</h1>
      <p className="lead">
        One stop shop for all your Grocery Needs
      </p>
      <hr className="my-4" />
      <p>
        It uses utility classNamees for typography and spacing to space content out
        within the larger container.
      </p>
      <a className="btn btn-primary btn-lg" href="#" role="button">
        Start Shopping
      </a>
    </div>
  );
};

export default Header;
