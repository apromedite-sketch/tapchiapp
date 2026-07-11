/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Shield, Waves, Plane, Sparkles, Mail, Compass, ShieldAlert, Award } from "lucide-react";

type FooterProps = {
  onNavigate: (path: string) => void;
};

export default function Footer({ onNavigate }: FooterProps) {
  const categories = [
    { name: "Lục Quân", path: "/luc-quan", icon: Shield },
    { name: "Hải Quân", path: "/hai-quan", icon: Waves },
    { name: "Không Quân", path: "/khong-quan", icon: Plane },
    { name: "Khác", path: "/khac", icon: Sparkles },
  ];

  return (
    <footer className="bg-charcoal text-ivory border-t-2 border-gold/40 pt-16 pb-12 mt-20 relative overflow-hidden">
      {/* Decorative Golden Ambient Mesh Glow in background */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-warm-brown/25 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-gold/10">
          
          {/* Brand & Introduction Column */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="font-serif font-extrabold text-xl tracking-[0.25em] text-gold">
              PHI LONG <span className="text-ivory">STUDIO</span>
            </h2>
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold/60">
              Cổng lưu trữ mô hình & khí tài quân sự
            </p>
            <p className="text-ivory/70 text-sm max-w-sm leading-relaxed text-justify">
              Phi Long Studio là chuyên trang tạp chí nghệ thuật chuyên sâu, tôn vinh các giá trị lịch sử hào hùng, kỹ thuật lắp ráp weathering sa bàn đỉnh cao và các dự án cơ giáp viễn tưởng đột phá.
            </p>
            <div className="flex items-center space-x-3 pt-2 text-xs text-gold/80">
              <Award size={16} />
              <span className="font-mono tracking-widest text-[11px]">ARCHIVAL QUALITY JOURNALISM</span>
            </div>
          </div>

          {/* Quick Category Navigation Column */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-serif font-semibold text-sm uppercase tracking-widest text-gold border-b border-gold/10 pb-2">
              Chuyên Mục
            </h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <li key={cat.path}>
                    <a
                      href={`#${cat.path}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(cat.path);
                      }}
                      className="group flex items-center space-x-2 text-sm text-ivory/70 hover:text-gold transition-colors duration-200"
                    >
                      <Icon size={14} className="text-gold/40 group-hover:text-gold transition-colors duration-200" />
                      <span className="font-medium">{cat.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Editorial Guidelines & Archive Philosophy Column */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-serif font-semibold text-sm uppercase tracking-widest text-gold border-b border-gold/10 pb-2">
              Tôn Chỉ Lưu Trữ
            </h3>
            <p className="text-ivory/60 text-xs leading-relaxed text-justify">
              Mọi nội dung, hình ảnh và tài liệu thiết kế đều được tuyển chọn nghiêm ngặt nhằm đảm bảo tính mỹ thuật cao cấp nhất. Chúng tôi không kinh doanh thương mại, không bán sản phẩm, hoàn toàn tập trung vào trải nghiệm đọc chân thực của giới mộ điệu.
            </p>
            <div className="flex items-center space-x-2.5 text-xs text-ivory/50 bg-ivory/5 p-3 rounded border border-gold/10">
              <ShieldAlert size={16} className="text-gold/60 shrink-0" />
              <span>Nội dung mang tính nghệ thuật, lưu trữ lịch sử và khoa học viễn tưởng.</span>
            </div>
          </div>

        </div>

        {/* Footer Base Layer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ivory/40">
          <div>
            <p>© 2026 Phi Long Studio. Bảo lưu mọi quyền.</p>
            <p className="text-[10px] text-ivory/30 mt-0.5">Premium Military & Sci-Fi Scale Model Archive</p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="mailto:contact@philongstudio.vn"
              className="flex items-center gap-1.5 hover:text-gold transition-colors duration-200"
            >
              <Mail size={13} />
              <span>contact@philongstudio.vn</span>
            </a>
            <div className="flex items-center gap-1">
              <Compass size={13} />
              <span>Hải Phòng, Việt Nam</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
