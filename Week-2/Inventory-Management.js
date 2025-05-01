function Item(name, category, price, stock) {
    this.name = name || "Unnamed Item";
    this.category = category || "Uncategorized";
    this.price = price || 0;
    this.stock = stock || 0;

    this.updateStock = newStock => this.stock = newStock || 0;
    this.applyDiscount = discount => this.price *= (1 - (discount || 0));
}

function createItem(name, category, price, stock) {
    return new Item(name, category, price, stock);
}

const inventory = {
    items: [],
    addItem: function(item) {
        this.items.push(item);
    },
    removeItem: function(itemName) {
        const name = itemName || "";
        this.items = this.items.filter(item => (item.name || "") !== itemName);
    },
    getItem: function(itemName) {
        const name = itemName || "";
        return this.items.find(item => (item.name || "") === name);
    },
    filterItems: function(predicate) {
        return this.items.filter(predicate);
    },
};

const item1 = createItem("Laptop", "Electronics", 1200, 10);
const item2 = createItem("Phone", "Electronics", 800, 20);
const item3 = createItem("Shoes", "Fashion", 100, 50);
inventory.addItem(item1, item2, item3);

item2.applyDiscount(0.1); // applied 10% discount 

const electronics = inventory.filterItems(item => item.category === "Electronics");
console.log(`Items under Electronics category: ${electronics.map(item => item.name).join(", ")}`);

inventory.removeItem("Phone");
console.log(inventory.getItem("Phone")); // should return undefined

