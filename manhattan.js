function manhattan(streetA, avenueA, streetB, avenueB)
{
    return Math.abs(streetB - streetA) + Math.abs(avenueB - avenueA);
}

console.log(manhattan(1, 1, 2, 2)); 
console.log(manhattan(1, 1, 1, 1)); 
console.log(manhattan(5, 4, 3, 2)); 