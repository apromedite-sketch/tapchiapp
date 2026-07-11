/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Article } from "../types";
import ArticleCard from "./ArticleCard";

type RelatedArticlesProps = {
  currentArticleId: string;
  categorySlug: "luc-quan" | "hai-quan" | "khong-quan" | "khac";
  articles: Article[];
  onSelectArticle: (slug: string) => void;
};

export default function RelatedArticles({
  currentArticleId,
  categorySlug,
  articles,
  onSelectArticle,
}: RelatedArticlesProps) {
  // Get other articles in the same category, sorted by viewCount, sliced to maximum 4
  const related = articles
    .filter((item) => item.categorySlug === categorySlug && item.id !== currentArticleId)
    .sort((a, b) => b.viewCount - a.viewCount)
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="pt-12 border-t border-gold/20 mt-16">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-serif font-extrabold text-lg md:text-2xl text-charcoal tracking-wider">
          Bài Viết Liên Quan
        </h3>
        <span className="font-mono text-[10px] text-bronze uppercase tracking-widest bg-gold/10 px-2 py-1 rounded">
          Cùng Chuyên Mục
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
        {related.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            onSelect={onSelectArticle}
          />
        ))}
      </div>
    </section>
  );
}
