/**
 * Accessible Interactive Controller for Desktop Mega Menu & Full-Screen Mobile Nav
 * Supports:
 * - Hover with intent/grace delay
 * - Click & Space/Enter toggle
 * - Keyboard ArrowDown / Tab / Escape navigation
 * - Outside click closing without interfering with search modal
 * - Full-screen mobile overlay with scroll locking and focus restoration
 * - Reduced motion aware
 */
export function initNavigation(): void {
  const siteHeader = document.getElementById('site-header');
  if (!siteHeader) return;
  if (siteHeader.dataset.navInitialized === 'true') return;
  siteHeader.dataset.navInitialized = 'true';

  const megaContainer = document.getElementById('mega-menu-container');
  const navTriggers = siteHeader.querySelectorAll<HTMLButtonElement>('.nav-trigger');
  const megaPanels = siteHeader.querySelectorAll<HTMLElement>('.mega-panel');

  const mobileToggle = document.getElementById('mobile-nav-toggle') as HTMLButtonElement | null;
  const mobileDialog = document.getElementById('mobile-nav-dialog') as HTMLElement | null;
  const mobileClose = document.getElementById('mobile-nav-close') as HTMLButtonElement | null;

  let activeGroupId: string | null = null;
  let hoverTimeout: ReturnType<typeof setTimeout> | null = null;
  let previousActiveElement: HTMLElement | null = null;

  function openMegaMenu(groupId: string) {
    if (!megaContainer) return;
    if (hoverTimeout) clearTimeout(hoverTimeout);

    activeGroupId = groupId;
    megaContainer.hidden = false;

    navTriggers.forEach((btn) => {
      btn.setAttribute('aria-expanded', btn.dataset.group === groupId ? 'true' : 'false');
    });

    megaPanels.forEach((panel) => {
      panel.hidden = panel.dataset.panel !== groupId;
    });
  }

  function closeMegaMenu() {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    if (!activeGroupId || !megaContainer) return;

    activeGroupId = null;
    megaContainer.hidden = true;

    navTriggers.forEach((btn) => {
      btn.setAttribute('aria-expanded', 'false');
    });

    megaPanels.forEach((panel) => {
      panel.hidden = true;
    });
  }

  navTriggers.forEach((btn) => {
    const groupId = btn.dataset.group;
    if (!groupId) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (activeGroupId === groupId) {
        closeMegaMenu();
      } else {
        openMegaMenu(groupId);
      }
    });

    btn.addEventListener('mouseenter', () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
      hoverTimeout = setTimeout(() => openMegaMenu(groupId), 60);
    });

    btn.addEventListener('mouseleave', () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
      hoverTimeout = setTimeout(() => closeMegaMenu(), 180);
    });

    btn.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openMegaMenu(groupId);
        const targetPanel = document.getElementById(`mega-panel-${groupId}`);
        targetPanel?.querySelector<HTMLAnchorElement>('.mega-card')?.focus();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closeMegaMenu();
        btn.focus();
      }
    });
  });

  if (megaContainer) {
    megaContainer.addEventListener('mouseenter', () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
    });

    megaContainer.addEventListener('mouseleave', () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
      hoverTimeout = setTimeout(() => closeMegaMenu(), 180);
    });

    megaContainer.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        const currentGroup = activeGroupId;
        closeMegaMenu();
        if (currentGroup) {
          document.getElementById(`nav-trigger-${currentGroup}`)?.focus();
        }
      }
    });

    megaContainer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => closeMegaMenu());
    });
  }

  document.addEventListener('click', (e) => {
    const target = e.target as Node;
    if (activeGroupId && !siteHeader.contains(target)) {
      closeMegaMenu();
    }
  });

  siteHeader.addEventListener('focusout', (e) => {
    const next = e.relatedTarget as Node | null;
    if (activeGroupId && next && !siteHeader.contains(next)) {
      closeMegaMenu();
    }
  });

  function openMobileNav() {
    if (!mobileDialog || !mobileToggle) return;
    closeMegaMenu();

    previousActiveElement = document.activeElement as HTMLElement | null;
    mobileDialog.hidden = false;
    mobileDialog.classList.add('is-open');
    mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    mobileClose?.focus();
  }

  function closeMobileNav() {
    if (!mobileDialog || !mobileToggle) return;

    mobileDialog.classList.remove('is-open');
    mobileDialog.hidden = true;
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';

    if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
      previousActiveElement.focus();
    } else {
      mobileToggle.focus();
    }
  }

  if (mobileToggle && mobileDialog && mobileClose) {
    mobileToggle.addEventListener('click', () => {
      if (mobileToggle.getAttribute('aria-expanded') === 'true') {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    mobileClose.addEventListener('click', () => closeMobileNav());

    mobileDialog.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeMobileNav();
        return;
      }

      if (e.key === 'Tab') {
        const focusables = mobileDialog.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const list = Array.from(focusables).filter((el) => !el.hasAttribute('disabled') && el.offsetParent !== null);
        if (list.length === 0) return;

        const first = list[0]!;
        const last = list[list.length - 1]!;

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    mobileDialog.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => closeMobileNav());
    });

    mobileDialog.querySelectorAll('[data-open-search]').forEach((btn) => {
      btn.addEventListener('click', () => closeMobileNav());
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 960 && mobileDialog && !mobileDialog.hidden) {
      closeMobileNav();
    }
    if (window.innerWidth <= 960 && activeGroupId) {
      closeMegaMenu();
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
  } else {
    initNavigation();
  }
  document.addEventListener('astro:page-load', initNavigation);
}
