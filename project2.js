const form = document.querySelector("form");
const resetBtn = document.querySelector("#reset-btn");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if(height === "" || height < 0 || isNaN(height)) {
        results.innerHTML =`please give a valid ${height}`;
    } else if(weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML =`please give a valid ${weight}`;
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        results.innerHTML = `<span>Your BMI is: ${bmi}</span><br>`;


        let category = "";

        if (bmi < 18.6) {
            category = `<span style="color: #f39c12; font-weight: bold;">You are Underweight</span>`;
        }else if (bmi > 24.9) {
            category = `<span style="color: #e74c3c; font-weight: bold;">You are Overweight</span>`;
        }else {
            category = `<span style="color: #2ecc71; font-weight: bold;">Your weight is Normal</span>`;
        }
        
        results.innerHTML += category;

    }
    
});

resetBtn.addEventListener("click", () => {
    height.value = "";
    weight.value = "";
    results.innerHTML = "";
});