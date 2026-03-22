# Graphic Design Flier Portfolio Website

A modern, dark-themed flier portfolio website showcasing professional flier designs. Clean, simple, and focused on your flier work.

## Features

- 🎨 **Dark Theme with Vibrant Accents** - Modern color scheme with cyan, magenta, and green accents
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🎯 **Simple & Focused** - Dedicated to showcasing flier designs
- ✨ **Smooth Animations** - Engaging scroll animations and hover effects
- 💬 **Contact Form** - Email-integrated contact form for inquiries
- 🖼️ **Image Gallery** - Beautiful gallery layout for your flier portfolio

## File Structure

```
RANTS/
├── index.html          # Home page with featured fliers
├── portfolio.html      # Full flier gallery
├── about.html          # About your flier design expertise
├── contact.html        # Contact form for orders
├── styles.css          # All styling
├── script.js           # Interactivity & animations
├── README.md           # This file
└── [flier images].png  # Your flier designs
```

## Getting Started

1. **Open the website**: Open `index.html` in your web browser
2. **Update your contact information**: 
   - Replace `Your Name` with your name in all files
   - Update `your.email@example.com` with your email
   - Add your social media links
   - Update your phone number and location in contact.html
3. **Your fliers are ready**: All your flier images are automatically displayed!

## Included Fliers

The portfolio includes 18+ of your flier designs:
- Restaurant promotions (Chrissy's Cuisine)
- Real estate fliers (Rental properties)
- Event marketing (Valentine campaigns)
- Educational content (GH Truths series)
- Finance/Business (Bitcoin, Lending, PayPal)
- Technology (Starlink)
- Food & Beverage (CAKE)
- Seasonal campaigns (January)
- And more!

## Customization Guide

### Update Your Information

Find and replace in all HTML files:
- `Your Name` → Your actual name
- `your.email@example.com` → Your email address
- `+1 (234) 567-890` → Your phone
- Social media links (Instagram, LinkedIn, Dribbble)

### Add New Fliers

To add new fliers to your portfolio, edit `portfolio.html`:
1. Add a new portfolio item block:
```html
<div class="portfolio-item">
    <div class="portfolio-image" style="background: url('YOUR_IMAGE.png') center/cover;"></div>
    <div class="portfolio-info">
        <h3>Project Title</h3>
        <p>Category/Description</p>
    </div>
</div>
```
2. Replace `YOUR_IMAGE.png` with your image filename
3. Update the title and description

### Customize Colors

In `styles.css`, edit the `:root` variables:
```css
--primary-bg: #0a0e27;        /* Dark background */
--secondary-bg: #1a1f3a;      /* Menu/card background */
--accent-primary: #00d9ff;    /* Cyan highlights */
--accent-secondary: #ff006e;  /* Magenta highlights */
--accent-tertiary: #00ff88;   /* Green highlights */
```

### Change Fonts

In `styles.css`, update font-family:
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```
Try: 'Poppins', 'Inter', 'Montserrat', 'Roboto', etc.

## Browser Support

- ✓ Chrome (latest)
- ✓ Firefox (latest)
- ✓ Safari (latest)
- ✓ Edge (latest)
- ✓ Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment Options

Choose where to host your portfolio:

1. **GitHub Pages** - Free, easy integration
   - Push files to GitHub
   - Enable GitHub Pages in settings

2. **Netlify** - Free, drag & drop
   - Drag folder onto Netlify
   - Your site goes live instantly

3. **Vercel** - Fast, optimized
   - Connect your GitHub repo
   - Auto-deploys on updates

4. **Traditional Hosting** - Full control
   - Upload files via FTP
   - Works on any web host

## Making the Contact Form Work

The form currently opens your email client. For production deployment:

**Option 1: Use Formspree (Recommended)**
- Go to formspree.io
- Create a free account
- Update the form action in contact.html

**Option 2: Use Netlify Forms**
- Deploy on Netlify
- Form submissions handled automatically
- See results in Netlify dashboard

**Option 3: Backend Service**
- Use your hosting provider's form handler
- Or set up a simple Node.js backend

## Tips for Success

1. **Quality Images**: Your fliers are already high resolution - they look great!
2. **Mobile Optimized**: The layout automatically adjusts for phones and tablets
3. **Fast Loading**: Images are optimized and load quickly
4. **SEO Ready**: Update page titles and meta descriptions for search engines
5. **Professional**: The dark theme with vibrant accents looks modern and sleek

## Troubleshooting

**Images not showing?**
- Check filename spelling matches exactly
- Use relative paths (e.g., `Bitcoin.png` not `/images/Bitcoin.png`)
- Make sure images are in the same folder as HTML files

**Links not working?**
- Verify file names are correct (case-sensitive on some servers)
- Check that all pages are in the same directory

**Mobile menu not working?**
- Ensure `script.js` is loaded in all HTML files
- Check browser console for errors (F12)

**Form not sending?**
- Update email address in contact.html
- Consider using Formspree or Netlify Forms for production

## Support

Need help? Check:
- The comments in each HTML file
- CSS variables for customization
- Browser console (F12) for errors

---

**Your flier portfolio is ready to showcase your work!** 🎨

Upload to the web and start getting clients! ✨
