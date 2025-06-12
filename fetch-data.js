async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');


    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error (`Network response was not ok: ${response.status}`);
        }
        const users = await response.json ();

        dataContainer.innerHTML = '';
        const userList = document.createElement('ul')

        users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.name;
        userList.appendChild(li)
    });

    dataContainer.appendChild(userList)

        
    } catch (error) {
        console.error('Error:', error)
        dataContainer.innerHTML = '';
        dataContainer.innerHTML = '<div class="error">Failed to load user data. Please try again later.</div>';
        
    }

}
document.addEventListener("DOMContentLoaded", () => {
    fetchUserData();
});
