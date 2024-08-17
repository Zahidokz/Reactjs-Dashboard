import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div> 
        Products <Link to='/' className="bg-blue-600 rounded-lg p-[4px_50px]">Go to Dashboard Page</Link>
      </div>
    </>
  );
};

export default Products;
