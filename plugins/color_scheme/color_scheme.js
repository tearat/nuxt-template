export default ({
    load() {
        return [ 'cold night', 'rainy morning', 'evergreen' ];
    },
    set(context) {
        var color_scheme = context.$cookie.get('color_scheme');
        if ( color_scheme == 'dark' ) {
            document.getElementsByTagName("BODY")[0].style.backgroundColor = '#050505';
        }
        if ( color_scheme == 'light' ) {
            document.getElementsByTagName("BODY")[0].style.backgroundColor = '#ddd';
        }
    }
})