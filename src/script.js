// // fetch("  http://localhost:8088/food")
// // .then(function(foodJSON){
// //     return foodJSON.json();
// // })

// // .then(parsedFoods = (parsedFoods) => {
// //     console.log(parsedFoods);
// // })


// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         console.table(parsedFoods)
//     })

//     fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         parsedFoods.forEach(food => {

//         })
//     })

    
    
    // fetch("https://world.openfoodfacts.org/api/v0/product/0011150479547.json")
    // .then(response => response.json())
    // .then(productInfo => {
    //     // Use it here
    // })

    const foodFactory = function(food){
        let foodString = `<h1>${food.name}</h1><p>${food.category}</p><p>${food.ethnicity}</p>`
        let foodAsHTML = " "
        for(let i =0; i < food.ingredients.length; i++){
        foodAsHTML += `<p>${food.ingredients[i].text}</p>`;
        }  
        return `<article class="flex">${foodString} ${foodAsHTML}</article>`;
        // return foodString + foodAsHTML;
    }

    fetch("http://localhost:8088/food")
    .then(response => response.json())
    .then(myParsedFoods => {
        myParsedFoods.forEach(food => {
            console.log(food.barcode) // Should have a `barcode` property

            // Now fetch the food from the Food API
            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
                .then(response => response.json())
                .then(productInfo => {
                    food.ingredients = productInfo.product.ingredients
                  
                    const completeFoodString = foodFactory(food);
                    console.log(completeFoodString);
                    
                    // const completeFoodString = foodFactory(food);
                    // console.log(completeFoodString);
                    

                    
                    // Produce HTML representation
                    // const foodAsHTML = foodFactory(food);

                    // Add representaiton to DOM
                    // addFoodToDom(foodAsHTML);
                    // document.querySelector("#foodlist").innerHTML = foodAsHTML;
        
                    document.querySelector("#foodlist").innerHTML += completeFoodString;
                
                })
                // document.querySelector("#foodlist").innerHTML = completeFoodString;
        })
        // console.log(foodAsHTML);
        // document.querySelector("#foodlist").innerHTML = foodFactory(food);
    })