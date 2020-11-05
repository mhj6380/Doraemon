// 백엔드 서버 URL
export const BACKEND_URL =
  process.env.NODE_ENV === "production"
    ? "https://domain.com:8080"
    : "http://localhost:8080";
