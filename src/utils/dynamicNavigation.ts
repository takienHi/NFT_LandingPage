/* -------------------------------------------------------------------------- */
/*                      is children page active checking                      */
/* -------------------------------------------------------------------------- */

export function isChildrenPageActive(path: any, match: any) {
  if (path && match) {
    if (path === match) {
      return true;
    }
    return false;
  }
  return false;
}

/* -------------------------------------------------------------------------- */
/*                       is parent page active checking                       */
/* -------------------------------------------------------------------------- */
export function isParentPageActive(pages: any, path: any) {
  if (pages) {
    return pages.some((page: any) => page.path === path);
  }
  return false;
}
