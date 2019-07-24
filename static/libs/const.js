"use strict";

const CONST = {};
const backEndHost = 'http://localhost:8080';
CONST.API = {
  login : backEndHost + "/api/login",
  logout : backEndHost + "/api/logout",
  userSave : backEndHost + "/api/userService/save"
};

export default CONST;
