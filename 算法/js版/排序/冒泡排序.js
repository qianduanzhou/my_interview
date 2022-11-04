let arr = [55, 10, 1, 5, 88, 90, 77, 22];

function sort(list) {
  list = JSON.parse(JSON.stringify(list));
  for(let i = 0; i < list.length; i ++) {
    for(let j = 0; j < list.length - i - 1; j ++) {
      if(list[j] > list[j + 1]) {
        let t = list[j]
        list[j] = list[j + 1];
        list[j + 1] = t;
      }
    }
  }
  return list;
}

console.log(sort(arr));