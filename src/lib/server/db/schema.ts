import { pgTable, text, integer, serial, timestamp } from "drizzle-orm/pg-core"

export const user = pgTable("user", {
	id: text("id").primaryKey(),
	age: integer("age"),
	username: text("username").notNull().unique(),
	passwordHash: text("password_hash").notNull()
})

export type User = typeof user.$inferSelect

export const session = pgTable("session", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp("expires_at").notNull()
})

export type Session = typeof session.$inferSelect

export const keyValue = pgTable("key_value", {
	id: serial("id").primaryKey(),
	key: text("key").notNull().unique(),
	value: text("value").notNull()
})

export type KeyValue = typeof keyValue.$inferSelect

export const auditLog = pgTable("audit_log", {
	id: serial("id").primaryKey(),
	userId: text("user_id").references(() => user.id),
	action: text("action").notNull(),
	resource: text("resource").notNull(),
	resourceId: text("resource_id"),
	details: text("details"), // JSON string for additional data
	ipAddress: text("ip_address"),
	userAgent: text("user_agent"),
	createdAt: timestamp("created_at")
		.notNull()
		.defaultNow()
})

export type AuditLog = typeof auditLog.$inferSelect

export const feedback = pgTable("feedback", {
	id: serial("id").primaryKey(),
	userId: text("user_id").references(() => user.id),
	name: text("name"),
	email: text("email"),
	subject: text("subject").notNull(),
	message: text("message").notNull(),
	rating: integer("rating"), // 1-5 star rating (optional)
	status: text("status").notNull().default("open"), // open, reviewing, closed
	ipAddress: text("ip_address"),
	userAgent: text("user_agent"),
	createdAt: timestamp("created_at")
		.notNull()
		.defaultNow(),
	updatedAt: timestamp("updated_at")
})

export type Feedback = typeof feedback.$inferSelect
