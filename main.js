// const users = document.querySelector('#users')

const link ='https://script.googleusercontent.com/macros/echo?user_content_key=rErrEIkpBrTS4k-OlPBl_DXcHN1GlV-GnIqOsWe2ph3GXsWhUYTeZDz4lqBdBYl7WsPjdtqi8Jat4KDhcB7MdTz7wIPxM62em5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHjnEmpr0NqN9j6CApA-JXQuZrhdnGnFgWbEgpErwrP7eA-aIGFrl8RZkbDMR_ovL8cV1-fvH3SfvJsw0wqpxiI&lib=MNHZN0sYz85P1xxDkZz2XELVkUTpHj_7Y'



fetch(link).then((response) => {
  return response.json();
})
.then((data) => {

  displayUsersAsATable(data)
}).catch((e)=>{
  console.error('something wrong')
  console.log(e)

})



function displayUsersAsATable(users) {

  let usersDiv = document.querySelector("#users");

  // usersDiv.innerHTML = `<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
  const spinner = document.querySelector('.lds-spinner')
  let table = document.createElement("table");

  users.user.forEach( (user) =>{
      let row = table.insertRow();
      let nameCell = row.insertCell();
      nameCell.innerHTML = user.name;
      let winningCell = row.insertCell();
      winningCell.innerHTML = user.winning;
  });

  
  usersDiv.appendChild(table);
    spinner.style.display='none'
}