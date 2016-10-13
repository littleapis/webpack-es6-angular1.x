export default class DomainEditController {
    constructor($mdDialog, parentScope) {
        this.$mdDialog = $mdDialog;
        this.parentScope = parentScope;
    }

    $onInit() {
        const parentScope = this.parentScope;
        const title = "域名";
        this.formType = parentScope.formType;
        this.title = this.formType == 'edit' ? '修改'+title : '新增'+title
    }


    cancel() {
        this.$mdDialog.cancel();
    }
}