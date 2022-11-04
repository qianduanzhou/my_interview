let func = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(111)
      }, 3000);
  })
}
let func2 = async () => {
  setTimeout(async () => {
    return await func();
  }, 3000);
}
func2().then(res => {
  console.log(res);
})