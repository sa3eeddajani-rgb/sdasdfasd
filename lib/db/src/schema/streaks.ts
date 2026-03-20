import { pgTable, varchar, integer, date, timestamp } from "drizzle-orm/pg-core";

export const streaksTable = pgTable("streaks", {
  userId: varchar("user_id").primaryKey(),
  currentStreak: integer("current_streak").notNull().default(0),
  longestStreak: integer("longest_streak").notNull().default(0),
  lastReadDate: date("last_read_date"),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date()),
});

export type Streak = typeof streaksTable.$inferSelect;
export type InsertStreak = typeof streaksTable.$inferInsert;
