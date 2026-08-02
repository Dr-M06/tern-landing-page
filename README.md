# Tern site

Product name **Tern**. Package / bundle ids stay `org.nomli.nlite` (unchanged).

```
index.html          landing
privacy/index.html  privacy policy
terms/index.html    terms of service
_headers            Cloudflare Pages headers + CSP
```

Three self-contained pages. CSS, icons, logo and script are inlined in each
file; the favicon is a data URI. **Every page is a single HTTP request** and
there are no external assets at all.

Contact for legal pages: **dev@niilox.com**.

## Preview locally

Links are absolute (`/`, `/privacy/`, `/terms/`), so `file://` won't resolve
them. Serve the folder:

    python3 -m http.server 8000

Then open http://localhost:8000

## Deploy

    npx wrangler pages deploy .

Hostname: [https://tern.niilox.com/](https://tern.niilox.com/). Advertise that
hostname only — no redirect chains on store privacy/terms URLs.

### Worth checking after the first deploy

1. **No redirects on any URL you publish.**

       curl -sI https://your-domain/privacy/ | head -1     # expect 200, not 301
       curl -sI https://your-domain/terms/ | head -1

2. **Store listings** must use the same privacy URL you publish here.

## Crawl / SEO

Static HTML is served as-is (no JS gate). Root files:

- `robots.txt` — allows Googlebot and major AI crawlers
- `sitemap.xml` — `/`, `/privacy/`, `/terms/`
- `llms.txt` — short summary for AI agents

If the site is behind Cloudflare, also set **AI Crawl Control** to Allow
for Search (and Agent if you want live answers). An edge Block overrides
`robots.txt`. After deploy, confirm:

```sh
curl -sI https://tern.niilox.com/robots.txt | head -1
curl -s https://tern.niilox.com/robots.txt | head
```

