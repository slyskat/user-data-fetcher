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

      displayUserData.innerHTML = '';

      const nameParagraph = document.createElement('p');
      const emailParagraph = document.createElement('p');

      nameParagraph.textContent = `Name: ${name}`;
      emailParagraph.textContent = `Email: ${email}`;

      displayUserData.appendChild(nameParagraph);
      displayUserData.appendChild(emailParagraph);
    }

    catch (error) {
      console.log(error);
      console.error("Error details:", error.message);
    } finally {
      console.log("Fetch attempt finished.");
    }

  }


  getUserData();
});