function interleave(arr1, arr2) {
  return arr1.reduce( (newArray, element, index) => {
    newArray.push(element);
    newArray.push(arr2[index]);
    return newArray;
  }, []);
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
