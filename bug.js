```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}

export default MyComponent;
```
This component uses Next.js's Link component to create links to the home and about pages.  However, if you're not careful about where you place this component, you might encounter unexpected behavior relating to the routing. For instance, if you place this inside a component that's not within the `pages` directory or a dynamically routed page, the links might not function as expected.