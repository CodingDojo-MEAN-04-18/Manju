function zero_negativity(array){
    for(var i=0;i<array.length;i++){
        if (array[i]<0){
            return false;
        }
    }
    return true;
}

console.log(`This array is -ve: ${zero_negativity([1,-2,60])}`);

function is_even(array){
    for(var i=0;i<array.length;i++){
        if (array[i]%2!==0){
            return false;
        }
    }
    return true
}

console.log(`This array is even: ${is_even([10,-2,60])}`);

function how_many_even(array){
    var totEven=0;
    for(var i=0;i<array.length;i++){
        if (array[i]%2===0){
            totEven++;
        }
    }
    return totEven;
}

console.log(`Total number of even numbers in array: ${how_many_even([10,-2,60])}`);




function create_dummy_array(n){
    var array=[];
    for(var i=0;i<n;i++){
        array.push(Math.floor(Math.random()*10))
    }
    return array;
}

var n=10
console.log(`${n} randon numbers in array: ${create_dummy_array(n)}`);

function random_choice(array){
    n=Math.floor(Math.random()*array.length);
    return array[n];
}

var array=[10,4,7,910,43,5]
console.log(`randon numbers in array-->${array}  ${random_choice(array)}`);



