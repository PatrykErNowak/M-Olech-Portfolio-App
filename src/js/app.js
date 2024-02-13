import {urlRouting} from './other/routing.js'
import {animation} from './other/animation.js'

const mainContent = document.querySelector('#root');

urlRouting(mainContent);

// fire animation when user enter on page
animation();
