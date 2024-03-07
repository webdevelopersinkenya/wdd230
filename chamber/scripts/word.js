const url = 'data/members.json'; // Path to your JSON file
const wardInfo = document.getElementById('wardInfo');

const getMembersData = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data.wardInformation.familyMembers);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const displayMembers = (members) => {
    members.forEach((member) => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member');

        const img = document.createElement('img');
        img.src = 'path_to_default_image.jpg'; // Replace with the path to your default image
        img.alt = `${member.name} Image`;

        const name = document.createElement('h2');
        name.textContent = member.name;

        const birthdate = document.createElement('p');
        birthdate.textContent = `Birthdate: ${member.birthdate}`;

        const gender = document.createElement('p');
        gender.textContent = `Gender: ${member.gender}`;

        // Append all details to the member card
        memberCard.appendChild(img);
        memberCard.appendChild(name);
        memberCard.appendChild(birthdate);
        memberCard.appendChild(gender);

        // Append the member card to the container
        wardInfo.appendChild(memberCard);
    });
};

// Call the function to fetch and display member data
getMembersData();
