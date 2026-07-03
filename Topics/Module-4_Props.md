# 1. Passing Props

**Props (Properties)** are a mechanism in React used to pass data from a **parent component** to a **child component**. They allow components to become dynamic and reusable by providing different values without changing the component's internal code. Props can contain strings, numbers, booleans, objects, arrays, functions, or even other React elements.

When passing props, the parent component adds them as attributes while rendering the child component. The child component can then use these values to display dynamic content or perform actions. Props support React's **one-way data flow**, meaning data always flows from parent to child, making applications more predictable and easier to debug.

### Example

```jsx
function App() {
  return <User name="Anuj" age={24} />;
}

function User(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}
```

---

# 2. Receiving Props

A child component receives props as an object, usually named `props`, which contains all the values passed by the parent component. Each property can be accessed using dot notation, such as `props.name` or `props.age`. React automatically creates this object when the component is rendered.

Receiving props allows a single component to display different data based on the values provided by its parent. This makes components highly reusable because the same component can be rendered multiple times with different prop values, producing different outputs without modifying the component itself.

### Example

```jsx
function User(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.city}</p>
    </>
  );
}
```

Used as:

```jsx
<User name="Anuj" city="Nagpur" />
```

---

# 3. Props Destructuring

**Props destructuring** is a JavaScript feature that extracts required properties directly from the `props` object. Instead of repeatedly writing `props.name` or `props.age`, developers can destructure the object and access the values directly, resulting in cleaner and more readable code.

Destructuring is considered a best practice in modern React development because it reduces repetitive code and makes it immediately clear which props a component expects. It also improves maintainability, especially when working with components that receive many props.

### Example

Without destructuring

```jsx
function User(props) {
  return <h2>{props.name}</h2>;
}
```

With destructuring

```jsx
function User({ name, age }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
    </>
  );
}
```

---

# 4. Children Props

The **`children` prop** is a special React prop that represents the content placed between a component's opening and closing tags. Instead of passing data as an attribute, React automatically passes the nested JSX as the `children` prop, allowing components to act as wrappers around other components or elements.

The `children` prop is commonly used to build reusable layout components such as cards, modals, dialogs, containers, and wrappers. It provides flexibility because the parent component can pass any valid JSX, and the child component decides where to render that content.

### Example

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}
```

Usage

```jsx
<Card>
  <h2>Welcome</h2>
  <p>This is inside the Card component.</p>
</Card>
```

Output

```html
<div class="card">
  <h2>Welcome</h2>
  <p>This is inside the Card component.</p>
</div>
```

---

# 5. Default Props

**Default props** provide fallback values when a parent component does not pass a particular prop. This ensures that the component continues to work correctly even if some props are missing, preventing undefined values from appearing in the UI.

In modern React, default values are usually assigned using JavaScript default parameters during props destructuring instead of using the older `defaultProps` pattern for function components. This approach is simpler, more readable, and aligns with modern JavaScript syntax.

### Example

```jsx
function User({ name = "Guest" }) {
  return <h2>{name}</h2>;
}
```

Usage

```jsx
<User />
```

Output

```
Guest
```

---

# 6. Prop Validation

**Prop validation** is the process of checking whether a component receives props of the expected data type. React commonly uses the **PropTypes** library during development to validate props and display warnings if incorrect data types are passed.

Prop validation improves code quality by catching mistakes early, making components easier to understand and maintain. It is especially useful in JavaScript projects where types are not enforced by the language. In modern React applications using TypeScript, compile-time type checking often replaces the need for PropTypes.

### Example

```jsx
import PropTypes from "prop-types";

function User({ name, age }) {
  return <h2>{name} - {age}</h2>;
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};
```

---

# 7. Immutable Nature of Props

Props in React are **immutable**, meaning a child component cannot modify the props it receives from its parent. They are **read-only** values that should only be used for displaying data or triggering actions. If a child component needs different data, the parent component must pass updated props by re-rendering the child.

The immutable nature of props supports React's **one-way data flow**, making the application's behavior predictable and easier to debug. If a component needs to change data, it should use its own state or notify the parent component through a callback function, rather than attempting to modify props directly.

### Example

❌ Incorrect (Modifying Props)

```jsx
function User({ name }) {
  name = "Rahul"; // Never modify props
  return <h2>{name}</h2>;
}
```

✅ Correct

```jsx
function User({ name }) {
  return <h2>{name}</h2>;
}
```

Parent Component

```jsx
function App() {
  return <User name="Anuj" />;
}
```

---

# Quick Interview Revision

| Topic                         | One-Line Answer                                                                                            |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Passing Props**             | Parent components pass data to child components using attributes.                                          |
| **Receiving Props**           | Child components receive all passed values through the `props` object or destructuring.                    |
| **Props Destructuring**       | Extracts values directly from the `props` object for cleaner and more readable code.                       |
| **Children Props**            | A special prop that represents the JSX placed between a component's opening and closing tags.              |
| **Default Props**             | Fallback values used when a prop is not provided; modern React typically uses default function parameters. |
| **Prop Validation**           | Checks that props have the expected types, commonly using PropTypes or TypeScript.                         |
| **Immutable Nature of Props** | Props are read-only and cannot be modified by the child component.                                         |
