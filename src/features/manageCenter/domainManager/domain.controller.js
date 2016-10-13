import DomainEditController from './domain.edit.controller';

export  default class DomainController {
    constructor(commonService, confirmDialog, $mdDialog) {
        this.commonService = commonService;
        this.confirmDialog = confirmDialog;
        this.$mdDialog = $mdDialog;

        this.name = '初始值';
        this.selected = [];
        this.limitOptions = [10, 15, 20];

        this.options = {
            rowSelection: true,
            multiSelect: true,
            autoSelect: true,
            decapitate: false,
            largeEditDialog: false,
            boundaryLinks: true,
            limitSelect: true,
            pageSelect: true
        };

        this.query = {
            order: 'name',
            limit: 10,
            page: 1
        };

        this.batchOperatorMap = {
            'delete': '删除',
            'enabledWaf': '启用WAF',
            'disabledWaf': '禁用WAF',
            'enabled': '启用',
            'disabled': '禁用',
        }

    }

    $onInit() {
        this.getListData();
    }

    refresh() {
        this.getListData();
    }


    batch_handle(event) {
        const operator = this.batch_operator;
        if (!operator) {
            return;
        }
        this.confirmDialog.showConfirm(event, '批量操作', '确定选中记录执行  [ ' + this.batchOperatorMap[operator] + ' ]？').then(()=> {
            console.log(operator)
        })

    }

    getListData() {

        this.promise = this.commonService.getInfoByGet('rest/domain').then((data) =>{
            this.desserts = {
                "count": data.length,
                "data": data
            }
        });
    }

    showDialog(ev,rowData) {

        if (rowData) {
            this.formType = 'edit';
            this.rowData = rowData;
        }

        const $scope = this;

        this.$mdDialog.show({
            controller: DomainEditController,
            controllerAs: 'vm',
            template: require('./domain.edit.tmpl.html'),
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:false,
            locals: {
                parentScope: $scope
            }
        })
    };


}