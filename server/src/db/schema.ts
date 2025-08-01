import { integer, pgTable, varchar } from "drizzle-orm/pg-core";


export const charactersTable = pgTable("characters", {
    id: integer().notNull(),
    name: varchar({length: 255}).notNull(),
    image: varchar({length: 255}).notNull(),
    jutsu: varchar({length: 255}).notNull(),
    birthday: varchar({length: 255}).notNull(),
    debut: varchar({length: 255}).notNull(),
    clan: varchar({length: 255}).notNull()
})