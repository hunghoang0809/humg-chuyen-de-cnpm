//bai 1
function countChangesToPalindrome(str) {
  function isPalindrome(s) {
    return s === s.split('').reverse().join('');
  }

  // Hàm tính số lần thay đổi cần thiết để biến chuỗi thành chuỗi đối xứng
  function countChanges(s) {
    let changes = 0;
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
      if (s[i] !== s[s.length - 1 - i]) {
        changes++;
      }
    }
    return changes;
  }

  let changes = 0;

  if (!isPalindrome(str)) {
    changes = countChanges(str);
  }

  return changes;
}

const inputStr = prompt("Nhập chuỗi kí tự: ");
const changesNeeded = countChangesToPalindrome(inputStr);
console.log(`Số lần thay đổi ít nhất để thành chuỗi đối xứng là: ${changesNeeded}`);

//bai 2
function checkDuplicateArr(arr) {
     const seen = new Set();

  for (const value of arr) {
    if (seen.has(value)) {
      return true;
    }
    
    seen.add(value);
  }

  return false;
}

// Ví dụ sử dụng
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 2, 4];

console.log(checkDuplicateArr(arr1)); // false
console.log(checkDuplicateArr(arr2)); // true













