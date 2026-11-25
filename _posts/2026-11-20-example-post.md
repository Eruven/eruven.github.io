---
layout: post
title: "Example post"
date: 2026-11-20 09:00:00 -0500
published: false
description: Unpublished sample showing math and code formatting.
---

This file is an unpublished example. It is not listed on the site or in the RSS feed.
Copy it, set `published: true`, and replace this text when you add a real post.

Inline math sits in a sentence. The strokes gained on one shot is $$SG = E_0 - E_1 - 1$$.

A display formula, with a blank line before and after:

$$
SG_{\text{round}} = \sum_{i} \left( E(s_i) - E(s_{i+1}) - 1 - p_i \right)
$$

A fenced code block:

```python
def strokes_gained(expected_start, expected_end, penalty=0):
    """Strokes gained for a single shot."""
    return expected_start - expected_end - 1 - penalty
```
