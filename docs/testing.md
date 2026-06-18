# Testing

## Running tests locally

**Watch mode** (re-runs on file save — use while developing):
```bash
npm test
```
Press `q` to exit.

**Single run** (same as CI):
```bash
npm run test:ci
```

## Where tests live
Each component has a `*.spec.ts` file next to it:
```
src/app/
  app.ts
  app.spec.ts   ← tests for app.ts
```

## Writing a test
Tests use Vitest + Angular's `TestBed`. A basic component test looks like:

```ts
it('should render the title', async () => {
  const fixture = TestBed.createComponent(App);
  await fixture.whenStable();
  const el = fixture.nativeElement as HTMLElement;
  expect(el.querySelector('h1')?.textContent).toContain('Atelier');
});
```

- `TestBed.createComponent` — mounts the component in a test environment
- `fixture.whenStable()` — waits for async rendering to settle
- `fixture.nativeElement` — gives you the real DOM to query

## Manual checklist
Things to verify in the browser that automated tests won't catch:

- [ ] App loads without errors after `npm start`
- [ ] No errors or warnings in the browser console (`F12 → Console`)
- [ ] Styles render as expected (layout, colours, typography)
- [ ] Navigation works if routes are defined
- [ ] Page title in the browser tab matches the current component
