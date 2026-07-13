/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { Article, CategoryInfo } from "../types";
import ArticleCard from "./ArticleCard";
import SearchInput from "./SearchInput";
import SortControl, { SortOption } from "./SortControl";
import { Shield, Waves, Plane, Sparkles, Inbox } from "lucide-react";

type CategoryGridProps = {
  category: CategoryInfo;
  articles: Article[];
  onSelectArticle: (slug: string) => void;
};

export default function CategoryGrid({ category, articles, onSelectArticle }: CategoryGridProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  // Filter and sort articles belonging to this specific category
  const processedArticles = useMemo(() => {
    // 1. Filter by category
    let list = articles.filter((item) => item.categorySlug === category.slug);

    // 2. Filter by search term
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      list = list.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.excerpt.toLowerCase().includes(q) ||
          item.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // 3. Sort
    list.sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      } else if (sortBy === "views") {
        return b.viewCount - a.viewCount;
      } else if (sortBy === "alphabetical") {
        return a.title.localeCompare(b.title, "vi");
      }
      return 0;
    });

    return list;
  }, [category.slug, articles, searchTerm, sortBy]);

  // Icon mapping
  const renderCategoryIcon = () => {
    const size = 36;
    const className = "text-gold";
    switch (category.slug) {
      case "luc-quan":
        return <Shield size={size} className={className} />;
      case "hai-quan":
        return <Waves size={size} className={className} />;
      case "khong-quan":
        return <Plane size={size} className={className} />;
      default:
        return <Sparkles size={size} className={className} />;
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Category Header Card */}
      <div className="bg-charcoal text-ivory p-6 md:p-10 rounded-lg border-b-2 border-gold/40 relative overflow-hidden shadow-lg">
        {/* Decorative Grid Overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,106,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,106,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              {renderCategoryIcon()}
              <h1 className="font-serif font-extrabold text-2xl md:text-4xl text-ivory tracking-wider">
                {category.name}
              </h1>
            </div>
            <p className="text-ivory/80 text-sm md:text-base max-w-2xl leading-relaxed font-sans text-justify">
              {category.description}
            </p>
          </div>

          {/* Stats count badge */}
          <div className="self-start md:self-center shrink-0 bg-gold/10 border border-gold/30 px-4 py-3 rounded text-center">
            <span className="block font-mono text-xl md:text-2xl font-black text-gold">
              {processedArticles.length}
            </span>
            <span className="block font-mono text-[9px] uppercase tracking-widest text-ivory/60 mt-1">
              Bài Viết Lưu Trữ
            </span>
          </div>
        </div>
      </div>

      {/* Control filters bar (Search & Sort) */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 py-4 border-b border-gold/10">
        <SearchInput value={searchTerm} onChange={setSearchTerm} placeholder={`Tìm trong mục ${category.name}...`} />
        <SortControl selected={sortBy} onChange={setSortBy} />
      </div>

      {/* Grid List rendering */}
      {processedArticles.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5">
          {processedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} onSelect={onSelectArticle} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-20 text-center space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto shadow-inner">
            <Inbox size={32} />
          </div>
          <h3 className="font-serif font-bold text-lg text-charcoal">
            Không tìm thấy kết quả nào
          </h3>
          <p className="text-charcoal/60 text-sm leading-relaxed">
            Chúng tôi không tìm thấy tài liệu nào khớp với từ khóa{" "}
            <span className="font-semibold text-charcoal">"{searchTerm}"</span> trong chuyên mục này. Hãy thử lại với từ khóa khác.
          </p>
          <button
            onClick={() => setSearchTerm("")}
            className="font-mono text-xs uppercase tracking-wider bg-charcoal text-ivory px-4 py-2 hover:bg-gold hover:text-charcoal transition-all duration-300 font-bold rounded"
            id="btn-reset-filters"
          >
            Đặt lại bộ lọc
          </button>
        </div>
      )}
    </div>
  );
}
