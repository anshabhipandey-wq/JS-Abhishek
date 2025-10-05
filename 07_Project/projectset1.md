# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

``` javascript
console.log("abhishek");
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click', function(event){
    console.log(event);
    console.log(event.target);
    if(event.target.id === 'grey'){
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === 'white'){
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === 'blue'){
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === 'yellow'){
      body.style.backgroundColor = event.target.id;
    }
  });
});

```
## Project 2 solution 

```javascript
const form = document.querySelector('form');
// this usecase will give empty
// const height = parseInt(document.querySelector('#hieght').value);


form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight/ ((height*height)/1000)).toFixed(2);
    let category = '';

    if (bmi < 18.6) {
      category = 'Under Weight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = 'Normal Range';
    } else {
      category = 'Overweight';
    }
    // show the results 
    results.innerHTML = `<span>${bmi}</span>
    <p><strong>BMI Weight Guide:</strong></p>
    <p>Under Weight = Less than 18.6</p>
    <p>Normal Range = 18.6 and 24.9</p>
    <p>Overweight = Greater than 24.9</p>
    <h4>You are in: <span style="color:blue">${category}</span></h4>`;
  }
});
```