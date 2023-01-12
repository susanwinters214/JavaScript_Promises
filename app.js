
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 2;
      if (!potentialFail) {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      } else {
        reject({ success: false, message: "Failed to get list of hobbits." });
      }
    }, 2);
  });
}

let errorPara = document.querySelector("#error");
let listUl = document.querySelector("#list");

getList()
  .then((list) => {

    list.forEach((item) => {
      let li = document.createElement("li");
      li.textContent = item;
      listUl.appendChild(li);
    });
  })
  .catch((err) => {
    errorPara.textContent = err.message;
  });