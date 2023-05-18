# useEffect Hook

The `useEffect` hook in React allows you to perform side effects in functional components. It replaces the lifecycle methods `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.

## Overview

- Import using: `import React, { useEffect } from 'react';`
- Usage: 
  ```javascript
  useEffect(() => {
    // Side effect code
    return () => {
      // Cleanup code
    };
  }, [dependencyList]);


## Purpose
- Perform side effects in functional components.
- Handle asynchronous operations, API calls, subscriptions, etc.
- Update the component in response to changes in props or state.

## Syntax

```useEffect(effect: Function, dependencies?: Array<any>): void```

- The effect is a function that contains the side effect code.
- The dependencies (optional) is an array of values that the effect depends on.

## Execution
- The effect runs after the initial render and after every re-render by default.
- If the dependency list is provided, the effect only runs if the dependencies change.
- If the dependency list is empty, the effect runs only once (similar to componentDidMount).

## Cleanup
- The effect can return a cleanup function to perform any necessary cleanup operations.
- The cleanup function runs when the component unmounts or before the effect runs again.
- Useful for unsubscribing from subscriptions, cancelling API requests, or removing event listeners.

## Dependency List
- The dependency list is an array of values that the effect depends on.
- If the dependency list is not provided, the effect runs after every re-render.
- If the dependency list is an empty array, the effect runs only once.
- If the values in the dependency list change, the effect is triggered.


## Example

```javascript
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Side effect code
    console.log('Component mounted');

    return () => {
      // Cleanup code
      console.log('Component unmounted');
    };
  }, []);

  return <div>My Component</div>;
}
```

<br>
<br>
<br>
<br>

# useState Hook

The `useState` hook in React allows you to add state to functional components. It provides a way to store and update state within a component.

## Overview

- Import using: `import React, { useState } from 'react';`
- Usage: 
  ```javascript
  const [state, setState] = useState(initialValue);
  ```

- `state` represents the current value of the state.
- `setState` is a function used to update the state.

## Purpose
- Add state to functional components.
- Update the state and trigger re-renders of the component.
- Replace class component's this.state and this.setState functionalities.

# Syntax
```useState(initialValue: any): [state: any, setState: function]```

- initialValue is the initial value of the state.
- state represents the current value of the state.
- setState is a function used to update the state.


# Usage
- Destructure the state and setState from the returned array.
- Access and update the state using state and setState respectively.

```javascript
const [count, setCount] = useState(0);

// Access the state
console.log(count); // Output: 0

// Update the state
setCount(count + 1);
```

## Example

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

<br>
<br>
<br>
<br>

# useRef Hook

The `useRef` hook in React provides a way to create a mutable reference that persists across renders. It allows you to access and manipulate DOM elements, store mutable values, and maintain references to other values or objects.

## Overview

- Import using: `import React, { useRef } from 'react';`
- Usage: 
  ```javascript
  const ref = useRef(initialValue);

- `ref` represents the mutable reference object.


## Purpose
- Access and manipulate DOM elements.
- Store mutable values that don't trigger re-renders.
- Maintain references to values or objects that persist across renders.

## Syntax
- `useRef(initialValue: any): RefObject`
- initialValue is the initial value of the reference.

## Usage
- Create a ref object using the useRef hook.
- Access the current value of the reference using ref.current.
- Modify the current value of the reference as needed.

```javascript
const inputRef = useRef(null);

// Accessing DOM element
console.log(inputRef.current); // Output: <input>

