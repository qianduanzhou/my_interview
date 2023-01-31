let arr = [55, 10, 1, 5, 88, 90, 77, 22];
function sort(list) {
  list = JSON.parse(JSON.stringify(list));
  let quicksort = (left, right) => {
    if (left > right) return;
    let temp = list[left], t, i = left, j = right;
    while(i != j) {
      while(list[j] >= temp && i < j) j --;
      while(list[i] <= temp && i < j) i ++;
      if(i < j) {
        t = list[i];
        list[i] = list[j];
        list[j] = t;
      } 
    }
    list[left] = list[i];
    list[i] = temp;
    quicksort(left, i - 1);
    quicksort(j + 1, right);
  }
  quicksort(0, list.length - 1);
  return list;
}
console.log(sort(arr));