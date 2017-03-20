import angular from 'angular';

import controller from './controller';
import bindings from './bindings';
import template from './template.html';

import '../style/app.css';

const moduleName = 'angular-atc';

const controllerAs = 'addtocalendar';

const app = {
    template,
    controller,
    controllerAs,
    bindings
};

angular
  .module(moduleName, [
    'ngFileSaver',
    'angular-click-outside'
  ])
  .controller('AddtocalendarCtrl', controller)
  .component(controllerAs, app);

export default moduleName;