// Modifying the value
inputRef.current.value = 'New value';
```

## Example

```javascript
import React, { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

<br>
<br>
<br>
<br>


# useReducer Hook

The `useReducer` hook in React provides a way to manage complex state logic by using a reducer function. It is an alternative to the `useState` hook and is particularly useful when the state updates depend on the previous state or require complex transformations.

## Overview

- Import using: `import React, { useReducer } from 'react';
- Usage:
  ```javascript
  const [state, dispatch] = useReducer(reducer, initialState);
    ```

- `state` represents the current state value.
- `dispatch` is a function used to trigger state updates by invoking the reducer function.

## Purpose
- Manage complex state logic.
- Perform state updates based on the previous state or with complex transformations.
- Centralize state-related logic in a reducer function.


## Syntax
- useReducer(reducer: function, initialState: any, initialAction: any): [state: any, dispatch: function]
- reducer is a function that specifies how the state 
should be updated.
- initialState is the initial state value.
- initialAction (optional) is the initial action to be dispatched.


## Usage
- Define a reducer function that handles state updates based on the dispatched actions.
- Use the useReducer hook to create the state and dispatch function based on the reducer and initial state.
- Access the current state using state.
- Trigger state updates by invoking the dispatch function with an action.


## Example

```javascript
const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: 'increment' });
  };

  const decrement = () => {
    dispatch({ type: 'decrement' });
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
```

<br>
<br>
<br>
<br>

# useLayoutEffect Hook

The `useLayoutEffect` hook in React is similar to the `useEffect` hook, but it runs synchronously after all DOM mutations. It allows you to perform actions that require access to the updated DOM layout before the browser paints the screen.

## Overview

- Import using: `import React, { useLayoutEffect } from 'react';`
- Usage:
  ```javascript
  useLayoutEffect(effect: function, deps?: Array<any>);
    ```

- `effect` is the function to be executed after layout and before painting.
- `deps` (optional) is an array of dependencies for the effect.


## Purpose
- Perform actions that require access to the updated DOM layout.
- Manipulate the DOM or perform other imperative operations synchronously after rendering.
- Coordinate with the browser's layout and paint phases for more precise updates.

## Syntax
- `useLayoutEffect(effect: function, deps?: Array<any>): void`
- `effect` is a function that will be executed after layout and before painting.
- `deps` (optional) is an array of dependencies for the effect. If provided, the effect will only be re-run if any of the dependencies change.


## Usage
- Use the useLayoutEffect hook to execute the provided effect after the DOM layout has been updated but before the browser paints the screen.
- Perform imperative operations, such as manipulating the DOM, updating measurements, or interacting with external libraries, inside the effect.
- Optionally specify dependencies in the deps array to control when the effect should be re-run.


## Example 

```javascript
import React, { useLayoutEffect, useRef } from 'react';

const MyComponent = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    // Access and manipulate the DOM element
    const element = ref.current;
    element.style.backgroundColor = 'red';
  }, []);

  return <div ref={ref}>Hello, world!</div>;
};
```

<br>
<br>
<br>
<br>

# useImperativeHandle Hook

The `useImperativeHandle` hook in React allows you to customize the instance value that is exposed to parent components when using `ref` forwarding. It enables you to specify which properties or methods of a child component's instance should be accessible from the parent component.

## Overview

- Import using: `import React, { useImperativeHandle, useRef } from 'react';`
- Usage:
  ```javascript
  useImperativeHandle(ref: Ref, createHandle: function, dependencies?: Array<any>);
    ```

- `ref` is a ref object obtained from the parent component.
- `createHandle` is a function that creates the handle object to be exposed to the parent component.
- `dependencies` (optional) is an array of values that the hook depends on.


## Purpose
- Expose specific instance methods or properties of a child component to its parent component.
- Customize the interface that is exposed via the `ref` object.
- Provide a more controlled and limited set of functionalities to the parent component.


## Syntax
- `useImperativeHandle(ref: Ref, createHandle: function, dependencies?: Array<any>): void`
- `ref` is a `ref` object that is typically created using the useRef hook.
- `createHandle` is a function that creates and returns the handle object, containing the properties or methods to be exposed.
- `dependencies` (optional) is an array of values that the hook depends on. If provided, the hook will re-create the handle whenever any of the dependencies change.


## Usage
- Use the `useImperativeHandle` hook inside the child component to specify which instance properties or methods should be exposed.
- Create a `ref` object using the `useRef` hook.
- Use the `useImperativeHandle` hook to define the handle object that will be exposed to the parent component through the `ref`.
- Return the desired properties or methods in the `createHandle` function.


## Example

```javascript
import React, { useImperativeHandle, useRef } from 'react';

const ChildComponent = React.forwardRef((props, ref) => {
  const internalRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      internalRef.current.focus();
    },
    getValue: () => {
      return internalRef.current.value;
    },
  }));

  return <input ref={internalRef} />;
});

const ParentComponent = () => {
  const childRef = useRef();

  const handleFocus = () => {
    childRef.current.focus();
  };

  const handleGetValue = () => {
    const value = childRef.current.getValue();
    console.log('Value:', value);
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleFocus}>Focus Child</button>
      <button onClick={handleGetValue}>Get Value</button>
    </div>
  );
};
```

<br>
<br>
<br>
<br>


# useContext Hook

The `useContext` hook in React allows you to access the value of a context object defined by a `Context.Provider` component. It provides a convenient way to consume context values within a functional component without using a higher-order component or render prop pattern.

## Overview

- Import using: `import React, { useContext } from 'react';`
- Usage:
  ```javascript
  useContext(context: Context): any;

- `context` is the context object created using `React.createContext()`.

## Purpose
- Access the value of a context object without using a higher-order component or render prop pattern.
- Retrieve and consume context values within a functional component.


## Syntax
`useContext(context: Context): any`
- `context` is the context object created using `React.createContext().`
- The hook returns the current value of the context object.

## Usage
- Create a context object using `React.createContext()` in a separate file or higher-level component.
- Use the `useContext` hook inside a functional component to access the value of the context object.

