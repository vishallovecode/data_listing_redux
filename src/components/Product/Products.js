import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductList from './Product'
import { selectAllProduct, clearAllProduct, deleteAllProduct } from "../../_actions";
import Navbar from "../Navbar";
import CustomSelect from "../CustomSelect";

const Products = (props) => {
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);
  const[sortBy,setSortBy]=useState("Select")
  var Products = useSelector((state) => state.ProductReducer.Products);
  const [productData, setproductData] = useState(Products)

  const selctedContcats = useSelector(
    (state) => state.ProductReducer.selectedProduct
  );
  // document.ready(function () {
  //   ('#dtBasicExample').DataTable();
  //   ('.dataTables_length').addClass('bs-select');
  //   });

 
    // sortBy = ASC or RELEVANCE
   const handleSortBy = (sortBy) => {
      // sortBy = ASC or RELEVANCE
      let data=productData;
    let datafilter=  data.sort((a, b) => b[sortBy.toLowerCase()] - a[sortBy.toLowerCase()]);
    setSortBy(sortBy)
    setproductData(datafilter)
    
  };

 
  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllProduct(Products.map((Product) => Product.id)));
    } else {
      dispatch(clearAllProduct());
    }
  }, [selectAll]);
  const filterchange = (filter) => {
    Products = Products.filter((value) => {
      return value.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0;
    })
    console.log(Products, 'this is the filter')
    setproductData(Products)

  }

  return (
    <div>
      
      <Navbar />
      <input class="form-control" id="myInput" type="text" placeholder="Search.." onChange={(e) => filterchange(e.target.value)} />

      <div className={'sort-by'}>
                <span className={'sort-by-text'}>Sort by </span>
                <CustomSelect defaultValue={sortBy} className={'all-selector'}
                    filter={[{"key":"sortby","value":"None"},{'key': 'Quantity', 'value': 'Quantity'}, {
                        'key': 'Price',
                        'value': 'Price'
                    }]}
                    onChange={(e)=>handleSortBy(e.target.value)}>
                    {/*<opt value="RELEVANCE">Relevance</opt>*/}
                    {/*<Option value="ASC">Price: Low to High</Option>*/}
                </CustomSelect>
            </div>
     
    
      <table id="dtBasicExample" className="table shadow table table-striped table-bordered table-sm">
        <thead>
          <tr>
            
            <th>Name</th>
            <th  >Price</th>
            <th  >Quantity</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {console.log(productData)}
          {productData.map((Product) => (
            <ProductList Product={Product} key={Product.id} selectAll={selectAll} />
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default Products;
