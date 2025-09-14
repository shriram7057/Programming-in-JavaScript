function Palindrome(num)
{
    if(num<0) return false;

    let originslNum=num;
    let reverseNum=0;
    while(num>0)
    {
        const lastDigit=num%10;
        reverseNum=reverseNum*10+lastDigit;
        num=Math.round(num/10);      
    }
    return originslNum===reverseNum;
}
const number= 156921;
const result = Palindrome(number);

console.log("The Number is:"+number);
console.log("Is the number a Palindrome?"+result);