# Todo Project Plan

## Core functionality

- [ ] Create a `Project` factory function that owns a collection of todos.
- [ ] Add methods to create, edit, delete, and select projects.
- [ ] Create a `Todo` factory function for title, description, due date, priority, notes, and completion status.
- [ ] Add project methods to create, edit, delete, complete, and reorder its todos.
- [ ] Choose a default project for new todos.
- [X] Install `date-fns` for formatting and manipulating todo due dates:
  ```bash
  npm install date-fns
  ```
- [ ] Import and use the needed `date-fns` functions when displaying or comparing due dates.
- [ ] Create one main application-state object containing all projects and their todos.
- [ ] On startup, check `localStorage` for saved application state.
- [ ] If saved data exists, retrieve it and convert it with `JSON.parse()`.
- [ ] If no saved data exists, create a fresh state with a default project.
- [ ] Rebuild projects and todos through their factory functions after parsing so their methods are restored.
- [ ] Keep application state separate from rendering and DOM code.

## Module organization

- [ ] Use `state.js` to own and export the main application-state object.
- [X] Use `Project.js` for the Project factory.
- [ ] Use `Todo.js` for the Todo factory.
- [ ] Use `storage.js` for saving and loading `localStorage` data.
- [ ] Use `dom.js` for rendering state and updating the interface.
- [ ] Use `index.js` as the application entry point that initializes the app and connects the modules.

## DOM and UI

- [ ] Create DOM/controller modules that read application state and render it.
- [ ] Keep factory functions free of DOM queries, event listeners, and HTML generation.
- [ ] Build the project list, todo list, todo details, and forms.
- [ ] Add event handlers that update state, then re-render the affected UI.
- [ ] Add responsive styling using the Catppuccin Mocha palette below.

## Persistence and polish

- [ ] Save the complete application-state object to `localStorage` with `JSON.stringify()` whenever data changes.
- [ ] Load saved data during startup before rendering the UI.
- [ ] Handle missing, invalid, or empty saved data without crashing.
- [ ] Validate required form fields and display useful feedback.
- [ ] Remove test data and console errors before finishing.

## Preview-mode checklist

- [ ] The app loads without errors.
- [ ] A user can create, edit, complete, and delete a todo.
- [ ] A user can create, select, edit, and delete a project.
- [ ] Todos remain assigned to the correct project.
- [ ] Refreshing the page preserves saved data.
- [ ] Forms validate correctly and close/reset as expected.
- [ ] The layout works on both narrow and wide screens.
- [ ] Buttons, inputs, completed todos, and selected projects have clear visual states.
- [ ] Keyboard focus and readable color contrast are maintained.

## Catppuccin Mocha color scheme

```css
:root {
  --ctp-mocha-rosewater: #f5e0e6;
  --ctp-mocha-flamingo: #f2cdcd;
  --ctp-mocha-pink: #f5c2e7;
  --ctp-mocha-mauve: #cba6f7;
  --ctp-mocha-red: #f38ba8;
  --ctp-mocha-maroon: #eba0ac;
  --ctp-mocha-peach: #fab387;
  --ctp-mocha-yellow: #f9e2af;
  --ctp-mocha-green: #a6e3a1;
  --ctp-mocha-teal: #94e2d5;
  --ctp-mocha-sky: #89dceb;
  --ctp-mocha-sapphire: #74c7ec;
  --ctp-mocha-blue: #89b4fa;
  --ctp-mocha-lavender: #b4befe;
  --ctp-mocha-text: #cdd6f4;
  --ctp-mocha-subtext1: #bac2de;
  --ctp-mocha-subtext0: #a6adc8;
  --ctp-mocha-overlay2: #9399b2;
  --ctp-mocha-overlay1: #7f849c;
  --ctp-mocha-overlay0: #6c7086;
  --ctp-mocha-surface2: #585b70;
  --ctp-mocha-surface1: #45475a;
  --ctp-mocha-surface0: #313244;
  --ctp-mocha-base: #1e1e2e;
  --ctp-mocha-mantle: #181825;
  --ctp-mocha-crust: #11111b;
}
```

Suggested usage: `base` for the main background, `mantle`/`crust` for panels, `surface0`/`surface1` for controls, `text` for primary text, `subtext0` for secondary text, `blue` for actions, `green` for completed states, and `red` for destructive actions.
