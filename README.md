# Elena Filipova — Portfolio

Static portfolio site. The pages are Design Components (`.dc.html`) rendered by
the `support.js` runtime, styled with the Morana design system in `_ds/`.

## How to preview it locally

**You cannot open `index.html` by double-clicking it.** The runtime loads the
shared nav and footer with `fetch()`, and browsers block `fetch()` on `file://`
URLs. The page will render without its navigation and log CORS errors.

Serve the folder over HTTP instead:

| Platform | Do this |
| --- | --- |
| macOS | Double-click `serve.command` |
| Windows | Double-click `serve.bat` |
| Linux / terminal | `./serve.sh` |

Each starts a local web server and opens the site in your browser. Leave the
window open while browsing; press `Ctrl+C` to stop.

Manual equivalent:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

An internet connection is needed on first load: the runtime pulls React 18.3.1
from unpkg.com.

## Pages

| Page | File |
| --- | --- |
| Home | `index.html` |
| Projects | `Projects.dc.html` |
| Tools | `Tools.dc.html` |
| Credentials | `Credentials.dc.html` |
| Say hi | `Say Hi.dc.html` |

`SiteNav.dc.html` and `SiteFooter.dc.html` are shared components pulled into
every page. Edit them once and every page picks up the change.

## Topic filters

Projects and Credentials both filter by topic, and accept a deep link:

```
Projects.dc.html?topic=Accessibility-first
```

The topic must match one of the six values in the `TOPICS` array on those pages.
An unrecognised topic is ignored and the page falls back to showing everything.

Three topics currently have no case study behind them — Accessibility-first,
Behavioural design & gamification, and AI-era ways of working. Those filters show
an explanatory message pointing to the matching credential rather than a blank
page. Adding a project with the matching tag replaces the message automatically.

## Publishing

The site is served by GitHub Pages from the repository root. `.nojekyll` must
stay in place: without it Jekyll strips the `_ds/` directory and every
stylesheet and the component bundle 404s.
