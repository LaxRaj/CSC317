# GitHub Pages Deployment Guide

## Quick Setup Instructions

### 1. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** (in the repository navigation bar)
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**

### 2. Verify Deployment
- GitHub will provide a URL like: `https://yourusername.github.io/CSC317/`
- Wait 2-3 minutes for the initial deployment
- Visit the URL to see your portfolio landing page

### 3. Final Portfolio Access
Your final portfolio will be accessible at:
```
https://yourusername.github.io/CSC317/assignments/final/
```

### 4. Testing Checklist
- [ ] Root page loads correctly (`https://yourusername.github.io/CSC317/`)
- [ ] Final portfolio loads (`https://yourusername.github.io/CSC317/assignments/final/`)
- [ ] Calculator works (`https://yourusername.github.io/CSC317/assignments/final/calculator.html`)
- [ ] Recipe platform link works (external link to Render)
- [ ] All navigation links function properly
- [ ] Responsive design works on mobile devices

## Troubleshooting

### Common Issues
1. **404 Error**: Check file paths and ensure files are committed to main branch
2. **CSS/JS Not Loading**: Verify relative paths in HTML files
3. **Images Missing**: Ensure images are in the correct directory and committed
4. **Links Broken**: Use relative paths, not absolute local paths

### File Structure Verification
Ensure your repository has this structure:
```
CSC317/
├── index.html (landing page)
├── README.md
├── assignments/
│   └── final/
│       ├── index.html (main portfolio)
│       ├── calculator.html
│       ├── SUBMISSION.md
│       ├── README.md
│       ├── styles/
│       ├── scripts/
│       └── images/
```

## Final Submission URLs
When submitting, provide these URLs:
- **Repository**: `https://github.com/yourusername/CSC317`
- **Live Site**: `https://yourusername.github.io/CSC317/assignments/final/`

## Notes
- Changes may take a few minutes to appear on the live site
- GitHub Pages only serves public repositories (free accounts)
- Ensure all commits are pushed to the main branch 