import * as mdb from 'mdb-ui-kit';

let productType = document.getElementById('product__types');
let checkProductTypes = document.getElementById('product__types');
let toggleAdd = document.getElementById('toggleAddBtn');
let toggleList = document.getElementById('toggleViewBtn');
let productList = document.getElementById("product__list");
let newProductBtn = document.getElementById("product__add__button");
let liList = document.getElementsByTagName('LI');
let list = document.getElementById("product__list");
let deleteProduct = document.getElementsByClassName("close");


  productType.options.forEach(function(option__element) {
    let option__text = option__element.text;
    console.log(option__text);
  })

  checkProductTypes.addEventListener("change", checkProductType)
  function checkProductType() {
    let obj = document.getElementById('product__types');
    let quantityType = document.getElementById('quantity__type')
    
    if(obj.value === "bread" || obj.value === "hygiene" || obj.value === "diary") {
      quantityType.innerHTML = "szt"
    } else {
      quantityType.innerHTML = "kg"
    }
  }

  toggleAdd.onclick = function() {toggleView("add__container")};
  toggleList.onclick = function() {toggleView("list__container")};
  function toggleView(e) {
    let obj = document.getElementById(e);
    if (obj.style.display === "none") {
      obj.style.display = "block";
    } else {
      obj.style.display = "none";
    }
  }

  productList.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle('checked');
    }
  }, false);
  
  for (let i=0; i < liList.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    liList[i].appendChild(span);
  }

  list.addEventListener('click', function(e) {
    if (e.target.tagName === "li") {
      e.target.classList.toggle('checked');
    }
  }, false);
    

for (let i =0; i<productType.length; i++) {
  let ul = document.createElement('ul');
  ul.setAttribute("id", productType[i].value +"__list")
  document.getElementById("lista").appendChild(ul);
}

let count = 0;
newProductBtn.addEventListener('click', newProduct) 
  function newProduct() {
    let li = document.createElement('li');
    let inputType = document.getElementById("product__types").value;
    let inputValue = document.getElementById("product__name").value;
    let inputQuantity = document.getElementById("product__quantity").value;
    let inputText = document.createTextNode(inputValue +" "+ inputQuantity);
    let arr = [inputType, inputValue, inputQuantity];
    
    newProductBtn.onclick = function() {
      count +=1;
      document.getElementById("count__number").innerHTML = "Aktualnie na naszej liście jest " +count +" obiektów"
    }

    ``
    li.appendChild(inputText);
    if (inputValue === "" || inputQuantity === "") {
      alert('Nie uzupełniłeś produktu i ilości, popraw listę');
      count -=1
      document.getElementById("count__number").innerHTML = "Aktualnie na naszej liście jest " +count +" obiektów"
    } else if (inputType === "vegetables") {
      document.getElementById("vegetables__list").appendChild(li);
    } else if (inputType === "fruits") {
      document.getElementById("fruits__list").appendChild(li);
    } else if (inputType === "diary") {
      document.getElementById("diary__list").appendChild(li);
    } else if (inputType === "bread") {
      document.getElementById("bread__list").appendChild(li);
    } else if (inputType === "hygiene") {
      document.getElementById("hygiene__list").appendChild(li);
    }
    document.getElementById("product__name").value = "";
    document.getElementById("product__quantity").value = "";

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = 'close';
    span.appendChild(txt);

    function setAttributes(el, attr) {
      for (var key in attr) {
        el.setAttribute(key, attr[key])
      }
    }
    setAttributes(li, {"type": inputType, "name": inputValue, "quantity": inputQuantity})

    li.appendChild(span);
  
    for (let i=0; i < deleteProduct.length; i++) {
      deleteProduct[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
export default {
  mdb,
};
