import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../_actions/ProductAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";

const AddProduct = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setquantity] = useState("");
  const [imgUrl, setimgUrl] = useState("");
  const [Description, setDescription] = useState("");
  

  const addProductHandler = (e) => {
  
    const new_Product = {
      id: shortid.generate(),
      price: price,
      name:name,
      quantity: quantity,
      imgUrl: imgUrl,
      Description: Description,
    
    };
    dispatch(addProduct(new_Product));
    history.push("/");
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add Product</div>
      <div className="card-body">
        <form onSubmit={(e) => addProductHandler(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product Name"
              required
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


           
           

          <button className="btn btn-primary" type="submit">
            Add Products
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
