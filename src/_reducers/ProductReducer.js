import {
  CREATE_Product,
  GET_Product,
  UPDATE_Product,
  DELETE_Product,
  SELECT_Product,
  CLEAR_Product,
  DELETE_SELECTED_Product,
} from "../constant/types";

const intialState = {
  // Products: [
  //   {
  //     id: 1,
  //     name: "Vishal Sharma",
  //     username: "Bret",
  //     email: "Sincere@april.biz",
  //     age:"21",
  //     hobbies:"Singing, dancing, listening",
  //     role:"Admin",
  //     address: "4/27smnx-sbdhw ",
  //     phone: "9915378881",
      
  //   },
  //   {
  //     id: 2,
  //     name: "Vishal Sharma",
  //     username: "Bret",
  //     email: "Sincere@april.biz",
  //     age:"21",
  //     hobbies:"Singing, dancing, listening",
  //     role:"Admin",
  //     address: "4/27smnx-sbdhw ",
  //     phone: "9915378881",
  //   },
  //   {
  //     id: 3,
  //     name: "Vishal Sharma",
  //     username: "Bret",
  //     email: "Sincere@april.biz",
  //     age:"21",
  //     hobbies:"Singing, dancing, listening",
  //     role:"Admin",
  //     address: "4/27smnx-sbdhw ",
  //     phone: "9915378881",
  //   },
  //   {
  //     id: 4,
  //     name: "Vishal Sharma",
  //     username: "Bret",
  //     email: "Sincere@april.biz",
  //     age:"21",
  //     hobbies:"Singing, dancing, listening",
  //     role:"Admin",
  //     address: "4/27smnx-sbdhw ",
  //     phone: "9915378881",
  //   },
  //   {
  //     id: 5,
  //     name: "Vishal Sharma",
  //     username: "Bret",
  //     email: "Sincere@april.biz",
  //     age:"21",
  //     hobbies:"Singing, dancing, listening",
  //     role:"Admin",
  //     address: "4/27smnx-sbdhw ",
  //     phone: "9915378881",
  //   },
  //   {
  //     id: 6,
  //     name: "Vishal Sharma",
  //     username: "Bret",
  //     email: "Sincere@april.biz",
  //     age:"21",
  //     hobbies:"Singing, dancing, listening",
  //     role:"Admin",
  //     address: "4/27smnx-sbdhw ",
  //     phone: "9915378881",
  //   },
  //   {
  //     id: 7,
  //     name: "Vishal Sharma",
  //     username: "Bret",
  //     email: "Sincere@april.biz",
  //     age:"21",
  //     hobbies:"Singing, dancing, listening",
  //     role:"Admin",
  //     address: "4/27smnx-sbdhw ",
  //     phone: "9915378881",
  //   },
  //   {
  //     id: 8,
  //     name: "Vishal Sharma",
  //     username: "Bret",
  //     email: "Sincere@april.biz",
  //     age:"21",
  //     hobbies:"Singing, dancing, listening",
  //     role:"Admin",
  //     address: "4/27smnx-sbdhw ",
  //     phone: "9915378881",
  //   },
  //   {
  //     id: 9,
  //     name: "Glenna Reichert",
  //     name: "Vishal Sharma",
  //     username: "Bret",
  //     email: "Sincere@april.biz",
  //     age:"21",
  //     hobbies:"Singing, dancing, listening",
  //     role:"Admin",
  //     address: "4/27smnx-sbdhw ",
  //     phone: "9915378881",
  //   },
  //   {
  //     id: 10,
  //     name: "Vishal Sharma",
  //     username: "Bret",
  //     email: "Sincere@april.biz",
  //     age:"21",
  //     hobbies:"Singing, dancing, listening",
  //     role:"Admin",
  //     address: "4/27smnx-sbdhw ",
  //     phone: "9915378881",
  //   },
  // ],
  
  Products: [
      {
        id:1,
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
        "name": "CHECK PRINT SHIRT",
        "price": 110,
        "Description":"This is the best printed shirt",
        "quantity":100
      },
      {
        id:2,
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "name": "GLORIA HIGH LOGO SNEAKER",
        "price": 91,
        "Description":"This is the best  LOGO SNEAKER",
        "quantity":200
      },
      {id:3,
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "name": "CATE RIGID BAG",
        "price": 94.5,
        "Description":"This is the best  BAG",
        "quantity":20
      },
      {
        id:4,
        "imgUrl": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
        "name": "GUESS CONNECT WATCH",
        "price": 438.9
      },
      {
        id:5,
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "name": "'70s RETRO GLAM KEFIAH",
        "price": 20,
        "Description":"This is the best  GLAM KEFIAH",
        "quantity":10
        
      }
    ],
  
  Product: null,
  selectedProduct: [],
};

export function ProductReducer (state = intialState, action)  {
  switch (action.type) {
    case CREATE_Product:
      return {
        ...state,
        Products: [action.payload, ...state.Products],
      };
    case GET_Product:
      let arr = state.Products.filter(
        (Product) => Product.id == action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        Product: arr,
      };
    case UPDATE_Product:
      return {
        ...state,
        Products: state.Products.map((Product) =>
        Product.id == action.payload.id ? action.payload : Product
        ),
      };
    case DELETE_Product:
      return {
        ...state,
        Products: state.Products.filter(
          (Product) => Product.id != action.payload
        ),
      };
    case DELETE_SELECTED_Product:
      return {
        ...state,
        Products: [],
      };
    case SELECT_Product:
      return {
        ...state,
        selectedProduct: action.payload,
      };

    case CLEAR_Product:
      return {
        ...state,
        selectedProduct: [],
      };
    default:
      return state;
  }
};
