// FILE: tapchiapp / src/pages/SSOCallback.tsx
import { useEffect, useState } from "react";
import { signInWithCustomToken } from "firebase/auth";
import { auth } from "../firebase-config";

export default function SSOCallbackPage() {
  const [status, setStatus] = useState("Đang đồng bộ tài khoản...");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleSSO = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");
      const returnUrl = params.get("returnUrl");

      if (!code) {
        setError("Không tìm thấy mã xác thực SSO.");
        return;
      }

      try {
        setStatus("Đang xác minh mã bảo mật với Server...");
        
        // Gửi mã dùng một lần lên API Server của Website chính để đổi lấy Firebase Custom Token
        const response = await fetch("https://webtest-puce-tau.vercel.app/api/sso/verify-code", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code })
        });

        const data = await response.json();

        if (!response.ok || !data.customToken) {
          throw new Error(data.error || "Mã xác thực không hợp lệ hoặc đã hết hạn.");
        }

        setStatus("Mã hợp lệ! Đang thiết lập phiên đăng nhập...");

        // Đăng nhập an toàn vào Webapp phụ bằng Firebase Custom Token nhận được
        await signInWithCustomToken(auth, data.customToken);

        setStatus("Đăng nhập thành công! Đang chuyển hướng...");

        // Chuyển người dùng về trang đích ban đầu
        if (returnUrl) {
          window.location.href = decodeURIComponent(returnUrl);
        } else {
          window.location.href = "/";
        }
      } catch (err: any) {
        setError(err.message || "Lỗi xác thực dùng chung.");
      }
    };

    handleSSO();
  }, []);

  if (error) {
    return (
      <div style={{ padding: "40px", textAlign: "center", color: "#f87171" }}>
        <h3>Lỗi Đăng Nhập</h3>
        <p>{error}</p>
        <a href="https://webtest-puce-tau.vercel.app/dang-nhap" style={{ color: "#38bdf8", textDecoration: "underline" }}>
          Quay lại Website chính đăng nhập lại
        </a>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", textAlign: "center", color: "#fff" }}>
      <p>{status}</p>
    </div>
  );
}