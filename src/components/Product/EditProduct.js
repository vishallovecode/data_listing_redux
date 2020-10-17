import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getProduct, updateProduct } from "../../_actions/ProductAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getProduct ,updateProduct} from "../../_actions/ProductAction";

const EditProduct = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const Product = useSelector((state) => state.ProductReducer.Product);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setquantity] = useState("");
  const [imgUrl, setimgUrl] = useState("");
  const [Description, setDescription] = useState("");
  useEffect(() => {
    if (Product != null) {
      setName(Product.name);
      setPrice(Product.price);
      setquantity(Product.quantity);
      setimgUrl(Product.imgUrl);
      setDescription(Product.Description);
    
    }
    dispatch(getProduct(id));
  }, [Product]);

  const onUpdateProduct = (e) => {
    e.preventDefault();

    const update_Product = Object.assign(Product, {
      name: name,
      quantity: quantity,
      price: price,
      imgUrl: imgUrl,
      Description:Description,
    });

    dispatch(updateProduct(update_Product));
    history.push("/")
  };
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Edit Product</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateProduct(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              required
              className="form-control"
              placeholder="Enter the price"
              value={price}
             
              // pattern="[0-9]{1}[0-9]{9}" 
              required
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Quantity of product"
              value={quantity}
              required
              onChange={(e) => setquantity(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Image url"
              value={imgUrl}
              onChange={(e) => setimgUrl(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
          
      
              className="form-control"
              placeholder="Type Description"
              value={Description}
              max={70}
              min={18}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button className="btn btn-warning" type="submit">
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
