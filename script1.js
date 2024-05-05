// Anonymous function and IIFE

// Print odd numebrs

(function () {
  var num = [1, 3, 4, 5];
  console.log(num.filter((ele) => ele % 2 !== 0));
})();

// String to title cap

(function () {
  var str = ["hello", "world", "fine"];
  console.log(str.map((ele) => ele[0].toUpperCase() + ele.slice(1)));
})();

// Sum of all num

(function () {
  var num = [1, 4, 7, 8];
  console.log(num.reduce((a, b) => a + b, 0));
})();

// Print prime number
(function () {
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
})();

// print palindrome
(function () {
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
})();

// find median of two array.
(function () {
  var arr1 = [1, 2, 3, 4, 89];
  var arr2 = [5, 6, 7, 8, 9];
  var mer = [];
  var i = 0,
    j = 0;
  var n = arr1.length,
    m = arr2.length;
  while (i < n && j < m) {
    if (arr1[i] <= arr2[j]) {
      mer.push(arr1[i]);
      i++;
    } else {
      mer.push(arr2[j]);
      j++;
    }
  }
  while (i < n) {
    mer.push(arr1[i]);
    i++;
  }
  while (j < n) {
    mer.push(arr1[j]);
    j++;
  }
  var total = mer.length;
  if (total % 2 == 0) {
    console.log((mer[total / 2 - 1] + mer[total / 2]) / 2);
  } else {
    console.log(mer[Math.floor(total / 2)]);
  }
})();

// remove duplicate
(function () {
  var num = [1, 2, 2, 5, 6, 7, 7];
  console.log(num.filter((ele, index, array) => array.indexOf(ele) === index));
})();


// rotate k times
(function(){
    var num = [1,2,3,4,5];
    const reverse = (arr, i, n)=>{
        while(i<n/2) {
            var temp = arr[i];
            arr[i] = arr[n-i-1];
            arr[n-i-1] = temp;
            i++;
        }
    }
    var k = 4;
    reverse(num,0,k);
    reverse(num,k,num.length);
    reverse(num,0,num.length);
    console.log(num);
})();