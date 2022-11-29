/**
 * 
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.  
 */
function getList() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        let potentialFail = Math.round(Math.random() * 100) < 10;
        if (potentialFail) {
          resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"])
        } else {
          reject({ success: false, message: "Failed to get list of hobbits." })
        }
        
      }, 10)
  })
}

let feedbackPara = document.querySelector("#error");
let ul = document.querySelector("#list");

getList()
  .then((list) => {
    list.forEach((hobbit) => {
      let li = document.createElement("li");
      li.textConent = hobbit;
      ul.appendChild(li);
    });
  })
  .catch((err) => {
    console.error(err)
    feedbackPara.textContent = err.message;
  });