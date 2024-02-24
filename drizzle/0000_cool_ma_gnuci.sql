CREATE TABLE `public.wods` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`created_by` text,
	`content` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `public.wods_id_unique` ON `public.wods` (`id`);