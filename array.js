// Find the largest element of an Array :
function largestElement(numbers){
    let largest = 0;
    for(let i= 0;i <numbers.length; i++){
        const element =numbers[i];
        if(element >largest){
            largest =element;
        }
    }
    return largest;
}
const ages = [12,54,67,7,9,38];
const oldest = largestElement(ages);
console.log('oldest =', oldest);