// Arrow function

// Print odd numebrs

const odd = ()=> {
    var num = [1, 3, 4, 5];
    console.log(num.filter((ele) => ele % 2 !== 0));
};
  
// String to title cap
  
const title = () => {
    var str = ["hello", "world", "fine"];
    console.log(str.map((ele) => ele[0].toUpperCase() + ele.slice(1)));
};
  
// Sum of all num
  
const sumNum = ()=> {
    var num = [1, 4, 7, 8];
    console.log(num.reduce((a, b) => a + b, 0));
};
  
// Print prime number
const prime = () =>{
    var num = [2, 5, 7, 10];
    console.log(
      num.filter((ele) => {
        if (ele == 1 || ele == 0) return false;
        if (ele == 2) return ele;
        for (var i = 3; i <= ele / 2; i++) {
          if (ele % i == 0) return false;
        }
        return ele;
      })
    );
};
  
  // print palindrome
const palindrome =()=> {
    var num = [111, 121, 443, 123];
    console.log(
      num.filter((ele) => {
        var temp = ele;
        var sum = 0;
        while (ele !== 0) {
          var rem = ele % 10;
          sum = sum * 10 + rem;
          ele = parseInt(ele / 10);
        }
        if (temp === sum) return temp;
        else return false;
      })
    );
};

odd();
title();
sumNum();
prime();
palindrome();