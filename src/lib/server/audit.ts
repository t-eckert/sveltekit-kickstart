import { db } from "./db"
import { auditLog } from "./db/schema"
import type { AuditLog } from "./db/schema"

export interface AuditLogEntry {
	userId?: string
	action: string
	resource: string
	resourceId?: string
	details?: Record<string, any>
	ipAddress?: string
	userAgent?: string
}

export async function logAuditEvent(entry: AuditLogEntry): Promise<void> {
	try {
		await db.insert(auditLog).values({
			userId: entry.userId,
			action: entry.action,
			resource: entry.resource,
			resourceId: entry.resourceId,
			details: entry.details ? JSON.stringify(entry.details) : null,
			ipAddress: entry.ipAddress,
			userAgent: entry.userAgent,
			createdAt: new Date()
		})
	} catch (error) {
		console.error("Failed to log audit event:", error)
		// Don't throw - audit logging shouldn't break the main flow
	}
}

export async function getAuditLogs(limit: number = 100): Promise<AuditLog[]> {
	try {
		return await db
			.select()
			.from(auditLog)
			.orderBy(auditLog.createdAt)
			.limit(limit)
	} catch (error) {
		console.error("Failed to fetch audit logs:", error)
		return []
	}
}

export async function getAuditLogsByUser(userId: string, limit: number = 50): Promise<AuditLog[]> {
	try {
		return await db
			.select()
			.from(auditLog)
			.where(auditLog.userId === userId)
			.orderBy(auditLog.createdAt)
			.limit(limit)
	} catch (error) {
		console.error("Failed to fetch user audit logs:", error)
		return []
	}
}

export async function getAuditLogsByResource(resource: string, resourceId?: string, limit: number = 50): Promise<AuditLog[]> {
	try {
		let query = db
			.select()
			.from(auditLog)
			.where(auditLog.resource === resource)

		if (resourceId) {
			query = query.where(auditLog.resourceId === resourceId)
		}

		return await query
			.orderBy(auditLog.createdAt)
			.limit(limit)
	} catch (error) {
		console.error("Failed to fetch resource audit logs:", error)
		return []
	}
}