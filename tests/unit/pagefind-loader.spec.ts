import { describe, it, expect } from 'vitest';
import { loadPagefind } from '../../src/utils/pagefind';

describe('Pagefind Client Loader (loadPagefind)', () => {
  it('Node / SSR muhitida xatoliksiz xavfsiz null qaytaradi', async () => {
    const result = await loadPagefind();
    expect(result).toBeNull();
  });
});
