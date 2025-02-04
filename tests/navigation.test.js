import { fireEvent } from '@testing-library/dom';

describe('Navigation', () => {
  // Setup before each test
  beforeEach(() => {
    document.body.innerHTML = `
      <nav class="site-nav">
        <button class="nav-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <span class="hamburger"></span>
        </button>
        <ul class="nav-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/archive">Archive</a></li>
          <li><a href="/tags">Tags</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    `;

    // Initialize navigation
    const script = document.createElement('script');
    script.textContent = `
      document.addEventListener('DOMContentLoaded', () => {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navToggle && navMenu) {
          navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
          });
        }
      });
    `;
    document.body.appendChild(script);

    // Trigger DOMContentLoaded
    const event = new Event('DOMContentLoaded');
    document.dispatchEvent(event);
  });

  // Clean up after each test
  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('navigation toggle button exists', () => {
    const toggle = document.querySelector('.nav-toggle');
    expect(toggle).toBeTruthy();
    expect(toggle.getAttribute('aria-label')).toBe('Toggle navigation menu');
  });

  test('navigation menu exists with correct links', () => {
    const menu = document.querySelector('.nav-menu');
    expect(menu).toBeTruthy();
    
    const links = menu.querySelectorAll('a');
    expect(links).toHaveLength(4);
    
    const hrefs = Array.from(links).map(link => link.getAttribute('href'));
    expect(hrefs).toEqual(['/', '/archive', '/tags', '/about']);
  });

  test('clicking toggle button toggles menu visibility', () => {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');
    
    // Initial state
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(menu.classList.contains('active')).toBe(false);
    
    // Click to open
    fireEvent.click(toggle);
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(menu.classList.contains('active')).toBe(true);
    
    // Click to close
    fireEvent.click(toggle);
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(menu.classList.contains('active')).toBe(false);
  });

  test('menu is accessible via keyboard', () => {
    const toggle = document.querySelector('.nav-toggle');
    
    // Focus the toggle button
    toggle.focus();
    expect(document.activeElement).toBe(toggle);
    
    // Press Enter to open menu
    fireEvent.keyDown(toggle, { key: 'Enter', code: 'Enter' });
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    
    // Press Enter again to close menu
    fireEvent.keyDown(toggle, { key: 'Enter', code: 'Enter' });
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });
});
