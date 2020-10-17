import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../_actions";

const Product = ({ Product, selectAll }) => {
  const dispatch = useDispatch();
  const { name, price, quantity, id, Description ,imgUrl} = Product;
  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input
            checked={selectAll}
            type="checkbox"
            className="custom-control-input"
          />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <Avatar className="mr-2" name={name} size="45" round={true}  src={imgUrl} /> {name}
      </td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{Description}</td>
     

      <td className="actions">
        <Link to={`/Products/edit/${id}`}>
          <span className="material-icons mr-2">edit</span>
        </Link>
        
      </td>
    </tr>
  );
};

export default Product;
