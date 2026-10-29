import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  getStoredTheme,
  setTheme,
  applyTheme,
  getSystemPreference,
  THEME_STORAGE_KEY,
} from '@/utils/theme';

describe('Mavzu Boshqaruvi va Saqlash (Theme Management)', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  describe('getStoredTheme', () => {
    it('Agar localStorage da qiymat boʻlmasa, standart holatda "system" qaytaradi', () => {
      vi.stubGlobal('window', {});
      vi.stubGlobal('localStorage', {
        getItem: vi.fn().mockReturnValue(null),
        setItem: vi.fn(),
      });

      expect(getStoredTheme()).toBe('system');
    });

    it('Saqlangan yaroqli qiymatni ("light" yoki "night") toʻgʻri qaytaradi', () => {
      vi.stubGlobal('window', {});
      vi.stubGlobal('localStorage', {
        getItem: vi.fn((key) => (key === THEME_STORAGE_KEY ? 'night' : null)),
        setItem: vi.fn(),
      });

      expect(getStoredTheme()).toBe('night');
    });

    it('Agar saqlangan qiymat yaroqsiz boʻlsa, "system" qaytaradi', () => {
      vi.stubGlobal('window', {});
      vi.stubGlobal('localStorage', {
        getItem: vi.fn().mockReturnValue('invalid-theme'),
        setItem: vi.fn(),
      });

      expect(getStoredTheme()).toBe('system');
    });
  });

  describe('getSystemPreference', () => {
    it('prefers-color-scheme dark boʻlsa "night" qaytaradi', () => {
      vi.stubGlobal('window', {
        matchMedia: vi.fn().mockReturnValue({ matches: true }),
      });

      expect(getSystemPreference()).toBe('night');
    });

    it('prefers-color-scheme dark boʻlmasa "light" qaytaradi', () => {
      vi.stubGlobal('window', {
        matchMedia: vi.fn().mockReturnValue({ matches: false }),
      });

      expect(getSystemPreference()).toBe('light');
    });
  });

  describe('applyTheme va setTheme', () => {
    it('Mavzuni documentElement atributlariga toʻgʻri qoʻllaydi', () => {
      const mockElement = {
        setAttribute: vi.fn(),
      };
      vi.stubGlobal('document', {
        documentElement: mockElement,
      });
      vi.stubGlobal('window', {
        matchMedia: vi.fn().mockReturnValue({ matches: false }),
      });

      applyTheme('night');

      expect(mockElement.setAttribute).toHaveBeenCalledWith('data-theme', 'night');
      expect(mockElement.setAttribute).toHaveBeenCalledWith('data-applied-mode', 'night');
    });

    it('System rejimida tizim qorongʻu boʻlsa applied-mode "night" boʻladi', () => {
      const mockElement = {
        setAttribute: vi.fn(),
      };
      vi.stubGlobal('document', {
        documentElement: mockElement,
      });
      vi.stubGlobal('window', {
        matchMedia: vi.fn().mockReturnValue({ matches: true }),
      });

      applyTheme('system');

      expect(mockElement.setAttribute).toHaveBeenCalledWith('data-theme', 'system');
      expect(mockElement.setAttribute).toHaveBeenCalledWith('data-applied-mode', 'night');
    });

    it('setTheme localStorage ga yozadi va qoʻllaydi', () => {
      const setItemMock = vi.fn();
      const mockElement = { setAttribute: vi.fn() };
      vi.stubGlobal('localStorage', { setItem: setItemMock });
      vi.stubGlobal('document', { documentElement: mockElement });
      vi.stubGlobal('window', { matchMedia: vi.fn().mockReturnValue({ matches: false }) });

      setTheme('light');

      expect(setItemMock).toHaveBeenCalledWith(THEME_STORAGE_KEY, 'light');
      expect(mockElement.setAttribute).toHaveBeenCalledWith('data-theme', 'light');
      expect(mockElement.setAttribute).toHaveBeenCalledWith('data-applied-mode', 'light');
    });
  });
});
