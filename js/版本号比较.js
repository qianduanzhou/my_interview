function compareVersion(version1, version2) {
  const arr1 = version1.split('.');
  const arr2 = version2.split('.');
  const length1 = arr1.length;
  const length2 = arr2.length;
  let min = Math.min(length1, length2);
  let i = 0;
  for (i; i < min; i++) {
    let num1 = parseInt(arr1[i]);
    let num2 = parseInt(arr2[i]);
    if (num1 < num2) return -1;
    else if (num1 > num2) return 1; 
  }
  if (length1 > length2) {
    for(let j = i; j < length1; j ++) {
      if (parseInt(arr1[j]) > 0) return 1;
    }
    return 0;
  } else {
    for(let j = i; j < length2; j ++) {
      if (parseInt(arr2[j]) > 0) return -1;
    }
  }
  return 0;
}
console.log(compareVersion('1.0.1', '1.00,1')) // 0