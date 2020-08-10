var idx, searchInput, searchResults = null;
var documents = [];

function renderSearchResults(results) {
    if (results.length > 0) {
        // Reset the search results.
        searchResults.innerHTML = '';

        // Append the results.
        results.forEach(result => {
            // Create the result item.
            var item = document.createElement('div');
            item.className = 'post-short-list';
            item.innerHTML = `
            <header> 
                <h2><a href="${result.ref}">${documents[result.ref].title}</a></h2>
            </header>
            `;
            searchResults.appendChild(item);
        });
    } else {
        searchResults.innerHTML = '<p>No results found.</p>';
    }
}

function registerSearchHandler() {
    // Register the event.
    searchInput.oninput = function(event) {
        // Remove the search results if user empties the search input field.
        if (searchInput.value == '') {
            searchResults.innerHTML = '';
        } else {
            // Get the input value.
            var query = event.target.value;

            // Run the search.
            var results = idx.search('*' + query + '*');

            // Render the results.
            renderSearchResults(results);
        }
    }

    // Set the focus on the search input.
    searchInput.focus();
}

window.onload = function() {
    // Get the DOM elements.
    searchInput = document.getElementById('search-input');
    searchResults = document.getElementById('search-results');

    // Request and index documents.
    fetch('/search/index.json', {method: 'get'})
    .then(result => result.json())
    .then(result => {
        // Index the documents.
        idx = lunr(function() {
            this.ref('url');
            this.field('title');
            this.field('body');

            result.forEach(function(document) {
                this.add(document);
                documents[document.url] = {
                    'title': document.title,
                    'body': document.body,
                };
            }, this);
        });

        // Loads the data and register the handler.
        registerSearchHandler();
    })
    .catch(err => {
        searchResults.innerHTML = `<p>${err}</p>`;
    });
}
