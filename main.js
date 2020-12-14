// const users = document.querySelector('#users')

const link ='https://spreadsheets.google.com/feeds/cells/1hjyvgiGhJ7FPfcgy61CSfblgtmHs5DViKD7ARq3G8Gk/1/public/full?alt=json'

fetch(link).then((response) => {
  return response.json();
})
.then((users) => {

  const result = users.feed.entry
  console.log(result)
  displayUsersAsATable(result)
}).catch((e)=>{
  console.error('something wrong')
  console.log(e)

})


function displayUsersAsATable(users) {
  let usersDiv = document.querySelector("#users");

  let table = document.createElement("table");

  users.forEach(function (currentUser) {
    console.log(currentUser)
      let row = table.insertRow();
      let nameCell = row.insertCell();
      nameCell.innerHTML = currentUser.content.$t;
  });

  usersDiv.appendChild(table);
}