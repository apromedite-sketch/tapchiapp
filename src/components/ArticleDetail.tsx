/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { Article } from "../types";
import { ArrowLeft, Calendar, Eye, FileText, Share2, Award, Clock } from "lucide-react";
import Breadcrumb from "./Breadcrumb";
import RelatedArticles from "./RelatedArticles";
import { motion } from "motion/react";

type ArticleDetailProps = {
  article: Article;
  articles: Article[];
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
};

export default function ArticleDetail({
  article,
  articles,
  onNavigate,
  onSelectArticle,
}: ArticleDetailProps) {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [article.id]);

  const handleBackClick = () => {
    onNavigate(`/${article.categorySlug}`);
  };

  // Helper to parse basic markdown to JSX nodes
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, bIdx) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      if (trimmed.startsWith("### ")) {
        return (
          <h3
            key={bIdx}
            className="font-serif font-bold text-lg md:text-xl text-charcoal mt-6 mb-3 tracking-wide"
          >
            {trimmed.replace("### ", "")}
          </h3>
        );
      }
      if (trimmed.startsWith("## ")) {
        return (
          <h2
            key={bIdx}
            className="font-serif font-extrabold text-xl md:text-2xl text-charcoal border-b border-gold/15 pb-2 mt-8 mb-4"
          >
            {trimmed.replace("## ", "")}
          </h2>
        );
      }
      
      // Handle list items
      if (trimmed.startsWith("1. ") || trimmed.startsWith("- ")) {
        const lines = trimmed.split("\n");
        const isNumbered = trimmed.startsWith("1. ");
        
        if (isNumbered) {
          return (
            <ol key={bIdx} className="list-decimal pl-6 space-y-2 my-4 text-charcoal/80 text-sm md:text-base leading-relaxed">
              {lines.map((line, lIdx) => {
                const cleanLine = line.replace(/^\d+\.\s+\*\*/, "**").replace(/^\d+\.\s+/, "");
                return <li key={lIdx}>{parseInlineBold(cleanLine)}</li>;
              })}
            </ol>
          );
        } else {
          return (
            <ul key={bIdx} className="list-disc pl-6 space-y-2 my-4 text-charcoal/80 text-sm md:text-base leading-relaxed">
              {lines.map((line, lIdx) => {
                const cleanLine = line.replace(/^[-*]\s+\*\*/, "**").replace(/^[-*]\s+/, "");
                return <li key={lIdx}>{parseInlineBold(cleanLine)}</li>;
              })}
            </ul>
          );
        }
      }

      return (
        <p key={bIdx} className="text-charcoal/80 text-sm md:text-base leading-relaxed text-justify mb-5 font-sans">
          {parseInlineBold(trimmed)}
        </p>
      );
    });
  };

  const parseInlineBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={idx} className="text-charcoal font-bold font-sans">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const breadcrumbSegments = [
    { label: article.category, path: `/${article.categorySlug}` },
    { label: article.title },
  ];

  return (
    <article className="max-w-7xl mx-auto px-4 md:px-6 py-4 animate-fade-in">
      {/* Breadcrumbs */}
      <Breadcrumb segments={breadcrumbSegments} onNavigate={onNavigate} />

      {/* Retro back trigger */}
      <button
        onClick={handleBackClick}
        className="group inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-charcoal/60 hover:text-gold transition-colors duration-200 mb-6 cursor-pointer"
        id="btn-back-to-category"
      >
        <ArrowLeft size={14} className="transform group-hover:-translate-x-1 transition-transform" />
        <span>Trở về danh mục {article.category}</span>
      </button>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Side: Editorial Body content (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="space-y-4">
            {/* Category label */}
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold font-bold">
              Chuyên Mục: {article.category}
            </span>

            {/* Main title */}
            <h1 className="font-serif font-extrabold text-2xl md:text-4xl lg:text-5xl text-charcoal leading-tight tracking-tight">
              {article.title}
            </h1>

            {/* Metadata bar */}
            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-charcoal/50 border-y border-gold/10 py-3 mt-4">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} className="text-gold" />
                <span>Xuất bản: {article.publishedAt}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Eye size={13} className="text-gold" />
                <span>{article.viewCount.toLocaleString()} lượt xem</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} className="text-gold" />
                <span>Độ dài: ~8 phút đọc</span>
              </span>
            </div>
          </div>

          {/* Large Aspect Ratio Cover Image */}
          <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-gold/15 shadow-md bg-charcoal">
            <img
              src={article.coverImage}
              alt={article.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {/* Soft decorative shadow at bottom of image */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-charcoal/50 to-transparent"></div>
          </div>

          {/* Bold Intro block excerpt */}
          <div className="p-5 md:p-6 bg-charcoal/5 border-l-4 border-gold rounded-r-lg font-serif italic text-charcoal/80 text-base md:text-lg leading-relaxed text-justify shadow-sm">
            {article.excerpt}
          </div>

          {/* Render Body paragraphs */}
          <div className="markdown-body pt-4 space-y-4 font-sans text-charcoal/80 leading-relaxed">
            {renderContent(article.content)}
          </div>

          {/* Optional PDF Downloader trigger, as requested in core specs */}
          {article.pdfUrl && (
            <div className="mt-10 p-6 bg-charcoal text-ivory rounded-lg border border-gold/20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,106,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,106,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
              <div className="space-y-1 text-center md:text-left relative z-10">
                <h4 className="font-serif font-bold text-gold text-base">Tài Liệu PDF Lưu Trữ Toàn Văn</h4>
                <p className="text-ivory/60 text-xs">Tải bản đầy đủ có độ phân giải cao cùng sơ đồ thiết kế chi tiết.</p>
              </div>
              <a
                href={article.pdfUrl}
                download
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Hệ thống đang mô phỏng tải tệp tin PDF: ${article.pdfUrl}\nChức năng tải thật sẽ được kích hoạt khi kết nối với máy chủ.`);
                }}
                className="shrink-0 flex items-center space-x-2 bg-gold hover:bg-gold/90 text-charcoal font-mono font-bold text-xs uppercase tracking-wider px-5 py-3 rounded border border-gold transition-all duration-300 relative z-10 cursor-pointer"
                id="btn-download-pdf"
              >
                <FileText size={14} />
                <span>Tải tài liệu PDF</span>
              </a>
            </div>
          )}

        </div>

        {/* Right Side: Editorial Sidebar (4 cols) */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Metadata Card */}
          <div className="p-6 bg-charcoal-light text-ivory rounded-lg border border-gold/15 space-y-5 shadow-lg">
            <div className="flex items-center space-x-2 border-b border-gold/10 pb-3">
              <Award size={16} className="text-gold" />
              <h4 className="font-serif font-bold text-xs uppercase tracking-widest text-gold">Phi Long Archive</h4>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div className="flex justify-between py-1.5 border-b border-gold/5">
                <span className="text-ivory/50">MÃ SỐ TÀI LIỆU:</span>
                <span className="text-gold font-bold">PL-ARC-{article.id.toUpperCase()}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-gold/5">
                <span className="text-ivory/50">CHUYÊN MỤC:</span>
                <span className="text-ivory font-bold">{article.category}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-gold/5">
                <span className="text-ivory/50">XUẤT BẢN:</span>
                <span className="text-ivory font-bold">{article.publishedAt}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-gold/5">
                <span className="text-ivory/50">TRẠNG THÁI:</span>
                <span className="text-emerald-500 font-bold uppercase">ĐÃ LƯU TRỮ</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-ivory/50">LƯỢT XEM:</span>
                <span className="text-ivory font-bold">{article.viewCount.toLocaleString()}</span>
              </div>
            </div>

            {/* Quick Share option */}
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Đã sao chép liên kết bài viết vào khay nhớ tạm!");
              }}
              className="w-full flex items-center justify-center gap-2 border border-gold/30 hover:border-gold hover:bg-gold/10 text-gold font-mono font-bold text-xs uppercase tracking-wider py-2.5 transition-all duration-300 cursor-pointer"
              id="btn-share-article"
            >
              <Share2 size={13} />
              <span>Chia sẻ liên kết</span>
            </button>
          </div>

          {/* Tags cloud */}
          <div className="p-6 bg-charcoal-light text-ivory rounded-lg border border-gold/15 space-y-4 shadow-lg">
            <h4 className="font-serif font-bold text-xs uppercase tracking-widest text-gold border-b border-gold/10 pb-3">Từ Khóa Lưu Trữ</h4>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-charcoal text-gold border border-gold/20 font-mono text-[10px] uppercase px-2.5 py-1 rounded-sm tracking-wider hover:border-gold transition-colors duration-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Editorial integrity quote */}
          <div className="p-6 bg-charcoal text-center text-ivory rounded-lg border-2 border-gold/30 relative">
            <p className="font-serif italic text-gold text-sm mb-2">“Tôn vinh giá trị thực của mô hình chiến lược”</p>
            <p className="text-[10px] font-mono text-ivory/40">Ban Biên Tập Phi Long Studio</p>
          </div>

        </div>

      </div>

      {/* Bottom Related Articles Section */}
      <RelatedArticles
        currentArticleId={article.id}
        categorySlug={article.categorySlug}
        articles={articles}
        onSelectArticle={onSelectArticle}
      />
    </article>
  );
}
