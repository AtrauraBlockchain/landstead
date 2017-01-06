import angular from 'angular';
import $ from 'jquery';

// Import our app config files
import constants from './config/app.constants';
import appConfig from './config/app.config';
import appRun from './config/app.run';

// Import Angular modules
import 'angular-ui-router';
import 'angular-animate';
import 'angular-sanitize';
import 'ng-toast';
import 'ngstorage';
import 'angular-translate';
import 'angular-chart.js';

// Testing
import 'angular-mocks';

// Import our templates file (generated by Gulp)
import './config/app.templates';

// Import our app functionalities
import './layout';
import './components';
import './filters';
import './services';

// Import our app modules
import './modules/home';
import './modules/dashboard';
import './modules/signup';
import './modules/login';
import './modules/languages';
import './modules/transferTransaction';
import './modules/portal';
import './modules/apostille';
import './modules/account';
import './modules/multisignature';
import './modules/namespaces';
import './modules/mosaics';
import './modules/explorer';
import './modules/importanceTransfer';
import './modules/changelly';
import './modules/faq';
import './modules/landstead';
//import './modules/myModule';
import './modules/transactions';


// Create and bootstrap application
const requires = [
    'ui.router',
    'templates',
    'app.layout',
    'app.components',
    'app.filters',
    'app.home',
    'app.dashboard',
    'app.transferTransaction',
    'app.createMultisig',
    'app.editMultisig',
    'app.namespaces',
    'app.createMosaic',
    'app.editMosaic',
    'app.portal',
    'app.explorerHome',
    'app.explorerApostilles',
    'app.explorerNamespacesMosaics',
    'app.accountsExplorer',
    'app.signup',
    'app.login',
    'app.services',
    'app.faq',
    'app.Landstead',
    'app.transactions',
    'app.account',
    'app.createApostille',
    'app.auditApostille',
    'app.apostilleHistory',
    'app.apostilleMessage',
    'app.transferApostille',
    'app.updateApostille',
    'app.importanceTransfer',
    'app.multisigImportanceTransfer',
    'ngAnimate',
    'ngSanitize',
    'ngToast',
    'ngStorage',
    'chart.js',
    'pascalprecht.translate',
    'app.lang',
    'app.changelly'
];

window.$ = window.jQuery = $;

// Load twitter bootstrap with require or jQuery is not defined
require('bootstrap');

// Mount on window
window.app = angular.module('app', requires);

angular.module('app').constant('AppConstants', constants);
angular.module('app').config(appConfig);
angular.module('app').run(appRun);

angular.bootstrap(document, ['app'], {
    strictDi: true
});