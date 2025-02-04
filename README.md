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

## Image Optimization

This blog includes an automated image optimization pipeline that processes images for various screen sizes and formats. The optimization script:

1. Creates multiple sizes of each image (thumbnail, small, medium, large)
2. Converts images to modern formats (WebP) with JPEG fallback
3. Optimizes image quality while maintaining visual fidelity
4. Generates responsive images for better performance

### Using the Image Optimizer

1. Place your original images in `assets/images/original/`
2. Run the optimization script:
   ```bash
   npm install         # First time only
   npm run optimize-images
   ```
3. The script will create optimized versions in `assets/images/`

### Image Sizes

- Thumbnail: 150px wide
- Small: 300px wide
- Medium: 600px wide
- Large: 1200px wide

### Using Optimized Images in Posts

Use the following HTML pattern for responsive images:

```html
<picture>
    <source
        srcset="/assets/images/large/image.webp 1200w,
                /assets/images/medium/image.webp 600w,
                /assets/images/small/image.webp 300w"
        sizes="(max-width: 1200px) 100vw, 1200px"
        type="image/webp">
    <source
        srcset="/assets/images/large/image.jpeg 1200w,
                /assets/images/medium/image.jpeg 600w,
                /assets/images/small/image.jpeg 300w"
        sizes="(max-width: 1200px) 100vw, 1200px"
        type="image/jpeg">
    <img
        src="/assets/images/large/image.jpeg"
        alt="Image description"
        loading="lazy"
        width="1200"
        height="800">
</picture>
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
