# Dynamic Background Color Feature 🌈

## How It Works

The website features an intelligent dynamic background color system that automatically adapts to each image's color palette as you scroll through the gallery.

## Technical Implementation

### 1. Color Extraction
- Uses **ColorThief** library to analyze each image
- Extracts the dominant color from each photo
- Converts colors to lighter, pastel versions for better readability
- Applies a sophisticated lightening algorithm:
  ```
  Original RGB → Add 100 to each channel → Average with white
  Result: Soft, pastel background colors
  ```

### 2. Scroll Detection
- Uses **Intersection Observer API** for efficient viewport detection
- Triggers when 50% of an image section is visible
- Optimized with margin offsets to prevent rapid switching
- Minimal performance impact

### 3. Smooth Transitions
- **Framer Motion** handles color transitions
- 1.5-second smooth easing between colors
- Uses cubic bezier curves for natural feel
- No jarring color jumps

### 4. Adaptive UI
- Header and footer use semi-transparent backgrounds
- Backdrop blur effects for glass-morphism look
- Text remains readable on all background colors
- Progress bar maintains visibility

## User Experience Benefits

✨ **Immersive**: Each photo gets its own color atmosphere
🎨 **Cohesive**: Colors naturally complement each image
📖 **Storytelling**: Color transitions enhance the narrative flow
💫 **Subtle**: Light pastels don't overpower the content
🎯 **Focused**: Draws attention to the current image

## Color Processing Pipeline

```
1. Image loads → ColorThief extracts dominant RGB
2. RGB values lightened for background use
3. Color stored in state by image ID
4. Intersection Observer watches scroll position
5. When image enters view → background color updates
6. Framer Motion animates the transition
7. Result: Smooth, beautiful color changes
```

## Fallback Behavior

- If color extraction fails: Falls back to clean white
- Ensures website always looks good
- No broken states or error screens

## Performance Optimization

- Colors extracted once per image (cached)
- Lazy loading prevents unnecessary processing
- Intersection Observer is highly efficient
- Smooth 60fps animations

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- Backdrop filters with -webkit- prefix for Safari

---

This feature creates a unique, personalized experience where each memory has its own visual atmosphere!
