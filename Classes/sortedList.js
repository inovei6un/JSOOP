class List {
    constructor(arr = []) {
        this.arr = arr.sort((a, b) => a-b);
        this.size = this.arr.length;
    }
    
    add(input) {
        this.arr.push(input)
        this.arr.sort((a, b) => a - b);
        this.size = this.arr.length
    }

    remove(input) {
        if (input < 0 || input >= this.arr.length) {
            throw new Error('Out of range!')
        }
        this.arr.splice(input, 1)
        this.arr.sort((a, b) => a - b);
        this.size = this.arr.length
    }

    get(input) {
        if (input < 0 || input >= this.arr.length) {
            throw new Error('Out of range!')
        }
        return this.arr[input]
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));