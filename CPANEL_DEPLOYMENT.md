# cPanel Deployment Guide

This guide will help you deploy your React application on cPanel and fix the white page issue.

## Issue: White Page on Reload

The white page issue occurs because:

1. cPanel doesn't know how to handle React Router routes
2. Direct URL access or page reloads fail
3. Server tries to find files that don't exist

## Solution Steps:

### 1. Build Your Application

```bash
npm run build
```

### 2. Upload Files to cPanel

1. **Upload the entire `dist` folder** to your cPanel public_html directory
2. **Upload the `.htaccess` file** to the same directory
3. **Ensure all files are in the correct location**

### 3. File Structure on cPanel

Your cPanel public_html should look like this:

```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── [hash].js
│   ├── [hash].css
│   └── [hash].png
└── other static files...
```

### 4. .htaccess Configuration

The `.htaccess` file handles React Router routing:

```apache
RewriteEngine On

# Handle React Router - redirect all requests to index.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [QSA,L]

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

### 5. Vite Configuration

Your `vite.config.ts` is already configured correctly:

```typescript
export default defineConfig({
  base: '/', // This is correct for cPanel
  // ... other config
});
```

### 6. React Router Configuration

Your React Router is configured correctly with `createBrowserRouter`.

## Troubleshooting Steps:

### If you still see a white page:

1. **Check Browser Console:**

   - Open Developer Tools (F12)
   - Look for JavaScript errors
   - Check Network tab for failed requests

2. **Verify File Upload:**

   - Ensure all files from `dist` folder are uploaded
   - Check file permissions (usually 644 for files, 755 for folders)

3. **Test .htaccess:**

   - Try accessing a non-existent route
   - It should redirect to your app instead of showing 404

4. **Check cPanel Settings:**
   - Ensure Apache is enabled
   - Check if mod_rewrite is enabled
   - Verify your domain points to the correct directory

### Common Issues and Solutions:

#### Issue 1: 404 Errors

**Solution:** Ensure `.htaccess` file is uploaded and Apache mod_rewrite is enabled

#### Issue 2: Assets Not Loading

**Solution:** Check that all files from `dist/assets` folder are uploaded

#### Issue 3: Routes Not Working

**Solution:** Verify `.htaccess` file is in the root directory (public_html)

#### Issue 4: Slow Loading

**Solution:** The `.htaccess` includes compression and caching rules

## Testing Your Deployment:

1. **Homepage:** `https://yourdomain.com/`
2. **Contact Page:** `https://yourdomain.com/GreenYasin/contact`
3. **Career Page:** `https://yourdomain.com/GreenYasin/career`
4. **Direct URL Access:** Try accessing any route directly
5. **Page Reload:** Reload any page - it should work

## Additional Tips:

1. **Clear Browser Cache:** Hard refresh (Ctrl+F5) after deployment
2. **Check File Permissions:** Files should be 644, folders 755
3. **Monitor Error Logs:** Check cPanel error logs if issues persist
4. **Test on Different Browsers:** Ensure cross-browser compatibility

## If Problems Persist:

1. **Contact Hosting Provider:** Ask if mod_rewrite is enabled
2. **Check cPanel Version:** Some older versions may have issues
3. **Alternative Solution:** Consider using HashRouter instead of BrowserRouter

The `.htaccess` file and updated Vite configuration should resolve the white page issue on cPanel deployment.
