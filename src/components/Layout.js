import React from 'react'
const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-8 offset-2">{children}</div>
        </div>
      </div>
    </>
  );
};
export default Layout;
