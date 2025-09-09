import { apiCall } from "./b.js";  // MAKE SURE EXTENSION '.js' is INCLUDED

//since apiCall is async, we must handle it with await or .then
const displayData = async () => {
  const data = await apiCall();
  document.getElementById("demo").innerHTML= JSON.stringify(data);
};

displayData();