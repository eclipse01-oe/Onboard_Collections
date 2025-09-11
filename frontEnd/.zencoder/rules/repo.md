# Repo Quick Reference

- **Framework**: React 19 + Vite 7
- **Router**: react-router-dom v7
- **State**: Zustand (installed, not shown in code yet)
- **Styling**: CSS modules (e.g., src/styles/onboard.module.css) + index.css
- **Icons**: react-icons
- **Payments**: @paystack/inline-js (installed)

## Scripts
- **dev**: vite
- **build**: vite build
- **preview**: vite preview
- **lint**: eslint .

## Entry Points
- **src/main.jsx**: mounts <App />
- **src/App.jsx**: defines routing

## Routing Conventions (react-router-dom v7)
- Use <Routes> with <Route path="..." element={<Component/>} />
- Wrap routes in <BrowserRouter>
- Use absolute paths in <Link to="/path">...

## Notable Paths
- **Onboarding**: src/onboarding/login.tsx, src/onboarding/signup.tsx
- **Styles**: src/styles/onboard.module.css

## Dev Tips
- Use absolute links (e.g., "/login") to avoid nested relative issues.
- Keep components imported without file extensions when possible (Vite resolves).
- React 19 + RRD v7 requires proper element prop usage on Route.
