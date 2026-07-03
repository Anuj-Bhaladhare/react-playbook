# Phase 2: Components

Every React application is built from components.

* Functional Components
* Class Components (Interview Knowledge)
* Component Naming
* Component Composition
* Reusable Components
* Nested Components
* Smart vs Presentational Components
* Container Components
* Layout Components
* Higher Order Components (HOC)
* Render Props Pattern
* Compound Components


Great 👍 main ab tumhare format ke according sab answers de raha hoon.

---

# 1. Functional Components

## Answer

Functional components are simple JavaScript functions in React that return JSX (UI). They are the most commonly used type of components in modern React because they are easy to write, read, and maintain. With the introduction of Hooks, functional components can also manage state, lifecycle behavior, and side effects, which earlier was only possible in class components. They promote cleaner and more reusable code.

---

## Example

```jsx id="f1"
function Welcome() {
  return <h1>Welcome to React Functional Component!</h1>;
}

export default Welcome;
```

---

## Explanation

In this example, `Welcome` is a functional component that returns JSX. React renders this component wherever it is used.

---

# 2. Class Components (Interview Knowledge)

## Answer

Class components are ES6 classes in React that extend `React.Component`. They were widely used before hooks were introduced. Class components use a `render()` method to return JSX and manage state using `this.state`. They also support lifecycle methods like `componentDidMount`, `componentDidUpdate`, etc. Although still supported, they are now mostly replaced by functional components.

---

## Example

```jsx id="c1"
import React from "react";

class Welcome extends React.Component {
  render() {
    return <h1>Welcome to Class Component!</h1>;
  }
}

export default Welcome;
```

---

## Explanation

Here `Welcome` is a class component that uses `render()` method to display UI.

---

# 3. Component Naming

## Answer

In React, component names must always start with a capital letter. This is important because React treats lowercase names as HTML tags and capitalized names as custom components. Proper naming helps React distinguish between built-in elements and user-defined components, making the code more readable and structured.

---

## Example

```jsx id="n1"
function Header() {
  return <h1>My Website</h1>;
}

export default Header;
```

---

## Explanation

Since `Header` starts with a capital letter, React recognizes it as a component, not an HTML tag.

---

# 4. Component Composition

## Answer

Component composition is the practice of combining multiple small components to build a larger and more complex user interface. Instead of writing everything in one file, React encourages breaking UI into smaller reusable pieces and composing them together. This makes the application modular and easier to maintain.

---

## Example

```jsx id="cc1"
function Header() {
  return <h1>Header Section</h1>;
}

function Footer() {
  return <p>Footer Section</p>;
}

function App() {
  return (
    <div>
      <Header />
      <h2>Main Content</h2>
      <Footer />
    </div>
  );
}
```

---

## Explanation

Here `Header` and `Footer` are composed inside `App` to build a full page.

---

# 5. Reusable Components

## Answer

Reusable components are components that can be used multiple times in different parts of an application with different data. Instead of creating duplicate code, we create one component and pass different inputs (props) to reuse it efficiently. This improves code reusability and reduces duplication.

---

## Example

```jsx id="r1"
function Button(props) {
  return <button>{props.text}</button>;
}

function App() {
  return (
    <div>
      <Button text="Login" />
      <Button text="Signup" />
      <Button text="Logout" />
    </div>
  );
}
```

---

## Explanation

The same `Button` component is reused with different text values.

---

# 6. Nested Components

## Answer

Nested components are components that are placed inside other components. This means one component is rendered inside another component, creating a parent-child relationship. React applications are often made up of deeply nested components to represent complex UI structures.

---

## Example

```jsx id="nc1"
function User() {
  return <h3>User Profile</h3>;
}

function App() {
  return (
    <div>
      <h1>Dashboard</h1>
      <User />
    </div>
  );
}
```

---

## Explanation

`User` component is nested inside `App` component.

---

# 7. Smart vs Presentational Components

## Answer

Smart components (Container components) handle logic, data fetching, and state management. Presentational components focus only on UI and display data received via props. This separation improves code clarity and reusability.

---

## Example

```jsx id="sp1"
// Presentational Component
function UserList({ users }) {
  return users.map(user => <li key={user}>{user}</li>);
}

// Smart Component
function App() {
  const users = ["Amit", "Rahul", "Neha"];

  return <UserList users={users} />;
}
```

---

## Explanation

`App` handles data (smart), while `UserList` only displays UI (presentational).

---

# 8. Container Components

## Answer

Container components are responsible for managing data, logic, and state in a React application. They act as a bridge between data sources and presentational components. They do not focus on UI styling but instead pass data to child components.

---

## Example

```jsx id="ct1"
function Container() {
  const data = "Hello from Container";

  return <Child message={data} />;
}

function Child(props) {
  return <h2>{props.message}</h2>;
}
```

---

## Explanation

`Container` manages data and passes it to `Child`.

---

# 9. Layout Components

## Answer

Layout components are used to define the structure of a webpage such as header, sidebar, footer, and content area. They help maintain consistent design across multiple pages of an application.

---

## Example

```jsx id="l1"
function Layout({ children }) {
  return (
    <div>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
```

---

## Explanation

`Layout` provides structure and wraps content using `children`.

---

# 10. Higher Order Components (HOC)

## Answer

A Higher Order Component (HOC) is a function that takes a component and returns a new enhanced component with additional functionality. It is used to reuse component logic across multiple components.

---

## Example

```jsx id="hoc1"
function withLogging(Component) {
  return function () {
    console.log("Component Rendered");
    return <Component />;
  };
}

function Hello() {
  return <h1>Hello!</h1>;
}

export default withLogging(Hello);
```

---

## Explanation

`withLogging` adds extra behavior to `Hello` component.

---

# 11. Render Props Pattern

## Answer

Render Props is a pattern where a component shares logic by passing a function as a prop. This function determines what to render. It helps in code reuse and dynamic rendering of UI.

---

## Example

```jsx id="rp1"
function DataProvider({ render }) {
  const data = "Hello from Render Props";
  return render(data);
}

function App() {
  return (
    <DataProvider
      render={(data) => <h1>{data}</h1>}
    />
  );
}
```

---

## Explanation

`DataProvider` passes data through a function prop `render`.

---

# 12. Compound Components

## Answer

Compound components are a pattern where multiple related components work together to form a complete UI. They share implicit state and allow flexible composition. This pattern is often used in UI libraries like tabs, dropdowns, and accordions.

---

## Example

```jsx id="ccp1"
function Tabs({ children }) {
  return <div>{children}</div>;
}

function Tab({ label }) {
  return <button>{label}</button>;
}

function App() {
  return (
    <Tabs>
      <Tab label="Home" />
      <Tab label="About" />
    </Tabs>
  );
}
```

---

## Explanation

`Tabs` and `Tab` work together to create a tab system UI.

---

Agar tu chahe, main next step me **isko interview Q&A rapid revision sheet (1 page cheat sheet)** bana dunga 👍


