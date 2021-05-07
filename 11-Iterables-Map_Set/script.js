'use strict';
//=================== 🔴 lecture part =======================
let obj = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  next() {
    console.log('here');
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};
console.log(obj);
for (const key of obj) {
  console.log(key);
}

//map

//map.set()
//map.get()
//map.has()
//map.delete()
//map.size()
//map.clear()
//map.entries()
//map.keys()
//map.values()

const set = new Set();
const obj1 = {

}
console.log(set.add(obj1));

//==================== 👩🏻‍💻 coding challenge ================