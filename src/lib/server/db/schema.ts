import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"

export const user = sqliteTable("user", {
	id: text("id").primaryKey(),
	age: integer("age"),
	username: text("username").notNull().unique(),
	passwordHash: text("password_hash").notNull()
})

export type User = typeof user.$inferSelect

export const session = sqliteTable("session", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => user.id),
	expiresAt: integer("expires_at", { mode: "timestamp" }).notNull()
})

export type Session = typeof session.$inferSelect

export const keyValue = sqliteTable("key_value", {
	id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
	key: text("key").notNull().unique(),
	value: text("value").notNull()
})

export type KeyValue = typeof keyValue.$inferSelect

