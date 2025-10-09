import { InferSelectModel } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const postsTable = sqliteTable('posts', {
  id: text('id').primaryKey(),
  slug: text('slug').unique(),
  title: text('title').notNull(),
  author: text('author').notNull(),
  excerpt: text('excerpt').notNull(),
  content: text('content').notNull(),
  coverImageUrl: text('cover_Image_Url').notNull(),
  published: integer('published', {mode: 'boolean'}).notNull(),
  createdAt: text('created_at').notNull(),
  updatedAt: text('update_at').notNull(),
})

export type PostTableSelectMode = InferSelectModel<typeof postsTable>
export type PostsTableInsertMode = InferSelectModel<typeof postsTable>