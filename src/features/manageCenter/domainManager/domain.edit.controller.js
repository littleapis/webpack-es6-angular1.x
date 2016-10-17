export default class DomainEditController {
    constructor($mdDialog, parentScope,commonService) {
        this.$mdDialog = $mdDialog;
        this.parentScope = parentScope;
        this.commonService =commonService;
    }

    $onInit() {
        const parentScope = this.parentScope;
        const title = "域名";
        this.formType = parentScope.formType;
        this.title = this.formType == 'edit' ? '修改'+title : '新增'+title;

        if(this.formType =='edit'){
            let rowData = angular.copy(parentScope.rowData);
            this.domain = rowData;
            this.domain.ip = rowData.ip.split(",").join('\n');
        }

    }


    submit(){
        const data = angular.copy(this.domain);
        data.ip =data.ip.replace(/\n/g,',');
        this.commonService.save('rest/domain',data,data.id).then((response) =>{
            this.cancel();
            this.parentScope.getListData();
        });
    }

    cancel() {
        this.$mdDialog.cancel();
    }


}