# @randajan/props

[![NPM](https://img.shields.io/npm/v/@randajan/props.svg)](https://www.npmjs.com/package/@randajan/props) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This package boost react page development.

## Install

```bash
npm install @randajan/props
```

or

```bash
yarn add @randajan/props
```


## Basics
This library provides simplified utilities to define properties on objects with specific behaviors, using four main functions:

1. **`solid`**: Creates a straightforward property with a fixed value.
2. **`virtual`**: Defines a virtual (getter-only) property.
3. **`safe`**: Creates a property with custom getter and setter that reads/writes to a private storage.
4. **`cached`**: Defines a property that initializes its value on the first read and caches it.


### `solid(...) && solids(...)`

Defines a property with a fixed, unchangeable value on an object.

#### Parameters
- `obj` (_Object_): The target object to which the property will be added.
- `name` (_String_): The name of the property.
- `value` (_Any_): The value of the property.
- `enumerable` (_Boolean_, default: `true`): Determines if the property shows up in enumerations.
- `configurable` (_Boolean_, default: `false`): Determines if the property can be redefined or deleted.

#### Example
```js

solid(myObject, 'constantProp', 42, true, false);

```

### `virtual(...) && virtuals(...)`

Defines a virtual property, accessible via a getter function, without storing any value on the object.

#### Parameters
- `obj` (_Object_): The target object to which the property will be added.
- `name` (_String_): The name of the property.
- `get` (_Function_): A function that returns the value when the property is accessed.
- `enumerable` (_Boolean_, default: `true`): Determines if the property shows up in enumerations.
- `configurable` (_Boolean_, default: `false`): Determines if the property can be redefined or deleted.

#### Example
```js

virtual(myObject, 'dynamicProp', () => Math.random(), true, false);

```



### `safe(...) && safes(...)`

Defines a property with custom getter and setter functions that interact with a private object, `priv`, allowing for controlled access to a hidden value.

#### Parameters
- `obj` (_Object_): The target object to which the property will be added.
- `priv` (_Object_): A private object storing values.
- `name` (_String_): The name of the property.
- `set` (_Function | null_): A function to process and set the value on `priv` (receives new value, current value, and name).
- `get` (_Function | null_): A function that retrieves the value from `priv` (receives current value and name).
- `enumerable` (_Boolean_, default: `true`): Determines if the property shows up in enumerations.
- `configurable` (_Boolean_, default: `false`): Determines if the property can be redefined or deleted.

#### Example
```js

const priv = { hiddenValue: 100 };
safe(myObject, priv, 'secureProp', 
    (newValue) => newValue * 2, 
    (value) => value + 1, 
    true, false);

```



### `cached(...) && cacheds(...)`

Creates a property that is initialized lazily, using a `reset` function upon the first access, and caches this value within a private object.

#### Parameters
- `obj` (_Object_): The target object to which the property will be added.
- `priv` (_Object_): A private object storing the cached values.
- `name` (_String_): The name of the property.
- `reset` (_Function_): A function that provides the initial value upon the first access.
- `get` (_Function | null_): A function that retrieves the value (receives the stored value and name).
- `enumerable` (_Boolean_, default: `true`): Determines if the property shows up in enumerations.
- `configurable` (_Boolean_, default: `false`): Determines if the property can be redefined or deleted.

#### Example
```js

const priv = {};
cached(myObject, priv, 'lazyProp', 
    () => Date.now(),  // Reset only called once on first access
    (value) => `Timestamp: ${value}`, 
    true, false);

```

Happy hacking

## License

MIT © [randajan](https://github.com/randajan)


# @randajan/props - Access Points Overview
