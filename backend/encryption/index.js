const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");
dotenv.config();
// 암호화
const Encrypt = (msg) => {
  return CryptoJS.AES.encrypt(msg, process.env.AESKey, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
};

const Decrypt = (base64string) => {
  console.log(process.env.AESKey);
  return CryptoJS.AES.decrypt(base64string, process.env.AESKey).toString(
    CryptoJS.enc.Utf8
  );
};

module.exports = {
  Encrypt,
  Decrypt,
};
