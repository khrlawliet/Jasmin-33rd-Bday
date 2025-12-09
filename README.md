# Jasmin - 33 Years of Love & Light 🎉

A sophisticated, minimalist single-page birthday greeting website built with React.js and Framer Motion, featuring 33 photos with heartfelt messages for Jasmin's 33rd birthday.

## Features

- 🎨 Minimalist, sophisticated design
- 🌈 **Dynamic background colors** - automatically adapts to each image's color palette
- 🎵 **Background music player** - elegant controls with play/pause, volume, and progress
- 📜 Scroll-based storytelling experience
- ↔️ Alternating left/right image and message layout
- ✨ Smooth scroll-triggered animations (Framer Motion)
- 📊 Progress bar showing scroll progress
- 📱 Fully responsive for all devices
- 🖼️ Lazy loading images for optimal performance
- 🎭 Elegant hover effects and transitions
- ♿ Accessibility features (reduced motion support)

## Design Philosophy

The website features a clean, minimalist aesthetic with:
- **Dynamic color palette**: Background automatically extracts and adapts to each image's dominant colors
- **Sophisticated base colors**: Black, grey, and gold accent for text and UI elements
- **Elegant typography**: Dancing Script for headings, Poppins for body
- **Generous whitespace**: Focus on content and images
- **Smooth animations**: Powered by Framer Motion
- **Scroll-driven experience**: Images reveal as you scroll down with color transitions

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. **(Optional) Add background music**:
   - See [MUSIC.md](MUSIC.md) for detailed instructions
   - Quick: Place an MP3 file named `birthday-song.mp3` in `public/music/`

4. Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`)

## Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## Deploy to Vercel

### Option 1: Using Vercel CLI (Fastest)

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to deploy

### Option 2: Using Vercel Website

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project"
5. Import your repository
6. Vercel will automatically detect the Vite configuration
7. Click "Deploy"

## How to Use the Website

- **Auto-Start**: Welcome screen automatically transitions after 5 seconds
- **Auto-Play Music**: Music attempts to start automatically (browser-dependent)
- **Scroll Down**: Images and messages appear with smooth animations
- **Color Magic**: Background color smoothly transitions to match each image's palette
- **Music Player**: Control music with play/pause button in bottom-right
- **Volume Control**: Hover over speaker icon to adjust volume
- **Alternating Layout**: Images alternate between left and right sides
- **Progress Bar**: Top of page shows scroll progress
- **Hover Effects**: Images zoom slightly on hover
- **Mobile Friendly**: Stacks vertically on smaller screens

## Project Structure

```
jasmin-33rd-bday/
├── public/
│   ├── images/         # 33 photos (served from root)
│   └── music/          # Background music (optional)
│       └── birthday-song.mp3
├── src/
│   ├── App.jsx         # Main app component with scroll animations
│   ├── App.css         # Minimalist styling
│   ├── MusicPlayer.jsx # Music player component
│   ├── imageData.js    # Image paths and messages
│   └── main.jsx        # React entry point
├── MUSIC.md            # Music setup instructions
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
└── vercel.json         # Vercel deployment config
```

## Technologies Used

- **React 18** - UI framework
- **Framer Motion** - Animation library for smooth transitions
- **ColorThief** - Intelligent color extraction from images
- **Vite** - Build tool
- **CSS3** - Styling with modern features
- **Google Fonts** - Dancing Script & Poppins
- **Intersection Observer API** - Smart viewport detection

## Performance Features

- Lazy loading images for faster initial load
- Optimized scroll animations
- Responsive images
- Minimal bundle size
- Progressive enhancement

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

---

Made with 💖 for the most amazing woman in the world

December 09, 2025
