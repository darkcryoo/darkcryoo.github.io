---
layout: default
title: About
---

<div class="about-page">
  <header class="about-header">
    <h1>About</h1>
    <div class="subtitle">A minimalist blog focused on content and readability</div>
  </header>

  <div class="about-content">
    ## The Blog

    This blog is a space for sharing thoughts, ideas, and experiences in a clean, distraction-free environment. The design philosophy emphasizes:

    - **Minimalism**: Focus on what matters most—the content
    - **Typography**: Carefully chosen fonts and spacing for optimal reading
    - **Simplicity**: Clean black and white design
    - **Performance**: Fast loading and responsive layout

    ## The Author

    I'm a writer and developer passionate about creating meaningful content and beautiful digital experiences. My interests include:

    - Web Development
    - Design Systems
    - Digital Minimalism
    - Technical Writing

    ## Contact

    Feel free to reach out through any of these channels:

    - Email: [your@email.com](mailto:your@email.com)
    - GitHub: [@username](https://github.com/username)
    - Twitter: [@handle](https://twitter.com/handle)

    ## Colophon

    This blog is built with:

    - [Jekyll](https://jekyllrb.com/) - Static site generator
    - System fonts for optimal performance
    - Markdown for content
    - GitHub Pages for hosting
  </div>
</div>

<style>
  .about-page {
    margin: var(--space-xl) 0;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  .about-header {
    text-align: center;
    margin-bottom: var(--space-xl);
  }

  .about-header h1 {
    margin-bottom: var(--space-sm);
  }

  .subtitle {
    color: var(--color-gray-medium);
    font-size: var(--text-lg);
  }

  .about-content {
    font-size: var(--text-lg);
    line-height: 1.7;
  }

  .about-content h2 {
    margin-top: var(--space-xl);
    margin-bottom: var(--space-md);
    font-size: var(--text-2xl);
  }

  .about-content p {
    margin-bottom: var(--space-md);
  }

  .about-content ul {
    list-style-type: none;
    padding-left: 0;
    margin: var(--space-md) 0;
  }

  .about-content li {
    margin: var(--space-xs) 0;
    padding-left: var(--space-md);
    position: relative;
  }

  .about-content li::before {
    content: "—";
    position: absolute;
    left: 0;
    color: var(--color-gray-medium);
  }

  .about-content a {
    border-bottom: 1px solid var(--color-gray-light);
    transition: all var(--transition-base);
  }

  .about-content a:hover {
    border-color: var(--color-black);
  }

  @media (max-width: 768px) {
    .about-content {
      font-size: var(--text-base);
    }
  }
</style>
