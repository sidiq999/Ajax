$(document).ready(function () {  
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
           const data = JSON.parse(this.responseText);
           fillData(data.products);
       }
  };
  xhttp.open("GET", "https://dummyjson.com/products", true);
  xhttp.send();
});  

function fillData(products)
{
    let placeholder = document.querySelector("#data-output");
    let data = "";
    let inc = 1;
    for(let product of products)
    {
        data += `
             <tr>
                <th scope="row">${inc}</th>
                <td><img class="image" src='${product.images[0]}'></td>
                <td>${product.title}</td>
                <td>${product.brand}</td>
                <td>${product.category}</td>
                <td>${product.description}</td>
                <td>${product.stock}</td>
                <td>${product.price}</td>
                <td>${product.rating}</td>
             </tr>
        `;
        inc++;
    }

    placeholder.innerHTML = data;

   
}