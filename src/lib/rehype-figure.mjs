/**
 * Turns a Markdown image written on its own line with a title, e.g.
 *
 *   ![Alt text describing the image](./detail.jpg "Caption shown below")
 *
 * into <figure><img …><figcaption>Caption shown below</figcaption></figure>.
 * Images without a title are left untouched.
 */
export default function rehypeFigure() {
  return (tree) => walk(tree);
}

function isWhitespace(node) {
  return node.type === 'text' && !node.value.trim();
}

function walk(node) {
  if (!node.children) return;
  node.children = node.children.map((child) => {
    if (child.type === 'element' && child.tagName === 'p') {
      const content = child.children.filter((c) => !isWhitespace(c));
      const img = content[0];
      if (
        content.length === 1 &&
        img.type === 'element' &&
        img.tagName === 'img' &&
        img.properties &&
        img.properties.title
      ) {
        const caption = String(img.properties.title);
        delete img.properties.title;
        return {
          type: 'element',
          tagName: 'figure',
          properties: { className: ['article-figure'] },
          children: [
            img,
            {
              type: 'element',
              tagName: 'figcaption',
              properties: {},
              children: [{ type: 'text', value: caption }],
            },
          ],
        };
      }
    }
    walk(child);
    return child;
  });
}
