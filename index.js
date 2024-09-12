// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
];



// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    // Add preferences for Drax, Rocket, and Groot
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop",
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    return Object.keys(guardians).map(guardian => {
        const preferredGenre = guardians[guardian];
        const playlist = songs.filter(song => song.genre === preferredGenre);
        return { guardian, playlist };
    });
}


// Function to display playlists on the webpage
function displayPlaylists() {
    const playlistsContainer = document.getElementById("playlists");
    const playlists = generatePlaylist(guardians, songs)


    playlists.forEach(({ guardian, playlist }) => {
        // Create a section for each Guardian
        const guardianSection = document.createElement("div");
        guardianSection.innerHTML = `<h2>${guardian}'s Playlist:</h2>`;
        guardianSection.classList.add("playlist");

        const songList = document.createElement("ul");
        songList.classList.add("song")

        // Create list items for each song in the playlist
        playlist.forEach(song => {
            const listItem = document.createElement("li");
            listItem.textContent = `${song.title} by ${song.artist}`;
            songList.appendChild(listItem);
            listItem.classList.add("song-title")
        
        });

        guardianSection.appendChild(songList);
        playlistsContainer.appendChild(guardianSection);
    });
}

// Call the function to display the playlists
displayPlaylists();


