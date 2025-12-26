# Portfolio Website

A modern, responsive portfolio website to showcase skills and projects. Built with HTML5, CSS3, and vanilla JavaScript.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling and mobile-friendly hamburger menu
- **Sections Include**:
  - Hero/Home section with introduction
  - About section with personal information
  - Skills section showcasing technical abilities
  - Projects section displaying portfolio work
  - Contact section with multiple contact methods
- **Performance Optimized**: Fast loading and smooth animations
- **Easy to Customize**: Simple HTML structure, easy to modify content

## 🚀 Live Demo

Once deployed, your portfolio will be accessible at:
- **GitHub Pages**: `https://[username].github.io/Portfolio/`

## 📁 Project Structure

```
Portfolio/
├── index.html      # Main HTML file
├── styles.css      # Stylesheet
├── script.js       # JavaScript functionality
└── README.md       # Documentation
```

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- JavaScript (ES6+)
- Font Awesome Icons

## 📦 Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/Vardxn/Portfolio.git
cd Portfolio
```

2. Open `index.html` in your browser:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Or simply open the file
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

3. Visit `http://localhost:8000` in your browser

### Customization

1. **Update Personal Information**:
   - Edit `index.html` to update your name, bio, and contact information
   - Replace placeholder project descriptions with your actual projects
   - Update social media links in the contact and footer sections

2. **Modify Styling**:
   - Edit `styles.css` to change colors, fonts, or layout
   - Color scheme is defined in CSS variables at the top of the file

3. **Add Your Projects**:
   - Replace the project placeholders in the Projects section
   - Add project images by replacing the placeholder divs
   - Update project links to your GitHub repositories and live demos

## 🌐 Deployment

### GitHub Pages (Recommended)

1. Go to your repository settings on GitHub
2. Navigate to **Pages** section
3. Under **Source**, select the branch to deploy (usually `main`)
4. Click **Save**
5. Your site will be published at `https://[username].github.io/Portfolio/`

### Other Hosting Options

This is a static website and can be hosted on:
- **Netlify**: Drag and drop deployment
- **Vercel**: Connect your GitHub repository
- **Cloudflare Pages**: Fast and free hosting
- **Any web server**: Upload files via FTP/SFTP

## 🎨 Customization Guide

### Colors

Update the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --text-color: #1f2937;
    /* ... other colors */
}
```

### Sections

To add or remove sections:
1. Add/remove section HTML in `index.html`
2. Add/remove corresponding navigation link
3. Add styling in `styles.css` if needed

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For any questions or suggestions, please reach out through the contact section on the website.

---

Made with ❤️ by Vardxn