## Example

```javascript
// ThemeContext.js
import React from 'react';

const ThemeContext = React.createContext('light');

export default ThemeContext;

// App.js
import React from 'react';
import ThemeContext from './ThemeContext';
import ChildComponent from './ChildComponent';

const App = () => {
  const theme = 'dark';

  return (
    <ThemeContext.Provider value={theme}>
      <ChildComponent />
    </ThemeContext.Provider>
  );
};

// ChildComponent.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ChildComponent = () => {
  const theme = useContext(ThemeContext);

  return <div>Current theme: {theme}</div>;
};
```


<br>
<br>
<br>
<br>

# useMemo Hook

The `useMemo` hook in React allows you to memoize expensive computations and cache their results. It is used to optimize the performance of functional components by avoiding unnecessary re-computations of values.

## Overview

- Import using: `import React, { useMemo } from 'react';`
- Usage:
  ```javascript
  useMemo(createMemoizedValue: function, dependencies: Array<any>): any;

- `createMemoizedValue` is a function that computes the value to be memoized.
- `dependencies` is an array of values that the memoized value depends on.

## Purpose
- Memoize and cache the results of expensive computations.
- Optimize performance by preventing unnecessary re-computations of values.
- Provide a way to control when a value should be recalculated.

## Syntax
- `useMemo(createMemoizedValue: function, dependencies: Array<any>): any`
- `createMemoizedValue` is a function that returns the value to be memoized.
- `dependencies` is an array of values that the memoized value depends on. The memoized value will be recalculated whenever any of the dependencies change.

## Usage
- Use the `useMemo` hook inside a functional component to memoize a value.
- Pass a function to `useMemo` that computes the value to be memoized.
- Provide an array of dependencies that the memoized value depends on.
- The memoized value will only be recomputed if any of the dependencies have changed.


## Example

```javascript
import React, { useMemo } from 'react';

const Component = ({ data }) => {
  const expensiveResult = useMemo(() => {
    // Expensive computation based on data
    return data.map(item => item * 2);
  }, [data]);

  return (
    <div>
      <p>Expensive Result: {expensiveResult.join(', ')}</p>
    </div>
  );
};
```

<br>
<br>
<br>
<br>

# useCallback Hook

The `useCallback` hook in React allows you to memoize functions and optimize performance by preventing unnecessary re-creation of function references. It is particularly useful when passing callbacks to child components that rely on stable references.

## Overview

- Import using: `import React, { useCallback } from 'react';`
- Usage:
  ```javascript
  useCallback(callback: function, dependencies: Array<any>): function;


- `callback` is the function to be memoized.
- `dependencies` is an array of values that the memoized callback depends on.


## Purpose
- Memoize functions to optimize performance and prevent unnecessary re-creation of function references.
- Ensure that child components receive stable references to callback functions.
- Control when a callback function should be re-created.


## Syntax
- `useCallback(callback: function, dependencies: Array<any>): function`
- `callback` is the function to be memoized.
- `dependencies` is an array of values that the memoized callback depends on. The callback will be re-created whenever any of the dependencies change.

## Usage
- Use the `useCallback` hook inside a functional component to memoize a callback function.
- Pass the callback function to `useCallback` that you want to memoize.
- Provide an array of dependencies that the callback function depends on.
- The memoized callback function will only be re-created if any of the dependencies have changed.

## Example

```javascript
import React, { useCallback, useState } from 'react';

const Component = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```

<br>
<br>
<br>
<br>

# Custom Hook

A custom hook in React allows you to extract reusable logic into a standalone function, enabling you to share stateful logic across multiple components. It provides a way to abstract and encapsulate complex functionality that can be easily reused and shared.

## Overview

- Custom hooks are regular JavaScript functions that can call other hooks if needed.
- Custom hooks should always start with the word "use" to follow the convention of React hooks.
- Custom hooks can return values, state variables, or even other hooks.

## Purpose

- Encapsulate and reuse stateful logic across multiple components.
- Extract complex functionality into reusable functions.
- Improve code organization, readability, and reusability.

## Usage

- Create a custom hook as a standalone function.
- Use built-in hooks or other custom hooks within the custom hook if needed.
- Return any necessary values or hooks from the custom hook.

```javascript
import { useState, useEffect } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData
```


<br>
<br>
<br>
<br>

# useDebugValue Hook

The `useDebugValue` hook in React is used to display custom labels for custom hooks in React DevTools. It allows you to provide additional information about the custom hook's value in the DevTools for better debugging and inspection.

## Overview

