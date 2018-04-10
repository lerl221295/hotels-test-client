// Styles Sheets
import 'angular-material/angular-material.min.css'
import '../style/app.css'
// Modules
import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ngMaterial from 'angular-material'
// Components
import components from './components/components'
// App Component
import { AppComponent } from './app.component'
// Common Components
import common from './common/common'

const root = angular
    .module('angularApp', [
        uiRouter,
        ngMaterial,
        components,
        common
    ])
    .constant('API_URL', 'http://localhost:8000')
    .config(($mdThemingProvider, $compileProvider) => {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo');
        //$compileProvider.debugInfoEnabled(false);
    })
    .config(function($mdIconProvider) {
        $mdIconProvider.fontSet('md', 'material-icons');
    })
    .component('app', AppComponent)
    .name;

export default root;  