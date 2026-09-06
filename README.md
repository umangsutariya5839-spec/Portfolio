# Umang Sutarsandhiya — portfolio

A dynamic portfolio site. Every word on the page comes from one content source, so the site
can be updated from a browser instead of a code editor.

## Run it

```bash
npm install
cp .env.example .env.local     # set ADMIN_PASSWORD at minimum
npm run dev                    # http://localhost:3000
```

Without `MONGODB_URI` the site uses `data/portfolio.json` and stores contact messages in
`data/messages.json`, so the complete frontend and backend work locally without MongoDB.

## Turn on the database

1. Create a free cluster at mongodb.com, add a database user, allow access from anywhere.
2. Put the connection string in `MONGODB_URI`.
3. Restart. The first save from `/admin` creates the `content` document; contact messages go
   into a `messages` collection.

## Edit the content

Go to `/admin`, enter `ADMIN_PASSWORD`, change anything, press **Save changes**. The home page
re-reads content on every request, so a refresh shows the edit. When MongoDB is not configured, saves update `data/portfolio.json` directly.

## Before it goes live

- [ ] Put the resume PDF at `public/resume.pdf` so the download button works.
- [ ] Fix the GitHub link. The resume says `github.com/dashboard`, which only works when you
      are logged in. Your public profile is `github.com/<your-username>`.
- [ ] Add the LinkedIn URL in `/admin` — the field is empty and the link stays hidden until
      it is filled.
- [ ] Add live and code links to the two projects. A recruiter who cannot click through has
      only your word for it.
- [ ] Change `ADMIN_PASSWORD` from the example value.

## Deploy to Vercel

```bash
git init && git add -A && git commit -m "Portfolio"
git remote add origin https://github.com/<username>/umang-portfolio.git
git push -u origin main
```

Import the repo at vercel.com, add `MONGODB_URI`, `MONGODB_DB` and `ADMIN_PASSWORD` under
Environment Variables, deploy. Note that the file system is read-only on Vercel, so the admin
panel needs the database there.

## Structure

```
app/
  page.js              home page, server-rendered from the content module
  admin/page.js        password-protected editor
  api/portfolio/       GET the content, PUT to update it
  api/contact/         contact form endpoint, with honeypot and rate limit
  api/auth/            admin cookie session
components/            one file per section
data/portfolio.json    the content, and the fallback when no database is set
lib/content.js         reads MongoDB first, JSON second
lib/mongodb.js         cached connection for serverless
```

## Design notes

Pine green and chalk, with a red dashed curve borrowed from the stitching on a softball as the
only recurring motif. Bricolage Grotesque sets the headings, Source Serif 4 the body. The
education section is the one timeline on the page, because education is genuinely a sequence.