- Import using: `import { useDebugValue } from 'react';`
- Usage:
  ```javascript
  useDebugValue(value: any, formatter?: (value: any) => any);


- `value` is the value you want to display in the DevTools.
- `formatter` is an optional function that formats the value for display.


## Purpose
- Display custom labels and values in React DevTools for better debugging and inspection.
- Provide additional information about custom hooks to aid in understanding their behavior.

## Syntax
- `useDebugValue(value: any, formatter?: (value: any) => any)`
- `value` is the value you want to display in the DevTools.
- `formatter` is an optional function that formats the value for display. It takes the value as an argument and returns the formatted value.

## Usage
- Use the useDebugValue hook inside a custom hook to provide custom labels and values for better debugging experience.
- Pass the value you want to display in the DevTools as the first argument.
- Optionally, provide a formatter function as the second argument to format the value before display.

## Example

```javascript
import { useDebugValue, useState } from 'react';

const useCustomHook = () => {
  const [value, setValue] = useState('');

  // Update the label displayed in DevTools for this custom hook
  useDebugValue(value, value => `Custom Hook Value: ${value}`);

  return value;
};
```

<br>
<br>
<br>
<br>

# useDeferredValue Hook

The `useDeferredValue` hook is a React hook that allows you to get a deferred version of a value. It provides a way to access the previous value of a state or prop during rendering, making it useful for optimizing performance and responsiveness of certain UI updates.

## Overview

- Import using: `import { useDeferredValue } from 'react';`
- Usage:
  ```javascript
  const deferredValue = useDeferredValue(value, options);


- `value` is the value you want to defer.
- `options` is an optional object that allows you to customize the behavior of the hook.


## Purpose
- Obtain the deferred value of a state or prop during rendering.
- Optimize performance by deferring updates and avoiding unnecessary re-renders.
- Improve responsiveness by making UI updates feel smoother and more responsive.


## Syntax
- `useDeferredValue(value: any, options?: Options): any`
- `value` is the value you want to defer.
- `options` is an optional object with the following properties:
    - `timeoutMs`: Number of milliseconds to defer the value (default: 0).
    - 1: Custom equality function to compare the deferred value with the current value.

## Usage
- Use the `useDeferredValue` hook inside a functional component to obtain the deferred version of a state or prop value.
- Pass the value you want to defer as the first argument.
- Optionally, provide an `options` object as the second argument to customize the behavior of the hook.

<br>
<br>
<br>
<br>

# useTransition Hook

The `useTransition` hook is a React hook that allows you to coordinate the rendering and animation of UI transitions. It helps create smoother and more responsive user interfaces by controlling the timing and prioritization of updates.

## Overview

- Import using: `import { useTransition } from 'react';`
- Usage:
  ```javascript
  const [startTransition, isPending] = useTransition(options);


- `startTransition` is a function that starts a transition and schedules a low-priority update.
- `isPending` is a boolean indicating whether a transition is currently pending.
- `options` is an optional object that allows you to customize the behavior of the hook.

## Purpose
- Coordinate the rendering and animation of UI transitions.
- Control the timing and prioritization of updates to create smoother and more responsive user interfaces.


## Syntax
- `useTransition(options?: Options): [startTransition: () => void, isPending: boolean]`
- `options` is an optional object with the following properties:
    - `timeoutMs`: Number of milliseconds to wait before committing the transition (default: 500).
    - `busyDelayMs`: Number of milliseconds to wait before considering a transition as busy (default: 0).
    - `busyMinDurationMs`: Minimum number of milliseconds to keep a transition busy (default: 0).


## Usage
- Use the useTransition hook inside a functional component to coordinate transitions.
- Destructure the startTransition function and isPending boolean from the hook's return value.
- Call startTransition when you want to start a transition and schedule a low-priority update.
- Use isPending to conditionally render or update UI based on the transition's pending state.

<br>
<br>
<br>
<br>


# useId Hook

The `useId` hook is a React hook that generates a unique ID that can be used as an identifier for elements in your application. It provides a convenient way to generate unique IDs without the need for external libraries or manual ID management.

## Overview

- Import using: `import { useId } from 'react';`
- Usage:
  ```javascript
  const id = useId(prefix?: string);


- `prefix` is an optional string value that is prepended to the generated ID.


## Purpose
- Generate unique IDs for elements in your application.
- Simplify the process of generating IDs without the need for external libraries or manual ID management.

## Syntax
- `useId(prefix?: string): string`
- `prefix` is an optional string value that is prepended to the generated ID.


## Usage
- Use the useId hook inside a functional component to generate a unique ID.
- Assign the returned ID to the id attribute of the element that requires a unique identifier.

## Example

```javascript
import { useId } from 'react';

const MyComponent = () => {
  const inputId = useId('input');

  return (
    <div>
      <label htmlFor={inputId}>Input:</label>
      <input type="text" id={inputId} />
    </div>
  );
};
```