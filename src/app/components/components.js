
import angular from 'angular'
import hotels from './hotels';

const components = angular
  .module('app.components', [hotels])
  .name;

export default components; 