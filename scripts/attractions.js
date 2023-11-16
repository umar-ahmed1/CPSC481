function redirect(param) {
    const attractionsHome = 'http://127.0.0.1:5500/pages/attractions-home.html'
    let search = "?attraction=" + param
    window.location.assign(attractionsHome + search);
}