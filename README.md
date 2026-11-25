# David Xie

Personal site published at <https://eruven.github.io>.

GitHub Pages builds this repository with Jekyll from the `main` branch. Pushing to `main` updates the site. There is no custom Actions workflow.

## Add a post

Create one Markdown file in `_posts`. The file name is the date plus a short title:

```text
_posts/YYYY-MM-DD-short-title.md
```

Start the file with this front matter, then write the post in Markdown:

```yaml
---
layout: post
title: "Post title"
date: 2026-11-25
description: "One plain-text sentence for the home page and search results."
---
```

The home page lists published posts newest first. `description` is optional. The layout prints the title, so start the body with the first paragraph, or with a heading at level 2.

Commit the file and push it to `main`. Pages rebuilds on that push. The new post is also added to the RSS feed at `/feed.xml`.

### Drafts

A post with `published: false` stays in `_posts` but is left off the site, the home page, and the feed. `_posts/2026-11-20-example-post.md` is a draft you can copy. It also shows the math and code formatting below.

### Math

Inline math uses a pair of dollar signs. A single `$` is left alone.

```markdown
The strokes gained on a shot is $$SG = E_{\text{start}} - E_{\text{end}} - 1$$.
```

Display math uses `$$` on its own lines, with a blank line before and after:

```markdown
$$
SG = E_{\text{start}} - E_{\text{end}} - 1 - p
$$
```

### Code

Use a fenced block and a language tag:

~~~markdown
```python
def strokes_gained(expected_start, expected_end, penalty=0):
    return expected_start - expected_end - 1 - penalty
```
~~~

If the post itself contains `{{` or `{%`, wrap that part in `{% raw %}` and `{% endraw %}` so Jekyll does not read it as a template.

## Other pages

- `about.md` — short bio
- `projects.md` — project list

## Preview locally

Use the `github-pages` gem so the local build matches GitHub Pages, including `jekyll-feed` and `jekyll-seo-tag`.

```bash
bundle install
bundle exec jekyll serve
```

Open <http://127.0.0.1:4000>. Drafts stay hidden unless you pass `--unpublished`.
