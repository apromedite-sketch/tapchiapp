/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Article } from "../types";
import { Eye, Calendar, Sparkles } from "lucide-react";

type ArticleCardProps = {
  key?: any;
  article: Article;
  ranking?: number; // Optional top-left ranking (1-10)
  onSelect: (slug: string) => void;
};

export default function ArticleCard({ article, ranking, onSelect }: ArticleCardProps) {
  // Format view count for premium aesthetic
  const formatViews = (views: number) => {
    if (views >= 1000) {
      return (views / 1000).toFixed(1) + "k";
    }
    return views.toString();
  };

  return (
    <motion.article
      onClick={() => onSelect(article.slug)}
      className="relative cursor-pointer flex flex-col h-full bg-charcoal group rounded-lg overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-300"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      aria-label={`Bài viết: ${article.title}`}
    >
      {/* 2:3 Poster Aspect Ratio Wrapper */}
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-charcoal">
        <img
          src={article.coverImage}
          alt={article.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Dark overlay at bottom for readable text */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-90"></div>

        {/* Prominent Ranking Number (only if provided, e.g. on home page top 10) */}
        {ranking !== undefined && (
          <div className="absolute top-0 left-0 p-3 select-none">
            <span className="font-mono text-5xl md:text-6xl font-black text-ivory/90 leading-none drop-shadow-[0_2px_12px_rgba(23,21,18,0.9)] tracking-tighter">
              {ranking}
            </span>
          </div>
        )}

        {/* Badges/Tags overlays in top-right */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end">
          {article.isFeatured && (
            <span className="bg-gold text-charcoal font-mono font-bold text-[9px] uppercase px-2 py-0.5 rounded-sm tracking-wider shadow">
              Nổi Bật
            </span>
          )}
          {article.isNew && (
            <span className="bg-emerald-600 text-ivory font-mono font-bold text-[9px] uppercase px-2 py-0.5 rounded-sm tracking-wider shadow">
              Mới
            </span>
          )}
          {article.viewCount > 10000 && (
            <span className="bg-charcoal/80 text-gold font-mono font-bold text-[9px] uppercase px-2 py-0.5 rounded-sm tracking-wider shadow border border-gold/20">
              Xem Nhiều
            </span>
          )}
        </div>

        {/* Category label at bottom-left */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-gold/15 text-gold border border-gold/20 font-mono text-[9px] uppercase px-2 py-0.5 rounded-sm tracking-widest backdrop-blur-sm">
            {article.category}
          </span>
        </div>
      </div>

      {/* Description / Content Body Area (placed underneath poster to avoid covering key details) */}
      <div className="p-4 flex flex-col justify-between flex-grow bg-charcoal-light">
        <div className="space-y-2">
          {/* Title */}
          <h3 className="font-serif font-bold text-sm text-ivory line-clamp-2 leading-snug group-hover:text-gold transition-colors duration-300">
            {article.title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-ivory/60 text-xs line-clamp-2 leading-relaxed font-sans">
            {article.excerpt}
          </p>
        </div>

        {/* Small metadata bottom row */}
        <div className="flex items-center justify-between pt-4 mt-auto border-t border-gold/10 text-[10px] font-mono text-ivory/40">
          <span className="flex items-center gap-1">
            <Calendar size={11} className="text-gold/40" />
            {article.publishedAt}
          </span>
          <span className="flex items-center gap-1">
            <Eye size={11} className="text-gold/40" />
            {formatViews(article.viewCount)} lượt xem
          </span>
        </div>
      </div>
    </motion.article>
  );
}
