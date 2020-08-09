const menu = {
  _courses:{
    appetizers:[],
    mains:[],
    desserts:[]
  },
/*
  get appetizers(){

  },
  set appetizers(appetizerIn){

  },
    get mains(){

  },
  set mains(mainIn){

  },
    get desserts(){

  },
  set desserts(dessertIn){

  },
  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  */
  addDishToCourse(courseName,dishName,dishPrice ){
    const dish = {
      name: dishName,
      price: dishPrice
    }
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse: function (courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random()* dishes.length);
    //console.log(dishes[randomIndex]);
    return dishes[randomIndex];
  },
   generateRandomMeal () {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal suggested meal is ${appetizer.name}, ${main.name}, and ${dessert.name} with the total price of $${totalPrice}.`;
  }
}
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Caesar Salad with Chicken', 8.25);
menu.addDishToCourse('appetizers', 'Greek Salad', 4.25);
menu.addDishToCourse('mains', 'Grilled Salmon', 14.25);
menu.addDishToCourse('mains', 'Grilled Veal', 16.25);
menu.addDishToCourse('mains', 'Grilled LampChop', 21.25);
menu.addDishToCourse('desserts', 'Choc Musse', 4.25);
menu.addDishToCourse('desserts', 'Choc CheeseCake', 5.25);
menu.addDishToCourse('desserts', 'Tres Latche', 7.25);
//console.log(menu._courses);
const meal= menu.generateRandomMeal();
console.log(meal);
