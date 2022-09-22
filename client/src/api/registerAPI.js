// 로그인,회원가입 등  api request 모음

import axios from "axios";

export const loginRequest = async (id, password) =>
  axios.post("http://localhost:5000/api/users/login", {
    id: id,
    password: password,
  });

export const joinRequest = async (id, nickname, email, password) =>
  axios.post("http://localhost:5000/api/users/join", {
    id: id,
    nickname: nickname,
    email: email,
    password: password,
  });
