function isPalindrome(num) {
  let orgnum = num;
  let reverse_num = 0;
  while (num > 0) {
    reverse_num = reverse_num * 10 + digit;
    num = Math.floor(num / 10);
  }
  return orgnum === reverse_num;
}
let number = parseInt(prompt("enter a no:-"));
if (isPalindrome(num)) {
  alert("this is a palindrome number");
} else {
  alert("not a palindrome number");
}
