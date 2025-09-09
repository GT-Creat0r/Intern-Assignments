const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 3500);
  });
};

console.log("Loading");
console.log("Do something else");
console.log("Load data");

let data = getData();
data.then((value) => {
  console.log(data);
  console.log("Process data");
  console.log("completed");
});
