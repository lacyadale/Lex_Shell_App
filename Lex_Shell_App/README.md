# Lex Shell App

Welcome to the Lex Shell App — your universal app launcher and starter kit, now optimized for Vercel deployment.

## 🚀 Quick Deploy to Vercel

1. Upload all files to your repository
2. Connect your repo to Vercel
3. Deploy automatically - no build configuration needed!

## 📁 File Structure

```
lex-shell-app/
├── index.html              # Main UI entry point (moved to root)
├── LexAgent.js             # Enhanced Lex bootstrap interface
├── lex.config.json         # Config and bootstrapping commands
├── lex_memory.json         # Embedded assistant boot memory
├── vercel.json             # Vercel deployment configuration
├── package.json            # Project metadata (optional)
├── README.md               # This file
└── logs/                   # Log files for audit, sync, and debug
    ├── system_audit_log.md
    └── index_refresh_log.md
```

## ✨ What's New

### Fixed for Vercel:
- ✅ Moved `index.html` to root directory
- ✅ Added proper JavaScript integration
- ✅ Created `vercel.json` for optimal deployment
- ✅ Enhanced `LexAgent.js` with full functionality
- ✅ Added proper error handling and logging

### Enhanced Features:
- 🔧 **System Hooks**: Auto-injection of performance monitoring
- 📋 **Task Mapping**: Dynamic task registration system
- 📈 **Runtime Tracking**: Event logging and analytics
- 🎯 **Full-Stack Ready**: Prepared for scalable integration

## 🔧 Local Development

```bash
# Simple local server
python -m http.server 3000

# Or use any static file server
npx serve .
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub/GitLab/Bitbucket
2. Import to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Drag and drop the files
- **GitHub Pages**: Push to `gh-pages` branch
- **Firebase Hosting**: Use `firebase deploy`

## 🎯 System Integration

The Lex Agent is designed to align with lacycom1 principles:
- **System-wide optimization**: Performance monitoring and hooks
- **Scalability**: Modular task mapping and runtime tracking
- **Full-stack integration**: Ready for backend connectivity

## 📊 Usage

The app automatically initializes when loaded:

```javascript
// Access global Lex instance
console.log(lex.getStatus());

// Map custom tasks
lex.mapTask('customTask', function() {
  console.log('Custom task executed');
});

// Track events
lex.track('user_action', { type: 'click', target: 'button' });
```

## 🔍 Troubleshooting

- **Console errors**: Check browser developer tools
- **File not found**: Ensure all files are in the correct locations
- **Deployment issues**: Check Vercel deployment logs

---

*Ready for deployment and full-stack integration!*
