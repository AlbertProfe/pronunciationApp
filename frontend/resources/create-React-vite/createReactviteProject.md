# Create a Vite React project

To create a Vite React project, follow these steps:

1. Open your terminal and run one of the following commands:

```bash
npm create vite@latest my-react-app -- --template react
```

or

```bash
yarn create vite my-react-app --template react
```

or

```bash
pnpm create vite my-react-app --template react
```

or

```bash
bun create vite my-react-app --template react
```

2. Navigate to the project directory:

```bash
cd my-react-app
```

3. Install dependencies:

```bash
npm install
```

or use your preferred package manager (yarn, pnpm, or bun)

4. Start the development server:

```bash
npm run dev
```

This will scaffold a new Vite React project and start the development server. You can now open your browser and visit `http://localhost:5173` to see your React application[1].

## Additional Information

- Vite requires Node.js version 18+ or 20+[1].
- The project structure will be set up with React and its necessary dependencies.
- You can also use TypeScript by choosing the `react-ts` template instead of `react`[1].
- Vite provides fast Hot Module Replacement (HMR) for a smooth development experience[1].
- For production builds, use the command `npm run build`[1].

Remember to check the Vite documentation for more advanced configurations and features specific to React development.

Citations:
[1] https://vite.dev/guide/
