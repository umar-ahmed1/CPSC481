function redirect(param) {
    const attractionsHome = 'attractions-home.html'
    let search = "?attraction=" + param;
    window.location.href = attractionsHome + search, '_blank'
}
