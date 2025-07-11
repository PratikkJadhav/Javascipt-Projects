const form = document.querySelector("form")

form.addEventListener("submit" , function(event){
    event.preventDefault();

    const weight = parseInt(document.getElementById("weight").value);
    const height = parseInt(document.getElementById("height").value);
    const results = document.getElementById("results")
    if(height == "" || height < 0 || isNaN(height)){
        results.innerHTML = "Please give a valid Height"
    }else if(weight == "" || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give a valid Weight"
    }else{
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        results.innerHTML += `<span>Your BMI is ${bmi}</span><br>`
        if(bmi <=18.6){
            results.innerHTML += `<span>You're UnderWeight</span><br>`
        }else if(bmi > 18.6&&bmi<=24.9){
            results.innerHTML += `<span>You have normal weight</span><br>`
        }else{
            results.innerHTML += `<span>You're OverWeight</span><br>`
        }
    }
})