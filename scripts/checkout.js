import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch} from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

// new Promise((resolve)=>{
//   loadProducts(() =>{
//     resolve();
//   });
// }).then(() =>{
//   renderOrderSummary();
//   renderPaymentSummary();
// })



// loadProducts(()=>{
//   renderOrderSummary();
//   renderPaymentSummary();
// });


// loadProducts(()=>{
//   loadCart(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// }); //see lots of nesting 2 code inside code inside code 


/*
new Promise((resolve)=>{
  loadProducts(() =>{
    resolve('value1');
  });
}).

then((value) =>{
  console.log(value);
  return new Promise((resolve) =>{
    loadCart(() =>{
      resolve();
    });
  });
}).

then(() =>{
  renderOrderSummary();
  renderPaymentSummary();
});
*/

async function loadPage(){
try{
  await loadProductsFetch();

  await new Promise((resolve) =>{
    loadCart(() =>{
      resolve();
    });
  });
}
catch(error){
  console.log('errored');
}
  

  renderOrderSummary();
  renderPaymentSummary();

}

loadPage();

/*
Promise.all([

  loadProductsFetch(),
  new Promise((resolve) =>{
    loadCart(() =>{
      resolve();
    });
  })
]).then(() =>{
  renderOrderSummary();
  renderPaymentSummary();
});
*/