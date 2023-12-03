document.addEventListener('DOMContentLoaded', function () {
    //add event listener to the search input
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        filterAttractions(searchTerm);
    });

    function filterAttractions(searchTerm) {
        const attractions = document.querySelectorAll('.grid-item');
        attractions.forEach(function (attraction) {
            const attractionId = attraction.id.toLowerCase();
            const isVisible = attractionId.includes(searchTerm);
            attraction.style.display = isVisible ? 'flex' : 'none';
        });
    }
});

function redirect(param) {
    const attractionsHome = 'attractions-home.html';
    let search = "?attraction=" + param;
    window.location.href = attractionsHome + search;
}