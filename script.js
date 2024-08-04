const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

const rainbow = document.querySelectorAll('span')

console.log(rainbow);
console.log(colors);


for (let i = 0; i< colors.length; i++) {
    rainbow[i].style.color = colors[i]
}

