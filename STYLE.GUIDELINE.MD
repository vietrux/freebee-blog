# E2B.dev Design & Style Guidelines

## 1. Core Identity & Vibe
*   **Theme:** "Light Mode" Native. Clean white backgrounds with bold black typography.
*   **Aesthetic:** Developer-centric, technical, retro-terminal inspired, minimalist.
*   **Inspiration:** E2B.dev, retro computing terminals, modern DevTools with vintage flair.
*   **Key Characteristics:**
    *   High contrast (black on white)
    *   Monospace/retro fonts for headings
    *   Orange accent color for CTAs and highlights
    *   Clean grid-based card layouts
    *   ASCII/terminal-inspired decorative elements

## 2. Typography
*   **Heading Font:** `JetBrains Mono` or `IBM Plex Mono` (Monospace)
    *   Usage: Headings, navigation, labels, buttons
    *   Style: Bold, uppercase for section labels like `[ USE CASES ]`
*   **Body Font:** `Inter` or `IBM Plex Sans` (Sans-serif)
    *   Usage: Body text, descriptions, paragraphs
*   **Weights:**
    *   Regular (400): Body text
    *   Medium (500): UI elements, navigation
    *   Bold (700): Headings, stats numbers, CTAs

## 3. Color Palette (Light Mode)

### Backgrounds & Surfaces
| Token | HSL Value | Hex | Description |
| :--- | :--- | :--- | :--- |
| `--background` | `0 0% 100%` | `#ffffff` | Main page background (Pure White) |
| `--card` | `0 0% 100%` | `#ffffff` | Card background (White) |
| `--card-alt` | `0 0% 98%` | `#fafafa` | Alternate card / hover state |
| `--muted` | `0 0% 96%` | `#f5f5f5` | Secondary backgrounds |

### Text & Content
| Token | HSL Value | Hex | Description |
| :--- | :--- | :--- | :--- |
| `--foreground` | `0 0% 0%` | `#000000` | Primary text (Black) |
| `--muted-foreground` | `0 0% 40%` | `#666666` | Secondary text, descriptions |
| `--primary-foreground` | `0 0% 100%` | `#ffffff` | Text on primary buttons (White) |

### Borders & Inputs
| Token | HSL Value | Hex | Description |
| :--- | :--- | :--- | :--- |
| `--border` | `0 0% 88%` | `#e0e0e0` | Component borders (Light grey) |
| `--border-strong` | `0 0% 0%` | `#000000` | Strong borders, active states |
| `--input` | `0 0% 96%` | `#f5f5f5` | Input fields background |
| `--ring` | `30 100% 50% / 0.3` | `rgba(255,136,0,0.3)` | Focus rings (Orange glow) |

### Accents & Highlights
| Token | HSL Value | Hex | Description |
| :--- | :--- | :--- | :--- |
| `--primary` | `0 0% 0%` | `#000000` | Primary button background (Black) |
| `--accent` | `30 100% 50%` | `#ff8800` | Orange accent (CTAs, highlights, badges) |
| `--accent-foreground` | `0 0% 0%` | `#000000` | Text on accent backgrounds |
| `--success` | `120 60% 40%` | `#339933` | Success states (Green checkmarks) |

### Featured/Highlighted Cards
| Token | HSL Value | Hex | Description |
| :--- | :--- | :--- | :--- |
| `--featured-bg` | `0 0% 0%` | `#000000` | Featured card background (Black) |
| `--featured-fg` | `0 0% 100%` | `#ffffff` | Featured card text (White) |
| `--featured-accent` | `30 100% 50%` | `#ff8800` | Featured accent (Orange) |

## 4. UI & Layout Components

### Shapes & Spacing
*   **Border Radius:** `0` or `0.25rem` (4px) - Minimal, boxy/retro feel
    *   Variable: `--radius`
*   **Container:**
    *   Centered with padding
    *   Max-width: `1400px`
    *   Padding: `2rem` (32px)
*   **Grid:** Clean 3-column or 2-column layouts for feature cards

### Navigation
*   **Style:** Horizontal with centered logo
*   **Active indicators:** Underline or bold text
*   **Dropdowns:** White background, black text, subtle shadow
*   **Colors:** Black text, orange on hover for links

### Buttons
*   **Primary:** Black background, white text, no border radius
*   **Secondary:** White background, black border, black text
*   **Accent/CTA:** Orange background, black or white text
*   **Hover:** Scale slightly (1.02) or color shift

### Cards (Feature Cards)
*   **Background:** White with thin grey border (`1px solid --border`)
*   **Layout:** Icon at top, title, description, CTA button
*   **Hover:** Subtle shadow or border darkening
*   **Padding:** `1.5rem` to `2rem`

### Stats Section
*   **Layout:** 3-column grid with large numbers
*   **Typography:** 
    *   Numbers: Very large (48-72px), bold
    *   Labels: Small, uppercase, monospace, muted color
*   **Separator:** Vertical lines between stats

### Labels/Tags
*   **Style:** Bracketed text like `[ USE CASES ]`, `[ NEW ]`
*   **Colors:** Orange text for highlights, muted for neutral

## 5. Technical Implementation (Tailwind CSS)

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        'border-strong': 'hsl(var(--border-strong))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          alt: 'hsl(var(--card-alt))',
        },
        featured: {
          DEFAULT: 'hsl(var(--featured-bg))',
          foreground: 'hsl(var(--featured-fg))',
        },
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm: 'calc(var(--radius) - 2px)',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'monospace'],
        sans: ['Inter', 'IBM Plex Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
```

## 6. Design Patterns

### Section Labels
```html
<span class="text-xs font-mono font-bold tracking-widest text-accent uppercase">
  [ USE CASES ]
</span>
```

### Headline with Highlight
```html
<h1 class="font-mono text-4xl font-bold">
  BUILT FOR <span class="bg-accent text-accent-foreground px-2">AI AGENTS</span>
</h1>
```

### Feature Card
```html
<div class="border border-border p-6 hover:border-foreground transition-colors">
  <div class="mb-4">[Icon]</div>
  <h3 class="font-mono font-bold text-lg mb-2">Feature Title</h3>
  <p class="text-muted-foreground text-sm mb-4">Description text</p>
  <button class="bg-primary text-primary-foreground px-4 py-2 font-mono text-sm">
    LEARN MORE
  </button>
</div>
```

### Stats Display
```html
<div class="grid grid-cols-3 divide-x divide-border text-center py-8">
  <div>
    <div class="text-5xl font-bold">88%</div>
    <div class="text-xs font-mono uppercase text-muted-foreground tracking-wider">
      OF FORTUNE 100 COMPANIES
    </div>
  </div>
</div>
```