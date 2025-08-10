# Example Markdown File

This is an example markdown file to test the ESLint configuration for markdown.

## JavaScript Code Block

```javascript
// This code will be linted with the markdown ESLint configuration
const greeting = 'Hello, World!'
console.log(greeting)

function exampleFunction(param) {
  return param * 2
}
```

## TypeScript Code Block

```typescript
// TypeScript code in markdown
interface User {
  name: string
  age: number
}

const user: User = {
  name: 'John',
  age: 30,
}
```

## Regular Text

This regular text won't be linted as JavaScript code, only the code blocks will be processed.