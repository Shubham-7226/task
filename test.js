const obj_1 = {
  key_1: "value_1",
  key_2: "value_2",
  key_3: "value_3",
  key_4: "value_4",
  key_5: "value_5",
};

// for in
for (let key in obj_1) {
  console.log(key, obj_1[key]);
}

const count = Object.keys(obj_1);
console.log(count.length);

const values = Object.values(obj_1);
console.log(values);

const entities = Object.entries(obj_1);
console.log(entities);

// Merge two objects
const obj_2 = {
  key_6: "value_6",
  key_7: "value_7",
  key_8: "value_8",
  nestedObj: {
    name: "Hiren Panchal",
  },
};

const mergedObj = {
  ...obj_1,
  ...obj_2,
  extraKey: "extraValue",
  key_6: "new Value",
};
console.log(mergedObj);

// Destructure

/* OLD Method */
/* const key_6 = obj_2.key_6;
const key_7 = obj_2.key_7;
const key_8 = obj_2.key_8; */

let { key_6: address, key_7, key_8, nestedObj } = obj_2;
console.log(address, "\n", key_7, "\n", key_8, "\n");

key_7 = 5;
console.log(address, "\n", key_7, "\n", key_8, "\n");

nestedObj.name = "javascript";
console.log("===obj_2===", obj_2);

// Using functions inside object
const obj_3 = {
  l: 5,
  w: 7,
  area: function () {
    return this.l * this.w;
  },
};
console.log(obj_3.area());

obj_3.l = 10;
console.log(obj_3.area());

// ============Copy Of Object============

// Drawback of JSON.parse(JSON.stringify())
const obj_4 = JSON.parse(JSON.stringify(obj_3));
console.log(obj_4);

const copyObject = (object) => {
  let cpObj = {};
  let key, value;
  if (typeof object !== "object" || object === null) {
    return object;
  }

  for (key in object) {
    value = object[key];
    cpObj[key] = copyObject(value);
  }
  return cpObj;
};

console.log(copyObject(obj_3));