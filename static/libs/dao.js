"use strict";

var dao = {} || dao;
dao = (function () {
  return {
    /**
      * 기능 : axios 호출
      * parameter : this(필수), URI(필수), 요청전문(필수), 성공callback함수(필수), 실패callback함수(필수)
      * 리턴값 : header객체
      * example : dao.init(this,api,this.fnReqeustStatus(),this.fnThenStatus,this.fnCatchStatus)
     */
    init: function (local, apiURI, method, reqJson, callbackThen, callbackCatch) {
      var options = {
        headers: {"Content-Type":"application/json"},
        timeout: 30000
      };

      if(method == "GET"){
        return local.$http.get(apiURI, reqJson, options).then(function (response) {
          callbackThen(response);
        }).catch(function (error) {
          callbackCatch(error);
        });
      }else{
        return local.$http.post(apiURI, reqJson, options).then(function (response) {
          callbackThen(response);
        }).catch(function (error) {
          callbackCatch(error);
        });
      }
    }
  }
})();
