import 'dotenv/config'
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const projectTable = sqliteTable('project', {
	id: int().primaryKey({ autoIncrement: true }),
	title: text().notNull(),
	content: text().notNull(),
	thumbnail: text().notNull(),
	link: text().notNull(),
	tech_stack: text().notNull(),
})
