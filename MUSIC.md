# Adding Music to Your Birthday Website 🎵

The website now includes a beautiful, minimalist music player! Here's how to add your music file.

## Quick Start

1. **Get your music file** (MP3 format recommended)
2. **Rename it** to `birthday-song.mp3`
3. **Place it** in the `public/music/` folder
4. **Done!** The music player will automatically find and play it

## Detailed Instructions

### Step 1: Prepare Your Music File

Choose a song that's special to you and Jasmin! Common options:
- A romantic song
- Your wedding song
- Her favorite song
- A happy birthday song
- An instrumental piece

**Recommended format**: MP3 (best compatibility)
**Also supported**: WAV, OGG, M4A

### Step 2: Create the Music Folder

```bash
mkdir -p public/music
```

Or manually:
1. Go to the `public` folder
2. Create a new folder called `music`

### Step 3: Add Your Music File

1. Copy your music file into `public/music/`
2. Rename it to exactly: `birthday-song.mp3`

Your folder structure should look like:
```
jasmin-33rd-bday/
├── public/
│   ├── images/         # Your 33 photos
│   └── music/
│       └── birthday-song.mp3  # Your music file here!
├── src/
└── ...
```

### Step 4: Test It

```bash
npm run dev
```

Open the website and you should see the music player in the bottom-right corner!

## Music Player Features

### Controls Available:
- ✅ **Auto-Play** - Music attempts to start automatically after welcome screen
- ✅ **Play/Pause** - Click the gold button to control playback
- ✅ **Volume Control** - Hover over speaker icon
- ✅ **Progress Bar** - Shows current position in song
- ✅ **Time Display** - Shows elapsed/total time
- ✅ **Auto Loop** - Song repeats automatically
- ✅ **Animated Waves** - Visual indicator when playing

### Browser Autoplay Policy:
⚠️ **Important**: Modern browsers (Chrome, Safari, Firefox) have strict autoplay policies:
- **May work**: On desktop after user has interacted with the site before
- **Usually blocked**: On mobile devices and first-time visits
- **Fallback**: If blocked, user can click the play button to start music
- **Why**: Browsers prevent websites from auto-playing sound without user permission

The website will **try** to autoplay, but if the browser blocks it, the play button will be ready for the user to click.

### Design:
- **Position**: Fixed bottom-right corner
- **Style**: Minimalist glass-morphism effect
- **Responsive**: Adapts to mobile screens
- **Non-intrusive**: Doesn't block content

## Using a Different Filename?

If you want to use a different filename, edit `src/MusicPlayer.jsx`:

```javascript
<audio
  ref={audioRef}
  src="/music/your-song-name.mp3"  // Change this
  loop
  preload="metadata"
/>
```

## Free Music Sources (Royalty-Free)

If you need background music:
- **YouTube Audio Library** - free, no attribution needed
- **Pixabay Music** - free royalty-free music
- **FreePD** - public domain music
- **Incompetech** - free with attribution

## Converting Audio Files

If your file isn't in MP3 format:
- Use **Online Audio Converter** (online-audio-converter.com)
- Or use **Audacity** (free software)
- Convert to MP3 for best compatibility

## Troubleshooting

### Music Player Shows But No Sound?

1. **Check file location**: Must be `public/music/birthday-song.mp3`
2. **Check filename**: Case-sensitive, must match exactly
3. **Check file format**: MP3 is most compatible
4. **Browser console**: Look for audio loading errors
5. **Volume**: Make sure it's not muted in the player

### Music Doesn't Autoplay?

This is normal browser behavior for user protection:

**Expected behavior:**
1. Site loads → Welcome screen shows (5 seconds)
2. Main content appears → Music tries to autoplay
3. If browser allows it → Music starts automatically ✅
4. If browser blocks it → User clicks play button 🎵

**To increase autoplay success:**
- Visit the site on desktop browsers (better autoplay support)
- Once you've interacted with the site, refreshing will often allow autoplay
- On mobile: User will almost always need to tap play (browser restriction)

**This is a feature, not a bug!** It prevents annoying auto-playing ads and respects user preferences.

### File Size Too Large?

Large audio files slow down loading:
- **Recommended**: 3-5 MB (3-5 minute song)
- **Maximum**: 10 MB
- **Compress**: Use lower bitrate (128kbps is fine)

## Deployment Note

When deploying to Vercel:
1. ✅ Music file in `public/music/` will be automatically deployed
2. ✅ Path `/music/birthday-song.mp3` works on production
3. ✅ No additional configuration needed

Just make sure to commit the music file:
```bash
git add public/music/birthday-song.mp3
git commit -m "Add birthday music"
git push
```

## Advanced: Multiple Songs Playlist

Want to add multiple songs? You can modify `MusicPlayer.jsx` to include a playlist array and add next/previous buttons. This requires some React knowledge.

---

Enjoy the music! 🎶✨
