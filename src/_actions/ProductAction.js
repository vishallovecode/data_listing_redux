import {
  CREATE_Product,
  GET_Product,
  UPDATE_Product,
  DELETE_Product,
  SELECT_Product,
  CLEAR_Product,
  DELETE_SELECTED_Product,
} from "../constant/types";

// actions
export const addProduct = (Product) => ({
  type: CREATE_Product,
  payload: Product,
});

// get a Product
export const getProduct = (id) => ({
  type: GET_Product,
  payload: id,
});

// update a Product
export const updateProduct = (Product) => ({
  type: UPDATE_Product,
  payload: Product,
});

// delete a Product
export const deleteProduct = (id) => ({
  type: DELETE_Product,
  payload: id,
});

// select all Product
export const selectAllProduct = (id) => ({
  type: SELECT_Product,
  payload: id,
});

// clear selected Product
export const clearAllProduct = () => ({
  type: CLEAR_Product,
});

// delete selected Product
export const deleteAllProduct = () => ({
  type: DELETE_SELECTED_Product,
});
