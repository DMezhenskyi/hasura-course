INSERT INTO public.cities (id, name) VALUES (1, 'Vienna');
INSERT INTO public.cities (id, name) VALUES (2, 'Kyiv');
INSERT INTO public.cities (id, name) VALUES (3, 'Novopskov');
SELECT pg_catalog.setval('public.cities_id_seq', 3, true);
