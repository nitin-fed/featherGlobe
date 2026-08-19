---
name: eat-style-from-image
description: Restyle the EA Transfers page (featherGlobe /eat route) to match a reference image the user provides — use when asked to reskin, retheme, or restyle the EAT/EATransfers page based on a screenshot, mockup, or photo.
---

# Restyle EA Transfers from a reference image

The EAT page (`featherGlobe/src/App/EATransfers/EATransfers.js`, route `/eat`) already
supports swappable CSS themes: a `theme` state variable drives a dynamic
`import()` of one of `featherGlobe/src/assets/css/styles_<theme>.css`
(currently `styles_default.css`, `styles_xmas.css`, `styles_newyear.css`),
selected via buttons at the top of the page. This skill adds a **new theme
file derived from a reference image** rather than hand-picking colors, and
wires it into that existing switcher — it does not rewrite page structure or
JSX layout, only the CSS.

## 1. Get the reference image

The user provides an image path (screenshot, mockup, brand photo, mood
board). Read it with the Read tool — Claude can view images directly, no
external color-extraction tool is needed. Look for:

- **Background treatment**: solid color, gradient, or photo/texture
- **Primary accent color**: the color used for CTAs/buttons/highlights
- **Secondary accent**: a complementary color for secondary UI elements
- **Text/heading color(s)** and how they sit against the background
- **Overall mood**: whether type looks bold/playful vs. formal, corners
  sharp vs. rounded, high-contrast vs. soft/muted

Translate these into concrete CSS values (hex/rgb colors, gradient stops,
border-radius, font-weight) — don't leave them as vague descriptions when
writing the CSS in step 3.

## 2. Confirm the theme name and scope

Ask the user (unless already stated) what to call the new theme, e.g.
`styles_<name>.css` — pick a short kebab-case name describing the image
(`styles_ocean.css`, `styles_autumn.css`). **Do not overwrite
`styles_default.css`** unless the user explicitly says to replace the
default look; the existing pattern is additive (add a theme + switcher
button), matching how `xmas`/`newyear` were added.

## 3. Write the new CSS file

Create `featherGlobe/src/assets/css/styles_<name>.css`. Use
`styles_xmas.css` as the structural template — it's the most complete
example of every selector the page actually themes — and reuse
`styles_default.css` for any selector xmas doesn't override. Copy the full
selector set below and substitute values from the extracted palette; don't
invent new selectors, since JSX doesn't reference them and they'll be dead
CSS. Key selectors to retheme:

| Selector | Controls |
|---|---|
| `.eatransfers` | base text color |
| `.eatransfers > .main` | page background (image or color/gradient) |
| `.eatransfers .pageTitle` | header title color/weight |
| `.customHeader` | sticky header background |
| `.topMenu`, `.topMenu a`, `.topMenu a:hover` | nav link colors |
| `.phoneBox` | phone/email banner border + gradient |
| `.typography .p1`, `.p2` | large hero headline text |
| `.quote` | hero quote line (font-family stays `landasans` unless a new `@font-face` is added) |
| `.tabs`, `.activeTab`, `.inActiveTab`, `.tabsContainer` | booking-form tab styling |
| `.transferFormComponents div/input` | form field chrome |
| `.buttonBox > button`, `.resetButton`, `.submitButton`, `.viaButton` | buttons |
| `.eatransfersBody` | About/Services/Footer section background |
| `.aboutus p`, `.imagesWrapped`, `.imagesWrappedRight`, `.address`, `.footer p` | body copy sections |

If the image doesn't suggest a background photo/texture, set
`.eatransfers > .main` to a solid `background-color` or CSS `linear-gradient`
instead of a `background-image` — don't fabricate a background asset URL
that doesn't exist in `src/assets/eat/`.

## 4. Wire the theme into the switcher

In `featherGlobe/src/App/EATransfers/EATransfers.js`:

- Add an `else if (theme === "<name>")` branch next to the existing
  `christmas`/`newyear`/`default` branches, importing the new CSS file.
- Add a matching button next to the existing theme buttons:
  `<button kind="primary" onClick={() => setTheme("<name>")}>&nbsp;<Label></button>`

Keep the edit minimal — don't refactor the existing (partly commented-out)
theme-loading logic while doing this.

## 5. Preview before reporting done

Per this repo's UI-change convention, don't just claim success — verify
visually:

```
npm start          # from featherGlobe/
```

Open `http://localhost:3000/eat`, click the new theme button, and confirm
the page actually reflects the reference image's palette/mood. Check the
browser console for CSS import errors (typo'd filename is the most common
failure).
