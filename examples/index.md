# Heading Level 1

## Heading Level 3 (heading-increment)

Some text with a bare URL: [https://example.com](https://example.com) (no-bare-urls)

## Heading Level 3 (no-duplicate-headings)

Empty link here: []() (no-empty-links)

Empty image here: ![]() (no-empty-images, require-alt-text)

Reversed image syntax: \[reversed image syntax]!(/path/image.jpg) (no-reversed-media-syntax)

Reversed link syntax: \[reversed link syntax]\[ (no-reversed-media-syntax)

Link with invalid reference: \[broken link]\[broken-ref] (no-missing-label-refs)

Link fragment with missing heading: [Invalid fragment](#non-existent-heading) (no-missing-link-fragments)

Another H1 heading:

# Another Heading Level 1 (no-multiple-h1)

Missing space after hash:
\##Invalid Heading (no-missing-atx-heading-space)

```
console.log('no language specified');
```

| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   | Cell 3 | (table-column-count)

[duplicate]: https://example.com
[duplicate]: https://example.com/again (no-duplicate-definitions)

[empty]:  (no-empty-definitions)

[unused]: https://unused.com (no-unused-definitions)

Reference to [non-existent-label] (no-invalid-label-refs)

<div>HTML content</div> (no-html)

````
