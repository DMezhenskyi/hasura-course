
ALTER TABLE "public"."photos" ADD COLUMN "is_published" boolean NOT NULL DEFAULT true;

ALTER TABLE "public"."comments" ADD COLUMN "is_published" boolean NULL DEFAULT true;

ALTER TABLE "public"."comments" ADD COLUMN "reviewed_at" timestamptz NULL;
