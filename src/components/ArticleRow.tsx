/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ChevronRight } from "lucide-react";
import { Article } from "../types";
import ArticleCard from "./ArticleCard";
import HorizontalCarousel from "./HorizontalCarousel";

type ArticleRowProps = {
  title: string;
  categorySlug: "luc-quan" | "hai-quan" | "khong-quan" | "khac";
  articles: Article[];
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
};

export default function ArticleRow({
  title,
  categorySlug,
  articles,
  onNavigate,
  onSelectArticle,
}: ArticleRowProps) {
  // 1. Filter articles matching this category
  const filtered = articles.filter((item) => item.categorySlug === categorySlug);

  // 2. Sort by ranking (1-10) ascending. If ranking is identical, sort by view count descending
  const sortedTop10 = filtered
    .sort((a, b) => {
      if (a.ranking !== b.ranking) {
        return a.ranking - b.ranking;
      }
      return b.viewCount - a.viewCount;
    })
    .slice(0, 10);

  const handleHeaderClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(`/${categorySlug}`);
  };

  return (
    <section className="py-10 border-b border-gold/10 last:border-b-0">
      {/* Row Header */}
      <div className="flex items-center justify-between mb-6 px-2">
        <a
          href={`#/${categorySlug}`}
          onClick={handleHeaderClick}
          className="group flex items-center space-x-2 text-charcoal cursor-pointer"
          id={`row-header-${categorySlug}`}
        >
          {/* Section title */}
          <h2 className="font-serif font-extrabold text-lg md:text-xl tracking-wider text-charcoal group-hover:text-gold transition-colors duration-200">
            {title}
          </h2>
          
          {/* Arrow */}
          <ChevronRight
            size={20}
            className="text-gold/60 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300"
          />
        </a>
        
        {/* Count Badge */}
        <span className="font-mono text-[10px] uppercase tracking-widest text-bronze font-medium bg-gold/10 px-2.5 py-1 rounded">
          Top 10 Lưu Trữ
        </span>
      </div>

      {/* Carousel */}
      {sortedTop10.length > 0 ? (
        <HorizontalCarousel>
          {sortedTop10.map((article, index) => (
            <ArticleCard
              key={article.id}
              article={article}
              ranking={index + 1} // Visual rating badge (1-10)
              onSelect={onSelectArticle}
            />
          ))}
        </HorizontalCarousel>
      ) : (
        <div className="py-12 text-center text-charcoal/40 font-serif text-sm">
          Chưa có bài viết lưu trữ trong mục này.
        </div>
      )}
    </section>
  );
}
