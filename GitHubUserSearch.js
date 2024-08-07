async function getUser() {
    const username = document.getElementById('username').value;
    if (!username) return;

    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
        document.getElementById('user-card').classList.remove('d-none');
        document.getElementById('profile-img').src = data.avatar_url || 'default-profile.png';
        document.getElementById('user-name').textContent = data.name || 'No name available';
        document.getElementById('user-username').textContent = data.login || 'No username available';
        document.getElementById('user-link').href = `https://github.com/${data.login}`;
        document.getElementById('user-bio').textContent = data.bio || 'No bio available';
        document.getElementById('github-link').href = `https://github.com/${data.login}`;
        document.getElementById('user-repos').textContent = data.public_repos;
        document.getElementById('user-followers').textContent = data.followers;
        document.getElementById('user-following').textContent = data.following;

        // Handle Twitter
        const twitterElement = document.getElementById('user-twitter');
        if (data.twitter_username) {
            twitterElement.textContent = `@${data.twitter_username}`;
            twitterElement.href = `https://x.com/${data.twitter_username}`;
        } else {
            twitterElement.textContent = 'Twitter is Not available';
            twitterElement.href = '#';
        }

        // Handle Company
        const companyElement = document.getElementById('user-company');
        companyElement.textContent = data.company || 'Company is Not available';
        companyElement.href = data.company ? `https://www.example.com/${data.company}` : '#';

        // Handle Location
        const locationElement = document.getElementById('user-location');
        locationElement.textContent = data.location || 'Location is Not available';
        locationElement.href = data.location ? `https://www.google.com/maps/${data.location}` : '#'; 

    } else {
        alert('User not found');
    }
}

function closeMe() {
    document.getElementById('user-card').classList.add('d-none');
}
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    const themeButton = document.getElementById('theme-toggle');

    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        themeIcon.classList.remove('icon-moon');
        themeIcon.classList.add('icon-sun');
        themeButton.textContent = ' Light';
    } else {
        body.classList.add('light-theme');
        themeIcon.classList.remove('icon-sun');
        themeIcon.classList.add('icon-moon');
        themeButton.textContent = ' Dark';
    }
}

