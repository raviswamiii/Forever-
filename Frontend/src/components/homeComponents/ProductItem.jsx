import React, { useContext } from "react";
import { Link } from "react-router";
import { ShopContext } from "../../context/ShopContext";

// export const ProductItem = ({ id, name, image, price }) => {
//   const { currency } = useContext(ShopContext);
//   return (
//     <Link
//       className="text-sm text-gray-700 "
//       to={`/product/${id}`}
//     >
//       <div className="overflow-hidden">
//         <img
//           className="hover:scale-[1.1] transition ease-in-out"
//           src={image[0]}
//           alt=""
//         />
//       </div>
//       <p className="pt-2">{name}</p>
//       <p className=" font-medium ">
//         {currency}
//         {price}
//       </p>
//     </Link>
//   );
// };


export const ProductItem = ({id,image,name,price}) => {
  const {currency} = useContext(ShopContext);
return (
  <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
    <div className="overflow-hidden">
      <img
        className="hover:scale-110 transition ease-in-out"
        src={image[0]}
        alt=""
      />
    </div>
    <p className="pt-3 pb-1 text-sm">{name}</p>
    <p className="text-sm font-medium">
      {currency}
      {price}
    </p>
  </Link>
);
};