# 1. Functional Components

A **Functional Component** is a JavaScript function that accepts **props** as input and returns **JSX** to describe what should be displayed on the screen. It is the modern and recommended way of creating React components because it is simpler, easier to read, and supports React Hooks such as `useState`, `useEffect`, and `useContext`. Since the introduction of Hooks in React 16.8, functional components have become the standard approach for building React applications.

Functional components are lightweight, reusable, and easy to test. They help developers organize applications into small, independent UI pieces that can be combined to build complex interfaces. Today, almost all new React projects use functional components instead of class components because they provide the same capabilities with less code and better readability.

### Example

```jsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}

export default Welcome;
```

---

# 2. Class Components

A **Class Component** is an ES6 JavaScript class that extends `React.Component` and implements a mandatory `render()` method to return JSX. Before React Hooks were introduced, class components were the primary way to manage state and lifecycle methods such as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

Although class components are still supported, they are generally used only in older React projects. Modern React development prefers functional components because Hooks provide state management and lifecycle functionality with less code, making applications easier to understand, maintain, and test.

### Example

```jsx
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Welcome to React!</h1>;
  }
}

export default Welcome;
```

---

# 3. Component Naming

React components should always be named using **PascalCase**, where the first letter of every word is capitalized, such as `UserProfile`, `ProductCard`, or `LoginForm`. React distinguishes components from regular HTML elements based on their naming convention. If the name starts with a lowercase letter, React treats it as a native HTML tag instead of a custom component.

Meaningful and descriptive component names improve code readability and maintainability, especially in large applications. Component names should clearly represent their purpose or functionality, making it easier for developers to understand and reuse them throughout the project.

### Example

✅ Correct

```jsx
function UserProfile() {
  return <h2>User Profile</h2>;
}
```

❌ Incorrect

```jsx
function userProfile() {
  return <h2>User Profile</h2>;
}
```

---

# 4. Component Composition

**Component Composition** is the practice of building complex user interfaces by combining multiple smaller, reusable components. Instead of creating one large component containing all the logic and UI, React encourages developers to divide the application into independent components that work together.

Composition promotes code reuse, improves maintainability, and follows React's philosophy of building applications from small building blocks. Parent components can include child components and pass data to them using props, making the application modular and easier to scale.

### Example

```jsx
function Header() {
  return <h1>My Website</h1>;
}

function Footer() {
  return <footer>© 2026</footer>;
}

function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
```

---

# 5. Reusable Components

A **Reusable Component** is a component that is designed once and can be used multiple times throughout an application with different data. Instead of duplicating similar UI code, developers create a generic component and customize its behavior using props.

Reusable components reduce code duplication, simplify maintenance, and improve consistency across the application. If the component's design changes, developers only need to update it in one place, and all instances automatically reflect the changes.

### Example

```jsx
function Button({ text }) {
  return <button>{text}</button>;
}

function App() {
  return (
    <>
      <Button text="Login" />
      <Button text="Register" />
      <Button text="Logout" />
    </>
  );
}
```

---

# 6. Nested Components

A **Nested Component** is a component that is rendered inside another component. React applications are built as a hierarchy of parent and child components, where larger components are composed of smaller nested components to create complex user interfaces.

Nested components improve code organization by separating different parts of the UI into independent units. The parent component controls the overall structure, while child components handle specific sections, making the application easier to understand, test, and maintain.

### Example

```jsx
function Header() {
  return <h1>Dashboard</h1>;
}

function Dashboard() {
  return (
    <div>
      <Header />
      <p>Welcome User</p>
    </div>
  );
}
```

---

# 7. Component Separation

**Component Separation** is the practice of dividing a large component into multiple smaller components, where each component is responsible for a single task or piece of the user interface. This follows the **Single Responsibility Principle (SRP)**, making components easier to manage.

Separating components improves readability, reusability, debugging, and testing. Instead of creating one large file containing navigation, content, and footer, developers create separate components for each section and combine them in the main component.

### Example

Instead of this:

```jsx
App
 ├── Navigation
 ├── Sidebar
 ├── Content
 └── Footer
```

Create separate components:

```jsx
<Navigation />
<Sidebar />
<Content />
<Footer />
```

Then use them inside:

```jsx
function App() {
  return (
    <>
      <Navigation />
      <Sidebar />
      <Content />
      <Footer />
    </>
  );
}
```

---

# 8. Smart vs Presentational Components

A **Smart Component** (also called a **Container Component**) is responsible for managing business logic, state, API calls, and data handling. A **Presentational Component** (also called a **UI Component**) focuses only on displaying data received through props and does not contain business logic. This separation keeps the application organized and easier to maintain.

Although modern React often uses Hooks instead of the traditional container pattern, the concept remains valuable. Separating logic from presentation makes components more reusable, easier to test, and simpler to understand. Smart components handle *how data works*, while presentational components handle *how data looks*.

### Example

**Presentational Component**

```jsx
function UserCard({ name }) {
  return <h2>{name}</h2>;
}
```

**Smart Component**

```jsx
function App() {
  const user = "Anuj";

  return <UserCard name={user} />;
}
```

### Difference

| Smart Component          | Presentational Component       |
| ------------------------ | ------------------------------ |
| Manages state            | No state (or minimal UI state) |
| Handles API calls        | No API calls                   |
| Contains business logic  | Only displays UI               |
| Passes data using props  | Receives data using props      |
| Focuses on functionality | Focuses on appearance          |

