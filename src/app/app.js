import 'angular-material/angular-material.min.css';
import 'angular-material-data-table/dist/md-data-table.min.css'
import '../public/font/iconfont.css'
import '../scss/app.scss';


import angular from 'angular';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
import dataTable from 'angular-material-data-table';
import routing from '../app/app.config';
import manager from '../features/manageCenter';
import commonService from '../services/common.service';
import confirmDialog from '../services/confirm.service';



class AppCtrl {
    constructor() {
        this.url = 'https://github.com/preboot/angular-webpack';
    }

    logout(){
        //logout
        console.log("logout");
    }

}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [ngMaterial,uiRouter,manager,dataTable,commonService,confirmDialog])
    .config(routing)
    .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;