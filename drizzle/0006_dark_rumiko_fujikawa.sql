CREATE TABLE `public.attendance` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`user_id` integer NOT NULL,
	`date` text NOT NULL,
	`session_id` integer NOT NULL,
	FOREIGN KEY (`session_id`) REFERENCES `public.sessions`(`id`) ON UPDATE no action ON DELETE no action
);
