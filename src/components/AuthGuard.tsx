// FILE: tapchiapp / src/components/AuthGuard.tsx
import { useEffect, useState, ReactNode } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase-config"; // Đường dẫn đến cấu hình Firebase của bạn

interface AuthGuardProps {
  children: ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // onAuthStateChanged kiểm tra trạng thái session Firebase Client đã lưu ở Domain này chưa
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (!currentUser) {
        // 1. Lưu lại đường dẫn hiện tại người dùng đang muốn xem
        const currentUrl = window.location.href;

        // 2. Tự động redirect sang trang đăng nhập của website chính kèm returnUrl
        const mainLoginUrl = `https://webtest-puce-tau.vercel.app/dang-nhap?returnUrl=${encodeURIComponent(currentUrl)}`;
        
        window.location.href = mainLoginUrl;
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    // Trả về màn hình chờ trống (hoặc loading spinner)
    // TUYỆT ĐỐI không render {children} ở đây để tránh lộ nội dung chớp lên trước khi chuyển hướng
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#0f172a" }}></div>
    );
  }

  // Nếu đã đăng nhập thành công, cho phép xem nội dung bên trong
  return user ? <>{children}</> : null;
}