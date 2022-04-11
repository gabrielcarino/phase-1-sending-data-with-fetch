// Add your code here
function submitData(nameInput, emailInput) {
  const user = {
    name : `${nameInput}`,
    email : `${emailInput}`,
  }
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(user),
  };
  return fetch('http://localhost:3000/users', configObj)
  .then(response => response.json())
  .then(object => {
    const body = document.querySelector('body');
    body.textContent = object.id
  })
  .catch(error => {
    const body = document.querySelector('body');
    console.log(error.message);
    body.textContent = error.message;
  })
};