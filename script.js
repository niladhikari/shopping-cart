



// this function is for phone and case total count and total product price

function handleProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    let newProductCount = productCount;
    if (isIncrease == true) {
        newProductCount = productCount + 1; // increse the count value
    }
    if (isIncrease == false && productCount > 0) {
        newProductCount = productCount - 1;  // decrese the count value
    }
    productInput.value = newProductCount;
    // const caseTotal = newProductCount * 59; 
     let productTotal = 0;

     if (product == 'phone') {
        productTotal = newProductCount * 1219; //this condition use for phone total amout calculation
     }
     if (product == 'case') {
        productTotal = newProductCount * 59;  //this condition use for case total amout calculation
     }

    document.getElementById(product + '-total').innerText = productTotal;
    calculatetotal()
  }


  function calculatetotal() {
      var phoneInput = document.getElementById('phone-count');
      var phoneCount = parseInt(phoneInput.value);

      var caseInput = document.getElementById('case-count');
      var caseCount = parseInt(caseInput.value);

      const totalPrice = phoneCount * 1219 + caseCount * 59;  //there calculate the total price money 
      document.getElementById('subtotalBalance').innerText ='$'+ totalPrice;

      var tax = totalPrice * 0.1;
      document.getElementById('tax').innerText  = tax.toFixed(2);  //there calculate the tax money 
  
      var totalmoney = totalPrice + tax;               //there calculate the total money with tax
      document.getElementById('total').innerText  = totalmoney;

  }
  
  

//case-increase event>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// document.getElementById("case-increase").addEventListener("click", function () {
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value);
//     const newCaseCount = caseCount + 1;
//     caseInput.value = newCaseCount;
//     const caseTotal = 59 * newCaseCount;
//     document.getElementById("case-total").innerText = caseTotal;

//   handleCaseChange(true);
// });

// //case-decrease event>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// document.getElementById("case-decrease").addEventListener("click", function () {
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value);
//     const newCaseCount = caseCount - 1;
//     caseInput.value = newCaseCount;
//     const caseTotal = newCaseCount * 59;
//     document.getElementById("case-total").innerText = caseTotal;

//   handleCaseChange(false);
// });
 

//phone-increase event >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// document.getElementById("phone-increase").addEventListener("click", function () {
//     const phoneInput = document.getElementById("phone-count");
//     const phoneCount = parseInt(phoneInput.value);
//     const newPhoneCount = phoneCount + 1;
//     phoneInput.value = newPhoneCount;
//     const phoneTotal = newPhoneCount * 1219;
//     document.getElementById("phone-total").innerText = phoneTotal;

//     handlePhoneChange(true);
//   });

// //case-decrease event>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// document.getElementById("phone-decrease").addEventListener("click", function () {
//     const phoneInput = document.getElementById("phone-count");
//     const phoneCount = parseInt(phoneInput.value);
//     const newPhoneCount = phoneCount - 1;
//     phoneInput.value = newPhoneCount;
//     const phoneTotal = newPhoneCount * 1219;
//     document.getElementById('phone-total').innerText = phoneTotal;
//     handlePhoneChange(false);
//   });


// this function for case>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function handleCaseChange(isIncrease) {
//   const caseInput = document.getElementById("case-count");
//   const caseCount = parseInt(caseInput.value);
//   let newCaseCount = caseCount;
//   if (isIncrease == true) {
//     newCaseCount = caseCount + 1; // increse the count value
//   }
//   if (isIncrease == false && caseCount > 0) {
//     newCaseCount = caseCount - 1; //decrese the count value
//   }
//   caseInput.value = newCaseCount;
//   const caseTotal = newCaseCount * 59; // total case price calculation
//   document.getElementById("case-total").innerText = caseTotal;
// }




// // this function for phone>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function handlePhoneChange(isIncrease) {
//     const phoneInput = document.getElementById("phone-count");
//     const phoneCount = parseInt(phoneInput.value);
//     let newPhoneCount = phoneCount;
//     if (isIncrease == true) {
//       newPhoneCount = phoneCount + 1;
//     }
//   if (isIncrease == false && phoneCount>0) {
//       newPhoneCount = phoneCount - 1;
//   }
//     phoneInput.value = newPhoneCount;
//     const phoneTotal = newPhoneCount * 1219;
//     document.getElementById("phone-total").innerText = phoneTotal;
//   }






//this side no work for some problem

//   function calculatetotal() {
    
//     var phoneCount = getInputValue('phone');

//     var caseCount = getInputValue('case');

//     const totalPrice = phoneCount * 1219 + caseCount * 59;  //there calculate the total price money
//     document.getElementById('subtotalBalance').innerText ='$'+ totalPrice;

    
//     var tax = totalPrice * 0.1;                //there calculate the tax money 
//     document.getElementById('tax').innerText  = tax.toFixed(2);  

//     var totalmoney = totalPrice + tax;               //there calculate the total money with tax
//     document.getElementById('total').innerText  = totalmoney;
// }

//   function getInputvalue(product) {
//     var productInput = document.getElementById(product + '-count');
//     var productCount = parseInt(productInput.value);
//     return productCount;
//   }