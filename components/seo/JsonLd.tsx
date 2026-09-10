import * as React from 'react';

/**
 * Renders a JSON-LD block into the document. Server-rendered on purpose so the
 * markup is present in the initial HTML rather than injected after hydration —
 * crawlers read the first response, not the hydrated DOM.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // `data` is authored in this repo, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
