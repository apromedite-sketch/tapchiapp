/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleRow from "./components/ArticleRow";
import CategoryGrid from "./components/CategoryGrid";
import ArticleDetail from "./components/ArticleDetail";
import { ARTICLES, CATEGORIES } from "./data/articles";
import { FileQuestion, Compass } from "lucide-react";

export default function App() {
  const [currentPath, setCurrentPath] = useState("/");

  // Parse clean path from URL Hash
  const getCleanPath = () => {
    const hash = window.location.hash;
    const clean = hash.replace(/^#/, "");
    if (!clean || clean === "/" || clean === "/home") {
      return "/";
    }
    return clean;
  };

  // Sync hash state on load and hash change
  useEffect(() => {
    setCurrentPath(getCleanPath());

    const handleHashChange = () => {
      setCurrentPath(getCleanPath());
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Safe navigation helper
  const navigate = (path: string) => {
    window.location.hash = path;
    setCurrentPath(path);
    // Smooth scroll to top on routing
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Route router handler
  const renderPage = () => {
    // 1. HOME PAGE VIEW
    if (currentPath === "/") {
      return (
        <div className="space-y-6 pb-12 animate-fade-in pt-6">
          {/* Core Content Container */}
          <main className="max-w-7xl mx-auto px-4 md:px-6 space-y-4">
            {/* 4 Rows vertically for each category as requested */}
            <ArticleRow
              title="Top 10 Lục Quân"
              categorySlug="luc-quan"
              articles={ARTICLES}
              onNavigate={navigate}
              onSelectArticle={(slug) => navigate(`/bai-viet/${slug}`)}
            />

            <ArticleRow
              title="Top 10 Hải Quân"
              categorySlug="hai-quan"
              articles={ARTICLES}
              onNavigate={navigate}
              onSelectArticle={(slug) => navigate(`/bai-viet/${slug}`)}
            />

            <ArticleRow
              title="Top 10 Không Quân"
              categorySlug="khong-quan"
              articles={ARTICLES}
              onNavigate={navigate}
              onSelectArticle={(slug) => navigate(`/bai-viet/${slug}`)}
            />

            <ArticleRow
              title="Top 10 Hạng Mục Khác"
              categorySlug="khac"
              articles={ARTICLES}
              onNavigate={navigate}
              onSelectArticle={(slug) => navigate(`/bai-viet/${slug}`)}
            />
          </main>
        </div>
      );
    }

    // 2. ARTICLE DETAILS VIEW
    if (currentPath.startsWith("/bai-viet/")) {
      const slug = currentPath.substring("/bai-viet/".length);
      const matchedArticle = ARTICLES.find((item) => item.slug === slug);

      if (matchedArticle) {
        return (
          <main className="pb-16 bg-ivory">
            <ArticleDetail
              article={matchedArticle}
              articles={ARTICLES}
              onNavigate={navigate}
              onSelectArticle={(slug) => navigate(`/bai-viet/${slug}`)}
            />
          </main>
        );
      }
    }

    // 3. CATEGORIES INDEX VIEW
    const matchedCategory = CATEGORIES.find((item) => `/${item.slug}` === currentPath);
    if (matchedCategory) {
      return (
        <main className="max-w-7xl mx-auto px-4 md:px-6 py-10 pb-20">
          <CategoryGrid
            category={matchedCategory}
            articles={ARTICLES}
            onSelectArticle={(slug) => navigate(`/bai-viet/${slug}`)}
          />
        </main>
      );
    }

    // 4. NOT FOUND / 404 VIEW
    return (
      <main className="max-w-md mx-auto py-24 px-4 text-center space-y-6">
        <div className="w-20 h-20 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto border border-gold/20 shadow-inner">
          <FileQuestion size={40} />
        </div>
        <h1 className="font-serif font-extrabold text-2xl text-charcoal tracking-tight">
          Lỗi 404 - Không Tìm Thấy Trang
        </h1>
        <p className="text-charcoal/60 text-sm leading-relaxed">
          Đường dẫn tài liệu lưu trữ này không tồn tại hoặc đã được chuyển dời sang thư mục bảo mật khác. Xin vui lòng trở lại Trang chủ.
        </p>
        <button
          onClick={() => navigate("/")}
          className="group inline-flex items-center space-x-2 bg-charcoal text-ivory hover:bg-gold hover:text-charcoal font-mono font-bold text-xs uppercase tracking-widest px-6 py-3 border border-gold transition-all duration-300 cursor-pointer"
          id="btn-back-home"
        >
          <Compass size={14} className="group-hover:rotate-45 transition-transform" />
          <span>Về trang chủ Phi Long</span>
        </button>
      </main>
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-ivory text-charcoal">
      {/* Editorial Decorative Grid overlay on entire app background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(141,106,44,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(141,106,44,0.015)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none z-0"></div>

      {/* Main Layout Tier 1: Header */}
      <div className="relative z-10">
        <Header currentPath={currentPath} onNavigate={navigate} />
        
        {/* Dynamic Page Router */}
        {renderPage()}
      </div>

      {/* Main Layout Tier 2: Footer */}
      <div className="relative z-10">
        <Footer onNavigate={navigate} />
      </div>
    </div>
  );
}
