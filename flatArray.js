
const flatArray = (items) => {
    const flat = [];
  
    for (item of items) {
        if (Array.isArray(item)) {
            flat.push(...flatArray(item));
        } else {
            flat.push(item);
        }
    }
  
    return flat;
}



/********************** Driver Code *********************/
console.log(flatArray([1,2,[2,[3,[1,2],2]],2,4,2]));