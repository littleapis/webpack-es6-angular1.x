export default class DomainEditController {
    constructor($resource,$mdDialog, parentScope,commonService) {
        this.restfulInterface =$resource('/rest/domain');
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
            this.domain = parentScope.rowData;
            this.domain.ip = parentScope.rowData.ip.split(",").join('\n');
        }

    }


    submit(){
        const data = angular.copy(this.domain);
        data.ip =data.ip.replace(/\n/g,',');
        this.commonService.postInfoByData('rest/domain',data).then((response) =>{
            console.log(response);
            this.cancel();
        });

    }

    cancel() {
        this.$mdDialog.cancel();
    }


}