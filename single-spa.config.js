import {registerApplication, start} from 'single-spa'

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.startsWith(prefix);
    }
}

registerApplication(
    'angularJS',
    () => import ('./src/angularJS/angularJS.app.js'),
    () => true
);

registerApplication(
    'navBar',
    () => import('./src/navBar/navBar.app.js').then(module => module.navBar),
    () => true
);

registerApplication(

    // Name of our single-spa application
    'home',
    // Our loading function
    () => import('./src/home/home.app.js'),
    // Our activity function
    () => location.pathname === "" ||
        location.pathname === "/" ||
        location.pathname.startsWith('/home')
);
start()
