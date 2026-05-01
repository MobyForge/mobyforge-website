create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamp with time zone not null default now()
);

alter table public.contact_submissions enable row level security;

create policy "Anyone can submit a contact message"
on public.contact_submissions
for insert
to anon, authenticated
with check (true);
