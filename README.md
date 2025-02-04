# Personal Blog

A minimalist, trendsetting personal blog built with Jekyll and hosted on GitHub Pages.

## Prerequisites

Before you begin, ensure you have the following installed:
1. [Ruby](https://rubyinstaller.org/) (version 3.0.0 or higher)
2. [RubyGems](https://rubygems.org/pages/download)
3. [Git](https://git-scm.com/)

## Installation

1. Install Jekyll and Bundler:
```bash
gem install jekyll bundler
```

2. Clone this repository:
```bash
git clone <repository-url>
cd BlogCaNhan
```

3. Install dependencies:
```bash
bundle install
```

## Development

To start the development server:
```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000` to see your site.

## Project Structure

```
BlogCaNhan/
├── _config.yml          # Site configuration
├── _posts/             # Blog posts
├── _layouts/           # HTML templates
├── _includes/          # Reusable components
├── assets/             # Static files (CSS, images)
└── pages/             # Static pages
```

## Contributing

1. Create a new branch: `git checkout -b feature-name`
2. Make your changes
3. Commit: `git commit -m "Description of changes"`
4. Push: `git push origin feature-name`
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*Last updated: 2025-02-04*
