/**
 * useDocumentTitle - Sets document title for WCAG 2.4.2 (Page Titled)
 * Each page should have a unique, descriptive title.
 */

import { useEffect } from 'react';

const BASE_TITLE = 'Budnew';

export function useDocumentTitle(title) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE;
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}
