// Defines a Smoothie class that encapsulates the properties and methods of a smoothie
class Smoothie {
    constructor(name, size, fruits, base, extras) {
      this.name = name; // Initializes the name of the smoothie
      this.size = size; // Initializes the size of the smoothie
      this.fruits = fruits; // Initializes the fruits used in the smoothie
      this.base = base; // Initializes the base used in the smoothie
      this.extras = extras; // Initializes the extras used in the smoothie
    }
  
    // Calculates the price of the selected smoothie size
    getSizePrice() {
      const sizePrices = {
        small: 4.0,
        medium: 5.0,
        large: 6.0,
      };
      return sizePrices[this.size] || 0;
    }
  
    // Calculates the price of the selected fruits
    getFruitPrice() {
      return this.fruits && this.fruits.length ? this.fruits.length * 0.5 : 0;
    }
  
    // Calculates the price of the selected base
    getBasePrice() {
      const basePrices = {
        water: 0,
        milk: 0.25,
        almondMilk: 0.5,
      };
      return basePrices[this.base] || 0;
    }
  
    // Calculates the price of the selected extras
    getExtrasPrice() {
      const extrasPrices = {
        protein: 1.0,
        chiaSeeds: 0.75,
        nuts: 0.75,
      };
      return extrasPrices[this.extras] || 0;
    }
  
    // Calculates the total price of the smoothie based on its components
    getTotalPrice() {
      return (
        this.getSizePrice() +
        this.getFruitPrice() +
        this.getBasePrice() +
        this.getExtrasPrice()
      );
    }
  
    // Returns a string that describes the smoothie based on its properties
    getDescription() {
      const fruitList = this.fruits && this.fruits.join(", ");
      return `${this.name}'s ${this.size} smoothie with ${fruitList}, ${
        this.base
      } base, and ${this.extras || "no"} extras.`;
    }
  }
  
  // Adds an event listener to the order button to create a new smoothie instance and display the order summary
  document.getElementById("order-btn").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const size = document.getElementById("size").value;
    const fruitInputs = document.querySelectorAll('input[name="fruits"]:checked');
    const fruits = Array.from(fruitInputs).map((input) => input.value);
    const base = document.getElementById("base").value;
    const extras = document.getElementById("extras").value;
  
    // Creates a new smoothie instance with the selected properties
    const smoothie = new Smoothie(name, size, fruits, base, extras);
  
    // Displays the order summary
    displayOrderSummary(smoothie.getDescription(), smoothie.getTotalPrice());
  
    // Sets the smoothie icon color based on the selected fruit
    setSmoothieColor(getSmoothieColor(fruits));
  });
  
  // Displays the order summary with the smoothie description and total price
  function displayOrderSummary(summary, totalPrice) {
    const orderSummary = document.getElementById("order-summary");
    orderSummary.innerHTML = `${summary}<br>Total price: $${totalPrice.toFixed(
      2
    )}`;
  }
  
  // Returns the color of the smoothie icon based on the selected fruit
  function getSmoothieColor(fruits) {
    const fruitColors = {
      strawberry: "#ff4d4d",
      banana: "#ffd24d",
      blueberry: "#4d4dff",
      mango: "#ff944d",
    };
    return fruitColors[fruits[0]] || "#ff0";
  }
  
  function setSmoothieColor(color) {
    const smoothieIcon = document.getElementById("smoothie-icon");
  
    // Sets the fill color of the smoothie icon based on the selected fruit color or a default color
    if (smoothieIcon) {
      smoothieIcon.setAttribute("fill", color);
    }
  }
  