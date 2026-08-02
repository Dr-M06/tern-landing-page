# Tern

Public site: landing, privacy, and terms.

```
index.html
privacy/
terms/
robots.txt
sitemap.xml
llms.txt
_headers
```

Static HTML — crawlable by Googlebot and AI crawlers (`robots.txt` allows them).

```sh
python3 -m http.server 8000
```

```sh
npx wrangler pages deploy .
```

If behind Cloudflare, set AI Crawl Control to **Allow** for Search/Agent bots
so the edge does not override `robots.txt`.
