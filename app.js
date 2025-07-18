// This script fetches and displays user data from JSONPlaceholder.

const fetchUserButton = document.getElementById('fetchUserBtn');
const displayUserData = document.getElementById('userData');

const _API = 'https://jsonplaceholder.typicode.com/users';

fetchUserButton.addEventListener('click', function (event) {
  async function getUserData() {
    try {
      displayUserData.innerHTML = '';
      displayUserData.textContent = 'Loading user data...';
      const response = await fetch(_API);

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const data = await response.json();

      let name = data[0].name;
      let email = data[0].email
      let companyName = data[0].company.name;

      displayUserData.innerHTML = '';

      const nameParagraph = document.createElement('p');
      const emailParagraph = document.createElement('p');
      const companyNameParagraph = document.createElement('p');

      nameParagraph.textContent = `Name: ${name}`;
      emailParagraph.textContent = `Email: ${email}`;
      companyParagraph.textContent = `Company: ${companyName}`;

      displayUserData.appendChild(nameParagraph);
      displayUserData.appendChild(emailParagraph);
      displayUserData.appendChild(companyNameParagraph);
    }

    catch (error) {
      displayUserData.innerHTML = <p class='error'>Failed to load user data. Error : ${error.message}</p>;
    } finally {
      console.log("Fetch attempt finished.");
    }

  }


  getUserData();
});