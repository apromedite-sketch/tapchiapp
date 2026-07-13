/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Article = {
  id: string;
  title: string;
  slug: string;
  category: "Lục Quân" | "Hải Quân" | "Không Quân" | "Khác";
  categorySlug: "luc-quan" | "hai-quan" | "khong-quan" | "khac";
  coverImage: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  viewCount: number;
  ranking: number; // 1-10 rankings for home page top 10 lists
  tags: string[];
  pdfUrl?: string;
  isFeatured?: boolean;
  isNew?: boolean;
};

export type CategoryInfo = {
  name: "Lục Quân" | "Hải Quân" | "Không Quân" | "Khác";
  slug: "luc-quan" | "hai-quan" | "khong-quan" | "khac";
  description: string;
  iconName: string;
};
