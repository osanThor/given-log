"use client";

import TextareaAutosize from "react-textarea-autosize";
import Lottie from "lottie-react";
import contactEmail from "@/data/lottie/contact.json";
import { useState } from "react";
import { postContact } from "@/services/contact_service";

export default function ContactContainer() {
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleChangeField = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "subject") {
      setSubject(value);
    } else if (name === "message") {
      if (value) {
        const lineCount = (value.match(/[^\n]*\n[^\n]*/gi)?.length ?? 1) + 1;
        if (lineCount > 7) {
          alert("최대 7줄까지만 입력가능합니다.");
          return;
        }
      }
      setMessage(value);
    }
  };

  const handleContact = async () => {
    try {
      if (!email) return alert("이메일을 입력해주세요");
      const emailRule =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; //이메일 정규식
      if (!emailRule.test(email)) return alert("이메일 형식이 아닙니다.");
      if (!subject) return alert("성함을 입력해주세요");
      if (!message) return alert("메세지를 입력해주세요");

      const result = await postContact({ from: email, subject, message });
      if (result.result === "SUCCESS") {
        alert("전송이 완료됐습니다");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-10 md:flex-row">
      <Lottie animationData={contactEmail} />
      <div className="flex flex-col w-full gap-4 px-4 py-6">
        <div className="flex flex-col gap-2">
          <label>이메일</label>
          <input
            onChange={handleChangeField}
            className="h-[40px] border border-gray-300 px-2"
            value={email ? email : ""}
            name="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>이름</label>
          <input
            onChange={handleChangeField}
            className="h-[40px] border border-gray-300 px-2"
            value={subject ? subject : ""}
            name="subject"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>메세지</label>
          <TextareaAutosize
            onChange={handleChangeField}
            maxRows={7}
            className="min-h-[120px] border border-gray-300 p-2 resize-none"
            value={message ? message : ""}
            name="message"
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            onClick={handleContact}
            type="button"
            className="h-10 px-3 py-2 text-white bg-blue-500 rounded-md w-28 hover:bg-blue-400"
          >
            전송
          </button>
        </div>
      </div>
    </div>
  );
}
