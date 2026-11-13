# herczeg.priv.hu

Plain HTML5 + one CSS file + a little JS. No build step: upload the folder as it is.

```
index.html                 picks /en/ or /hu/ from the browser language (or the visitor's earlier choice)
en/index.html              English home
hu/index.html              Hungarian home
en/tools/<slug>/           English tool pages
hu/eszkozok/<slug>/        Hungarian tool pages (same slug)
en/projects/<slug>/        English project pages (e.g. the Twin Blades port)
hu/projektek/<slug>/       Hungarian project pages
assets/style.css           all styling, Dracula colors (edit the variables in :root)
assets/site.js             remembers language choice, adds "Copy" buttons to code blocks
sitemap.xml, robots.txt, 404.html, favicon.svg
```

## Preview locally

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000/. Links start with `/`, so open the site through a server, not as a file.

## Adding a tool page

1. Copy an existing post folder in both languages, e.g.
   `en/tools/pop-launcher-remmina/` → `en/tools/<new-slug>/` and
   `hu/eszkozok/pop-launcher-remmina/` → `hu/eszkozok/<new-slug>/`.
2. In each new `index.html` update:
   - `<title>` and `<meta name="description">`: say what problem the tool solves, in words people would search for
   - `canonical`, both `hreflang` links, and `og:*` tags
   - the JSON-LD block (name, description, repo URL, language, license)
   - the `HU` / `EN` switch link in the header
   - the content
3. Add a card to the tool list on `en/index.html` and `hu/index.html`.
4. Add both URLs to `sitemap.xml` (copy an existing pair of `<url>` entries).
5. In the GitHub repo, set the **Website** field to the new page and add topics.
