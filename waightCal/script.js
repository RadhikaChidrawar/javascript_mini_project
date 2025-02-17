const form = document.querySelector('form')

// const height = parseInt(document.querySelector('#height').value) // [ if we tack these val here then it give empty val in return]

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    // result.innerText='radhika';
    
    if(height === '' || height < 0 || isNaN(height) ){
        result.innerHTML = `plase give valid height ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight) ){
        result.innerHTML = `plase give valid weight ${weight}`;
    }else{
        const bmi = (weight / ((height*height) / 10000)).toFixed(2);
        // show result
        result.innerHTML = `<spam>${bmi}</spam>`;
    }
})

// const bmi = (weight/(height*height)/10000)(.toFixed(2);