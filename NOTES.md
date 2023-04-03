# TypeScirpt

## Generics
Generics allow us to create code that can work with different types. Using any would work, but it’s far from ideal since we won’t be able to constrain what arguments the function accepts or infer what the function is to return. It can be used with functions, types, classes, and interfaces.

```
const init = <T>(arg: T): T => {
  return arg;
};

init<number>(5); // arg type and return type = number
init<string>("5"); // arg type and return type = string
```