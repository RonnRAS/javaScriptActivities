
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

        availability (){
            return this.productStocks > 0
                ? 'available' 
                : 'out of stock';

        }


    }



function addItems() {
    const productType = document.getElementById("productType").value;
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
    const productTax = document.getElementById("productTax").value;
    const productStocks = document.getElementById("productStocks").value;
    const warning = document.getElementById("warning");
    



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

    availableProduct();
    // testProduct1.displayProduct();

    const productForm = document.getElementById("productForm").reset();

}


function availableProduct (){
    const availableItem = document.getElementById("availableItem");
    
    
    availableItem.innerHTML = "<h2>available items</h2>";
    
    for (let product of productsData) {

    availableItem.innerHTML += `
        <div>
                <p>Name: ${product.productName}</p>
                <p>Stock: ${product.productStocks}</p>
                <p>Total: ₱${product.calculatedTotal().toFixed(2)}</p>
                <p>Status: ${product.availability()}</p>
                <button type="button" onclick="buyItem()">Buy</button>
                <hr>
        </div>
    `;

    }

}

