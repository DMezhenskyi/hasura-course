alter table "public"."photos"
           add constraint "photos_city_id_fkey"
           foreign key ("city_id")
           references "public"."cities"
           ("id") on update restrict on delete restrict;
