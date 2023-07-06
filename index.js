/*myEach:
calls alert with each element passed;
calls alert properly on object values;
returns the original collection.*/

function myEach(collection, alert) {
  const result = Array.isArray(collection)

  if(result) {
    collection.forEach(alert)
  }
  else {
    Object.values(collection).forEach(alert)
  }
  return collection
}
//myEach([1, 2, 3, 4], (num) => num)

/*myMap:
does not modify the original array or original object;
successfully returns a correctly populated array from modified object values.*/

function myMap(collection, callback) {
  let newArr
  const result = Array.isArray(collection) 
  
  if(result) {
    newArr = collection.map(callback)
  }
  else {
    newArr = Object.values(collection).map(callback)
  }
  return newArr
}
//myMap([1, 2, 3], (num) => num * 10)

/*myReduce:
returns a single reduced value when passed an initial value;
returns a single reduced value when not passed an initial value;
does not modify the original array or object.*/

function myReduce(collection, callback, acc) { 
  const result = Array.isArray(collection)

  if(result && acc > 0) {
    return collection.reduce(callback, acc)
  }
  else if(result) {
    return collection.reduce(callback)
  }
  else if(acc > 0) {
    return Object.values(collection).reduce(callback, acc)
  }
  else {
    return Object.values(collection).reduce(callback)
  }
}
//myReduce([1, 2, 3], (acc, value) => acc + value, 10)

/*myFind:
returns the value if found;
does not traverse the whole array if the value is found early;
returns undefined if the value is not present.*/

function myFind(collection, predicate) {
  const result = Array.isArray(collection)
  if(result) {
    return collection.find(predicate)
  }
  else {
    return Object.values(collection).find(predicate)
  }
}
//myFind([1, 2, 3, 4, 5, 6], (num) => num % 2 == 0)


/*myFilter:
correctly filters for values that the callback evaluates as true;
correctly returns an empty array if no matching values are found.*/

function myFilter(collection, predicate) {
  const result = Array.isArray(collection)

  if(result) {
    return collection.filter(predicate)
  }
  else {
    return Object.values(collection).filter(predicate)
  }
}
//myFilter({one: 1, three: 3, five: 5}, (num) => num % 2 == 0)

/*mySize:
correctly returns the size of the collection when an array is passed;
correctly returns the size of the collection (amount of keys) when an object is passed.*/

function mySize(collection) {
  const result = Array.isArray(collection)

  if(result) {
    return collection.length
  }
  else {
    return Object.values(collection).length
  }
}
//mySize({one: 1, two: 2, three: 3})

/*myFirst:
returns the first element of the collection;
returns the first n elements of the collection when the second optional argument (n) is provided.*/

function myFirst(array, n) {
  if(n == null) {
    return array[0]
  }
  else {
    return array.slice(0, n)
  }
}
//myFirst([5, 4, 3, 2, 1], 3)

/*myLast:
returns the last element of the collection;
returns the last n elements of the collection when the second optional argument (n) is provided.*/

function myLast(array, n) {
  if(n == null) {
    return array[array.length - 1] 
  }
  else {
    return array.slice(-n)
  }
}
//myLast([5, 4, 3, 2, 1])

function mySortBy(array, callback) {
  return array.sort(callback)
}
//mySortBy([50, 4, 3, 25, 100], (a, b) => a - b)

function myKeys(obj) {
  return Object.keys(obj)
}
//myKeys({one: 1, two: 2, three: 3})

function myValues(obj) {
  return Object.values(obj)
}
//myValues({one: 1, two: 2, three: 3})






















