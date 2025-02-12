import React, { useEffect, useState } from "react";
import styles from "./JoinSection.module.scss";
import { LongBarButton, LongBarInput } from "../../styles/LongBar";

const JoinSection = (props) => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [CheckState, setCheckState] = useState(false);

  const checkPassword = () => {
    if (passwordCheck == password) {
      setCheckState(true);
    } else {
      setCheckState(false);
    }
  };

  useEffect(() => {
    checkPassword();
  }, [passwordCheck]);

  return (
    <section className={styles.JoinSection}>
      <p>아이디</p>
      <LongBarInput
        placeholder="아이디 입력"
        style={{ marginTop: "8px" }}
        onChange={(e) => setId(e.target.value)}
      ></LongBarInput>
      <p>별명</p>
      <LongBarInput
        placeholder="닉네임 입력"
        style={{ marginTop: "8px" }}
        onChange={(e) => setNickname(e.target.value)}
      ></LongBarInput>
      <p>이메일</p>
      <LongBarInput
        placeholder="이메일 입력"
        style={{ marginTop: "8px" }}
        onChange={(e) => setEmail(e.target.value)}
      ></LongBarInput>
      <p>비밀번호</p>
      <LongBarInput
        type="password"
        placeholder="비밀번호 입력"
        style={{ marginTop: "8px" }}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></LongBarInput>
      <LongBarInput
        type="password"
        placeholder="비밀번호 재입력"
        onChange={(e) => {
          setPasswordCheck(e.target.value);
        }}
      ></LongBarInput>
      {CheckState ? "" : <span>※ 비밀번호가 일치하지 않습니다.</span>}
      <LongBarButton>가입하기</LongBarButton>
    </section>
  );
};

export default JoinSection;
