```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```html
<!-- index.html -->
<div class="bg-gray-100">
  <div class="p-4">
    <p class="text-xl font-bold">Hello, world!</p>
  </div>
</div>
```