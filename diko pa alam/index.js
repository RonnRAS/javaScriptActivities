
const productsData = []; 



class product {
        constructor(productType, productName, productPrice, productTax, productStocks) {
            this.productType =
                productType.charAt(0).toUpperCase() +           
                productType.slice(1).toLowerCase();
            this.productName =
                productName.charAt(0).toUpperCase() +
                productName.slice(1).toLowerCase();
            this.productPrice = Number(productPrice);
            this.productTax = Number(productTax) / 100;
            this.productStocks = Number(productStocks);
            this.total = this.calculatedTotal();
            
        }

        calculatedTotal (){
            return this.productPrice +  (this.productPrice * this.productTax);    
        }

    }




function addItems() {
    const productType = document.getElementById("productType").value;
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
    const productTax = document.getElementById("productTax").value;
    const productStocks = document.getElementById("productStocks").value;
    const warning = document.getElementById("warning");
    

    const productForm = document.getElementById("productForm").reset();


        if (
            productType === "" ||
            productName === "" ||
            productPrice === "" ||
            productTax === "" ||
            productStocks === ""
        ) {
            warning.textContent = "enter a value";
        return;
    }


    const productValue = new product(
        productType,
        productName,
        productPrice,
        productTax,
        productStocks);

    productsData.push(productValue);


    // testProduct1.displayProduct();

}




const availableProduct = document.getElementById("availableProduct");     
    availableProduct.textContent = "Available Products ";  