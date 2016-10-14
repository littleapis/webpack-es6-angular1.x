/**
 * Created by pafang on 16/10/12.
 */
import angular from 'angular';

class CommonService {

    constructor($q, $http) {
        this.$q = $q;
        this.$http = $http;
        this.loginUser = {}; //存储登录人信息 TODO
    }

    /**
     * 查询资源
     * @param url
     * @param requestData
     */
    query(url, requestData = {}) {
        const deferred = this.$q.defer();
        this.$http({
            method: 'GET',
            url: url + '?tmp=' + (+new Date()),
            params: requestData,
            dataType: 'json'
        }).success(function (data) {
            deferred.resolve(data);
        }).error(function (response) {
            deferred.reject(response);
        });

        return deferred.promise;
    }


    /**
     * 保存资源  新建-POST 修改-PUT
     * @param url
     * @param requestData
     * @param id
     */
    save(url, requestData, id) {
        const deferred = this.$q.defer();
        let method = 'post';

        if (id) {
            url += '/' + id;
            method = 'put'
        }

        this.$http({
            method: method,
            url: url,
            data: requestData
        }).success(function (data) {

            deferred.resolve(data);

        }).error(function (response) {
            deferred.reject(response);
        });

        return deferred.promise;
    }

    /**
     * 保存资源
     * @param url
     * @param requestData
     * @param id
     */
    saveForm(url, requestData, id) {
        const deferred = this.$q.defer();
        var transform = function (data) {
            return $.param(data);
        };

        this.$http.post(url + "/" + id, requestData, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            transformRequest: transform
        }).success(function (data) {
            deferred.resolve(data);
        }).error(function (error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    /**
     * 删除资源
     * @param url
     * @param id
     */
    delete(url, id) {
        const deferred = this.$q.defer();
        this.$http({
            method: 'delete',
            url: url + '/' + id
        }).success(function (data) {
            deferred.resolve(data)
        }).error(function (response) {
            deferred.reject(response)
        });
        return deferred.promise
    }


    /**
     * 通过post 请求数据
     * @param url
     * @param data
     * @returns {d.promise|*|promise}
     */
    postInfoByData(url, data) {
        const deferred = this.$q.defer();

        this.$http.post(url, data).success(function (data) {

            deferred.resolve(data);

        }).error(function (response) {
            deferred.reject(response);
        });

        return deferred.promise;
    }

    /**
     * 以form表单形式提交参数
     * @param url
     * @param requestData
     * @returns
     */
    postInfoByParams(url, requestData) {
        const deferred = this.$q.defer();
        var transform = function (data) {
            return $.param(data);
        };

        this.$http.post(url, requestData, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            transformRequest: transform
        })
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (error) {
                deferred.reject(error);
            });

        return deferred.promise;
    }

}


export default angular.module('services.common-service', [])
    .service('commonService', CommonService)
    .name;