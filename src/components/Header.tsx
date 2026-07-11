/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X, Shield, Waves, Plane, Sparkles, Home, ChevronRight, Lock, Mail, Phone, MapPin, Globe } from "lucide-react";

type HeaderProps = {
  currentPath: string;
  onNavigate: (path: string) => void;
};

export default function Header({ currentPath, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<"login" | "contact" | null>(null);
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Trang chủ", path: "/", icon: Home },
    { label: "Lục quân", path: "/luc-quan", icon: Shield },
    { label: "Hải quân", path: "/hai-quan", icon: Waves },
    { label: "Không quân", path: "/khong-quan", icon: Plane },
    { label: "Khác", path: "/khac", icon: Sparkles },
  ];

  const handleItemClick = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/" || currentPath === "/home" || currentPath === "";
    }
    return currentPath === path;
  };


  return (
    <>
      <header
        className={`w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "sticky top-0 bg-ivory/95 backdrop-blur-md shadow-md border-b border-gold/20 py-2"
            : "relative bg-ivory py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* TẦNG 1: Logo (Căn giữa tuyệt đối trên cả desktop và mobile, nút Hamburger đặt tuyệt đối ở bên trái) */}
          <div className="flex items-center justify-between md:justify-center relative pb-2">
            {/* Hamburger for mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden absolute left-0 p-2 text-charcoal hover:text-gold transition-colors"
              aria-label="Mở menu"
              id="btn-open-menu"
            >
              <Menu size={22} />
            </button>

            {/* Centered Logo */}
            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                handleItemClick("/");
              }}
              className="mx-auto cursor-pointer block"
              id="link-logo"
            >
              <Logo />
            </a>
          </div>

          {/* ĐƯỜNG KẺ NGANG MẢNH PHÂN CÁCH (Dạng gạch ngang cổ điển như hình vẽ) */}
          <hr className="border-t border-gold/15 w-full my-3 md:my-4" />

          {/* TẦNG 2: Menu điều hướng (Căn giữa trên desktop, dùng phông chữ Georgia và phân tách bằng dấu chấm than !) */}
          <nav className="hidden md:block">
            <div className="flex items-center justify-center flex-wrap">
              {menuItems.map((item, idx) => {
                const Active = isActive(item.path);
                return (
                  <React.Fragment key={item.path}>
                    <a
                      href={`#${item.path}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleItemClick(item.path);
                      }}
                      className={`relative py-1 font-serif text-[15px] lg:text-[16px] tracking-wide transition-all duration-300 ${
                        Active
                          ? "text-bronze font-bold border-b-2 border-bronze"
                          : "text-charcoal/80 hover:text-bronze font-normal"
                      }`}
                      style={{ 
                        fontFamily: "'Georgia', 'Times New Roman', serif",
                        borderBottomWidth: Active ? "3px" : "0px",
                        paddingBottom: Active ? "2px" : "5px"
                      }}
                      id={`menu-item-${item.path.replace("/", "root").replace("-", "")}`}
                    >
                      {item.label}
                    </a>
                    
                    {/* Dấu chấm than phân tách màu vàng đồng */}
                    {idx < menuItems.length - 1 && (
                      <span 
                        className="text-bronze font-serif font-black text-sm select-none mx-5 lg:mx-7 opacity-80"
                        style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                      >
                        !
                      </span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </nav>

          {/* Quick horizontal scrollbar for mobile view below the logo */}
          <div className="md:hidden flex items-center space-x-4 overflow-x-auto no-scrollbar py-2 px-1">
            {menuItems.map((item, idx) => {
              const Active = isActive(item.path);
              return (
                <React.Fragment key={item.path}>
                  <a
                    href={`#${item.path}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleItemClick(item.path);
                    }}
                    className={`font-serif text-sm tracking-wide whitespace-nowrap transition-all duration-200 ${
                      Active
                        ? "text-bronze font-bold border-b-2 border-bronze pb-0.5"
                        : "text-charcoal/70"
                    }`}
                    style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                    id={`mobile-quick-menu-${item.path.replace("/", "root").replace("-", "")}`}
                  >
                    {item.label}
                  </a>
                  {idx < menuItems.length - 1 && (
                    <span 
                      className="text-bronze/50 font-serif font-bold text-xs select-none"
                      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                    >
                      !
                    </span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER SIDEBAR (Slide-in) */}
      <div
        className={`fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 left-0 bottom-0 w-[280px] bg-ivory shadow-2xl border-r border-gold/20 p-6 flex flex-col justify-between transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gold/10 mb-6">
              <span 
                className="font-serif font-bold tracking-wider text-charcoal text-base"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                Danh mục chính
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 text-charcoal hover:text-gold transition-colors"
                aria-label="Đóng menu"
                id="btn-close-menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Drawer Items using clean Serif layout */}
            <div className="space-y-3">
              {menuItems.map((item) => {
                const Active = isActive(item.path);
                return (
                  <button
                    key={item.path}
                    onClick={() => handleItemClick(item.path)}
                    className={`w-full flex items-center justify-between py-2.5 px-3 rounded font-serif text-[15px] tracking-wide transition-all ${
                      Active
                        ? "bg-gold/10 text-bronze font-bold border-l-4 border-bronze pl-4"
                        : "text-charcoal/80 hover:bg-charcoal/5 hover:pl-4"
                    }`}
                    style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                    id={`drawer-item-${item.path.replace("/", "root").replace("-", "")}`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight size={14} className="text-bronze/50" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="pt-6 border-t border-gold/10 text-center">
            <p className="font-serif font-extrabold text-xs tracking-widest text-charcoal/40">
              PHI LONG STUDIO
            </p>
            <p className="text-[9px] font-mono tracking-widest text-bronze/60 mt-1">
              EST. 2026 • VIETNAM
            </p>
          </div>
        </div>
      </div>

      {/* MODAL 1: ĐĂNG NHẬP GIẢ LẬP SANG TRỌNG */}
      {activeModal === "login" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/70 backdrop-blur-sm animate-fade-in">
          <div 
            className="relative w-full max-w-md bg-ivory rounded-lg border-2 border-gold/40 shadow-2xl p-6 md:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Decorative Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(141,106,44,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(141,106,44,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none rounded-lg"></div>

            {/* Close button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-1.5 text-charcoal/60 hover:text-charcoal rounded-full hover:bg-charcoal/5 transition-all"
              id="btn-close-login"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="text-center space-y-2">
              <h3 
                className="font-serif text-2xl font-bold text-charcoal uppercase tracking-wider"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                Đăng Nhập
              </h3>
              <p className="text-xs font-mono text-bronze uppercase tracking-widest">
                Khu vực lưu trữ Phi Long
              </p>
              <hr className="border-t border-gold/25 w-24 mx-auto mt-2" />
            </div>

            {/* Form */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                setIsSubmitting(true);
                setTimeout(() => {
                  setIsSubmitting(false);
                  alert("Đăng nhập giả lập thành công! Chào mừng bạn đến với Thư viện lưu trữ số Phi Long.");
                  setActiveModal(null);
                  setLoginEmail("");
                  setLoginPassword("");
                }, 1200);
              }}
              className="space-y-4 relative z-10"
            >
              <div className="space-y-1">
                <label className="block text-[11px] font-mono uppercase tracking-widest text-charcoal/60">
                  Email Lưu Trữ
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@philongstudio.vn"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-charcoal/5 border border-gold/20 rounded font-sans text-sm text-charcoal focus:outline-none focus:border-gold focus:bg-charcoal/10 transition-all duration-300"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-charcoal/60">
                    Mật Khẩu Bảo Mật
                  </label>
                  <a 
                    href="#forgot" 
                    onClick={(e) => { e.preventDefault(); alert("Liên hệ quản trị viên qua email info@philongstudio.vn để đặt lại mật khẩu."); }}
                    className="text-[10px] font-mono text-gold hover:underline uppercase tracking-wider"
                  >
                    Quên?
                  </a>
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full px-3 py-2 bg-charcoal/5 border border-gold/20 rounded font-sans text-sm text-charcoal focus:outline-none focus:border-gold focus:bg-charcoal/10 transition-all duration-300"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-charcoal hover:bg-gold hover:text-charcoal text-ivory font-mono font-bold text-xs uppercase tracking-widest py-3 border border-gold transition-all duration-300 rounded cursor-pointer shadow-md disabled:opacity-50"
                  id="btn-login-submit"
                >
                  {isSubmitting ? (
                    <span>Đang xác thực...</span>
                  ) : (
                    <>
                      <Lock size={13} />
                      <span>Truy cập thư mục</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Footer */}
            <div className="text-center">
              <p className="text-[10px] font-mono text-charcoal/40 uppercase tracking-wider">
                Chỉ dành cho nhân sự được phân quyền
              </p>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: THÔNG TIN LIÊN HỆ SANG TRỌNG */}
      {activeModal === "contact" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/70 backdrop-blur-sm animate-fade-in">
          <div 
            className="relative w-full max-w-md bg-ivory rounded-lg border-2 border-gold/40 shadow-2xl p-6 md:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Decorative Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(141,106,44,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(141,106,44,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none rounded-lg"></div>

            {/* Close button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-1.5 text-charcoal/60 hover:text-charcoal rounded-full hover:bg-charcoal/5 transition-all"
              id="btn-close-contact"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="text-center space-y-2">
              <h3 
                className="font-serif text-2xl font-bold text-charcoal uppercase tracking-wider"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                Liên Hệ
              </h3>
              <p className="text-xs font-mono text-bronze uppercase tracking-widest">
                Phi Long Studio
              </p>
              <hr className="border-t border-gold/25 w-24 mx-auto mt-2" />
            </div>

            {/* Content List */}
            <div className="space-y-4 text-sm font-sans text-charcoal/80 relative z-10">
              <p className="text-justify text-xs italic leading-relaxed text-charcoal/60 border-b border-gold/10 pb-3 font-serif">
                “Nếu bạn có bất kỳ câu hỏi nào về các thiết kế mô hình chiến lược quân sự hoặc có nhu cầu hợp tác sáng tạo cùng chúng tôi, xin vui lòng liên hệ qua các kênh thông tin dưới đây.”
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-gold/10 text-bronze rounded mt-0.5">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-charcoal/50 uppercase tracking-widest">VĂN PHÒNG CHÍNH</span>
                    <span className="font-semibold text-charcoal">Phòng Sáng Tạo & Lưu Trữ Phi Long, Quận Hoàn Kiếm, Hà Nội</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-gold/10 text-bronze rounded mt-0.5">
                    <Mail size={15} />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-charcoal/50 uppercase tracking-widest">EMAIL ĐƯỜNG NÓNG</span>
                    <a href="mailto:info@philongstudio.vn" className="text-bronze font-bold hover:underline">info@philongstudio.vn</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-gold/10 text-bronze rounded mt-0.5">
                    <Phone size={15} />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-charcoal/50 uppercase tracking-widest">ĐIỆN THOẠI HỖ TRỢ</span>
                    <span className="font-semibold text-charcoal">090.888.XXXX (8:00 - 18:00)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-gold/10 text-bronze rounded mt-0.5">
                    <Globe size={15} />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-charcoal/50 uppercase tracking-widest">MẠNG XÃ HỘI</span>
                    <span className="font-semibold text-charcoal">facebook.com/philong.studio.military</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick message input button */}
            <button
              onClick={() => {
                const msg = prompt("Nhập lời nhắn của bạn gửi tới Ban biên tập Phi Long Studio:");
                if (msg) {
                  alert("Lời nhắn của bạn đã được mã hóa bảo mật và gửi đi thành công! Chúng tôi sẽ phản hồi sớm nhất qua email của bạn.");
                }
              }}
              className="w-full flex items-center justify-center gap-2 border border-gold hover:bg-gold/10 text-bronze font-mono font-bold text-xs uppercase tracking-widest py-3 transition-all duration-300 cursor-pointer rounded"
              id="btn-send-fast-msg"
            >
              <Mail size={13} />
              <span>Gửi thông điệp nhanh</span>
            </button>

            {/* Footer */}
            <div className="text-center pt-2 border-t border-gold/10">
              <p className="text-[9px] font-mono text-charcoal/40 uppercase tracking-widest">
                Độ trễ phản hồi trung bình: dưới 4 giờ làm việc
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
