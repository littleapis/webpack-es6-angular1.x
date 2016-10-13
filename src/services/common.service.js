/**
 * Created by pafang on 16/10/12.
 */
import angular from 'angular';

class CommonService {

    constructor($q, $http) {
        this.$q = $q;
        this.$http = $http;
        this.loginUser = {}; //存储登录人信息
    }

    /**
     * Get 请求数据
     * @param url
     * @param data
     * @returns {Function}
     */
    getInfoByGet(url, data) {
        const deferred = this.$q.defer();
        this.$http({
            method: 'GET',
            url: url + '?tmp=' + (+new Date()),
            params: data || {},
            dataType: 'json'
        }).success(function (data) {
            deferred.resolve(data);
        })
            .error(function (reason) {
                deferred.reject(reason);
            });

        return deferred.promise;
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

        }).error(function (reason) {
            deferred.reject(reason);
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