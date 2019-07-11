const nameInput = document.getElementById('nameInput');
const urlInput = document.getElementById('urlInput');

let saveBookmark = (e) => {
    siteName = nameInput.value;
    siteUrl = urlInput.value;
    nameInput.value = "";
    urlInput.value = "";

    let bookmark = {
        name: siteName,
        url: siteUrl,
    }

    //Local storage
    if (localStorage.getItem('bookmarks') === null) {
        let bookmarks = [];
        bookmarks.push(bookmark)
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    }

    e.preventDefault();
    fetchBookmarks();
}

let fetchBookmarks = () => {
    if (localStorage.getItem('bookmarks') != null) {
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        let bookmarksResults = document.getElementById('bookmarksResults');
        bookmarksResults.innerHTML = "";
        bookmarks.forEach(bookmark => {
            console.log(bookmark.name);
            console.log(bookmark.url);
            bookmarksResults.innerHTML += `<div class="card mx-auto flex-row justify-content-around align-items-center p-3 m-2 w-75 border-dark">
            <h2>${bookmark.name}</h2>
            <div class="buttons-container">
                <a href=${bookmark.url === "" ? "#" : bookmark.url
                } class= "btn btn-dark" > Visit</a >
        <button class="btn border border-dark">Delete</button>
            </div > </div`
        });
    }
}

window.addEventListener('load', fetchBookmarks);
document.getElementById('form').addEventListener('submit', saveBookmark);
