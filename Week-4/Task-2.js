Date.prototype.addHours = function(H) {
    this.setHours(this.getHours() + H);
}

let date = new Date(2022, 10, 3, 12, 38); 
date.addHours(4);
console.log(date);


