# Assets

## Figma Exports

Place Figma-exported assets in `figma/` with the following structure:

```
figma/
├── icons/       # SVG icons
├── images/      # PNG, JPG, WebP images
└── logos/       # Logo variants
```

### Export Guidelines

- **Icons**: Export as SVG for scalability and accessibility (can inject currentColor for theming)
- **Images**: Use 2x resolution for retina; optimize with tools like sharp or ImageOptim
- **Decorative images**: Use `alt=""` in component when rendered
- **Informative images**: Provide descriptive alt text in component
