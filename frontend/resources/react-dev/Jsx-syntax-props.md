# JSX Basic syntax

## Links

- [Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)

- [JavaScript in JSX with Curly Braces](https://react.dev/learn/javascript-in-jsx-with-curly-braces)

- [accordion](https://github.com/AlbertProfe/pronunciationApp/blob/frontend-react/frontend/resources/react-dev/accordion.md)

- [The problem with passing props](https://react.dev/learn/passing-data-deeply-with-context#the-problem-with-passing-props)

## JSX: Basic Concepts and Syntax

What is JSX?

- **Definition**: JSX (JavaScript XML) is a syntax extension for JavaScript, primarily used with React, that allows you to write HTML-like code within JavaScript.
- **Purpose**: It makes it easier to describe UI structures in a declarative way, blending markup and logic seamlessly.
- **Not HTML**: JSX looks like HTML but gets compiled (via tools like Babel) into JavaScript function calls (e.g., `React.createElement`).

Basic Concepts and Syntax: 

#### 1. **Embedding in JavaScript**

- JSX is written inside JavaScript files and must be enclosed in a function or return statement.

- Example:
  
  ```jsx
  function MyComponent() {
    return <div>Hello, World!</div>;
  }
  ```

- Behind the scenes, this becomes:
  
  ```javascript
  React.createElement("div", null, "Hello, World!");
  ```

#### 2. **Elements and Tags**

- JSX uses HTML-like tags to define elements with capital letter:
  
  - `<MyComponent />`

- **Single tags** must be self-closing (e.g., `<img />`).

- **Nested elements** work like HTML:
  
  ```jsx
  <div>
    <h1>Title</h1>
    <p>Content</p>
  </div>
  ```

#### 3. **JavaScript Expressions with** `{}`

- Use curly braces `{}` to embed JavaScript expressions inside JSX.

- Examples:
  
  ```jsx
  const name = "Alice";
  return <p>Hello, {name}!</p>; // Outputs: Hello, Alice!
  ```
  
  ```jsx
  return <p>2 + 2 = {2 + 2}</p>; // Outputs: 2 + 2 = 4
  ```

- Anything inside `{}` is evaluated as JavaScript: variables, calculations, function calls, etc.

#### 4. **Attributes and Props**

- JSX attributes are written like HTML attributes but use **camelCase** (not kebab-case).

- Values can be strings (in quotes) or JavaScript expressions (in `{}`).

- Examples:
  
  ```jsx
  <input type="text" placeholder="Enter text" />
  ```
  
  ```jsx
  const count = 5;
  <div className="container" data-value={count}></div>
  ```

- **Special cases**:
  
  - `class` → `className` (because `class` is a JavaScript keyword).
  - `for` → `htmlFor` (because `for` is a JavaScript keyword).

#### 5. **Passing Props**

- Props (properties) are passed to components using attributes.

- Use `{}` for non-string values (numbers, objects, etc.).

- Example:
  
  ```jsx
  <MyComponent title="Hello" count={42} />
  ```

- In the component:
  
  ```jsx
  function MyComponent({ title, count }) {
    return <p>{title}: {count}</p>;
  }
  ```

#### 6. **Children**

- Content between opening and closing tags is passed as the `children` prop.

- Example:
  
  ```jsx
  <Section>
    <p>This is a child</p>
  </Section>
  ```
  
  ```jsx
  function Section({ children }) {
    return <div>{children}</div>;
  }
  ```

#### 7. **Components**

- Custom components start with an **uppercase letter** to distinguish them from HTML tags.

- Example:
  
  ```jsx
  function Greeting() {
    return <h1>Hello!</h1>;
  }
  return <Greeting />;
  ```

#### 8. **Conditional Rendering**

- Use JavaScript logic (e.g., `if`, ternary operators) inside `{}`.

- Examples:
  
  ```jsx
  const isLoggedIn = true;
  return <div>{isLoggedIn ? "Welcome" : "Please log in"}</div>;
  ```
  
  ```jsx
  return <div>{isLoggedIn && <p>You’re logged in!</p>}</div>;
  ```

#### 9. **Lists and Mapping**

- Use `{}` with `.map()` to render lists.

- Add a `key` prop for each item to help React track elements.

- Example:
  
  ```jsx
  const items = ["Apple", "Banana", "Orange"];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
  ```

#### 10. **Fragments**

- Use `<></>` or `<React.Fragment>` to group elements without adding extra DOM nodes.

- Example:
  
  ```jsx
  return (
    <>
      <h1>Title</h1>
      <p>Content</p>
    </>
  );
  ```

#### 11. **Comments**

- Comments in JSX are written inside `{}` using JavaScript comment syntax.

- Example:
  
  ```jsx
  <div>
    {/* This is a comment */}
    <p>Hello</p>
  </div>
  ```

#### 12. **Styling**

- Inline styles use `style={{}}` with camelCase properties (not CSS strings).

- Example:
  
  ```jsx
  <div style={{ backgroundColor: "blue", fontSize: "16px" }}>Styled</div>
  ```

### Key Rules

- **Single Root**: A JSX block must return a single element (use fragments if needed).
- **Self-Closing Tags**: Tags without children must end with `/` (e.g., `<br />`).
- **JavaScript Integration**: `{}` is your gateway to dynamic content.
- **Case Sensitivity**: HTML tags are lowercase; component names are PascalCase.

### Why JSX?

- **Declarative**: Describes *what* the UI should look like, not *how* to build it.
- **Familiar**: Resembles HTML, making it intuitive for developers.
- **Powerful**: Combines markup and logic in one place, leveraging JavaScript’s full capabilities.

## Props in detail

Let's work with an example: `level={1}`

```jsx
export default function Page() {
  return (
     <Section>
      <Heading level={1}>Title</Heading>
     </Section>
  );
}

//.....


<Section level={1}>
      <Heading >Title</Heading>
...
</Section>
```

> Let’s break this down step-by-step to clarify why `level={1}` is written this way in your React code, what kind of syntax it is, and why `level=1` isn’t used instead.

**What is `level={1}`?**

In JSX code, `level={1}` is a `prop` (<mark>short for "property"</mark>) being passed to the `Section` component. Props are how you pass data from a parent component to a child component in React. Here, the `Section` component is receiving a prop named `level` with the value `1`.

The `{}` syntax in `level={1}` is part of `JSX`, a syntax extension for JavaScript commonly used with React. 

> The curly braces tell JSX that what’s inside them is a JavaScript expression, not a string or static value.

**Why use `{}` instead of just `level=1`?**

In JSX, when you write something like `level=1` (without curly braces), it’s interpreted as a <mark>string literal</mark> `"1"`, not the number `1`. This is because JSX attributes without `{}` <mark>are treated as strings</mark>, similar to how HTML attributes work. For example:

- `<Section level="1">` → The `level` prop would be the string `"1"`.
- `<Section level=1>` → This isn’t valid JSX syntax because unquoted values are not allowed (unlike HTML, where `id=1` might work in some cases).

> If you want to pass a number (like the integer `1`) or any other JavaScript value (e.g., an object, array, or variable), you need to wrap it in curly braces `{}` to indicate it’s a JavaScript expression. So:

- `<Section level={1}>` → The `level` prop is the number `1`.

> This distinction matters because the `Section` component might expect `level` to be a number (not a string) to perform some logic, like setting an HTML heading level (`<h1>`, `<h2>`, etc.).

**What kind of notation or syntax is this?**

This is <mark>JSX syntax</mark>, which looks like HTML but is actually a way to write JavaScript expressions that describe UI components in React. The `{}` notation specifically allows you to embed JavaScript expressions inside JSX. For example:

- `level={1}` → Passes the number `1`.
- `level={1 + 2}` → Passes the number `3`.
- `level={someVariable}` → Passes the value of `someVariable`.

The curly braces act as a bridge between the JSX markup and the JavaScript logic.

**Why not just `level=1` since it’s a single number?**

As mentioned, `level=1` isn’t valid JSX syntax. JSX requires that attributes either:

- Be string literals (e.g., `level="1"`), or
- Use `{}` to evaluate a JavaScript expression (e.g., `level={1}`).

Even though `1` is just a single number, JSX doesn’t make an exception for numbers. The `{}` rule applies consistently to all non-string values (numbers, booleans, objects, etc.). This design choice in JSX ensures clarity and avoids ambiguity when mixing static strings with dynamic values.

**How does it work in our code?**

In our example:

```jsx
export default function Page() {
  return (
     <Section>
      <Heading level={1}>Title</Heading>
     </Section>
  );
}

//.....

<Section level={1}>
      <Heading >Title</Heading>

</Section>
```

- The `Section` component is a custom React component (defined in `Section.js`).
- It receives the prop `level` with the value `1` (a number, not a string).
- The `Section` component might use this `level` value internally. For instance, it could dynamically render an `<h1>` tag for `level={1}`, an `<h2>` tag for `level={2}`, etc., or apply some other logic based on the number.

Here’s a possible implementation of `Section` to illustrate:

```jsx
// Section.js

import React from 'react';
export default function Section({ level, children }) {
  const Tag = `h${level}`; // Dynamically creates 'h1', 'h2', etc.
  return <Tag>{children}</Tag>;
}
```

With this implementation:

- `<Section level={1}>` → Renders as `<h1>`.
- `<Section level={2}>` → Renders as `<h2>`.

The `{1}` ensures `level` is passed as a number, which the component can use in its logic.

### Props and literal objects

Let’s dive into why the `Section` component uses `{ level, children }` with curly braces instead of simple parentheses `(level, children)` for its parameters. This is about JavaScript syntax and React conventions, so let’s break it down.

**What’s Happening in the Code?**

In our example:

```jsx
// Section.js

import React from 'react';

export default function Section({ level, children }) {
  const Tag = `h${level}`; // Dynamically creates 'h1', 'h2', etc.
  return <Tag>{children}</Tag>;
}
```

The `Section` component is a functional React component. The `{ level, children }` syntax is the parameter definition for this function. It uses <mark>object destructuring</mark>, a feature of JavaScript (**introduced in ES6**), to extract specific properties from an object passed as an argument.

**Why `{ level, children }` Instead of `(level, children)`?**

1. React Passes Props as a Single Object
   
   In React, when a component is called (e.g., `<Section level={1}>`), it doesn’t receive multiple arguments like a typical function call `myFunction(arg1, arg2)`. 
   
   Instead, <mark>React passes a single `props` object containing all the props.</mark> 
   
   For example:
   
   - `<Section level={1}>` → React internally calls `Section({ level: 1, children: <Heading>Title</Heading> })`.
   
   - The `props` object might look like:
     
     - ```js
       {
         level: 1,
         children: <Heading>Title</Heading>
       }
       ```

> So, the component function receives **one argument** (the `props` object), not two separate arguments like `level` and `children`.

2. Destructuring the Props Object

    If we wrote the component without destructuring, it would look like this:

```jsx
  export default function Section(props) {
  const Tag = `h${props.level}`;
  return <Tag>{props.children}</Tag>;
}
```

Here, `props` is the single object argument, and you access `level` and `children` as properties (\`props.level\`, `props.children`). This works fine, but it’s a bit verbose because you have to keep typing `props.` every time.

Using <mark>object destructuring</mark> with `{ level, children }`, we can directly extract `level` and `children` from the `props` object in the function signature, making the code cleaner and more concise:

```jsx
export default function Section({ level, children }) {
  const Tag = `h${level}`;
  return <Tag>{children}</Tag>;
}
```

- `{ level, children }` tells JavaScript: "Take the `props` object I’m given and pull out the `level` and `children` properties as variables."

- it’s equivalent to:
  
  - ```js
    export default function Section(props) {
        const level = props.level;
        const children = props.children;
        const Tag = `h${level}`;
    return <Tag>{children}</Tag>;
    }
    ```
3. Why Not `(level, children)`?

If we tried to write it as:

```jsx
export default function Section(level, children) {
  const Tag = `h${level}`;
return <Tag>{children}</Tag>;
}
```

> This would **not work**i n React because React doesn’t call the component with two separate arguments (\`Section(1, <Heading>Title</Heading>)\`). It calls it with one object (\`Section({ level: 1, children: <Heading>Title</Heading> })\`). If you used `(level, children)`, JavaScript would treat `level` as the entire `props` object and `children` as undefined, leading to errors:

\- `level` would be `{ level: 1, children: <Heading>Title</Heading> }`.

\- `children` would be `undefined`.

So, `(level, children)` assumes a function signature with two parameters, but React’s component system doesn’t match that expectation.

**Why Curly Braces `{}` Specifically?**

The curly braces in `{ level, children }` are the syntax f**or object destructuring** in JavaScript. They indicate that you’re pulling specific properties (`level` and `children`) out of the object passed to the function. This is different from:

- Parentheses `()`: Used for function parameters or grouping expressions.

- Curly braces `{}` in JSX: Used to embed JavaScript expressions (e.g., `level={1}`).

**Why Is This a React Convention?**

Using `{ level, children }` is a common practice in React because:

1\. Clarity: It immediately shows which props the component expects.

2\. Conciseness: Avoids repetitive `props.` references.

3\. Consistency: Matches how React delivers props as an object.