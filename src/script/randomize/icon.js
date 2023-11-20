export function randomIcon() {
    const faviconDir = '/svg/';
    const faviconFiles = ['key.svg', 'heart.svg ', 'sun.svg', 'sparkles.svg ']; // Add more .svg files as needed
    const randomIndex = Math.floor(Math.random() * faviconFiles.length);
    const randomFavicon = faviconFiles[randomIndex];
    const faviconPath = faviconDir + randomFavicon;
    const link = document.querySelector('link[rel="icon"]');
    link.href = faviconPath;
  }