function redirect(param) {
    const attractionsHome = 'attractions-home.html'
    let search = "?attraction=" + param
    window.open(attractionsHome + search, '_blank');
}