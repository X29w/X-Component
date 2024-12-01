# DetectEmpty

This is a component that to render empty state when there is no data to display.

```jsx
import { DetectEmpty } from 'X-Component';

export default () => (
  <DetectEmpty
    emptyCondition={[].length === 0}
    emptyRender={<div>No data to display</div>}
  >
    <div>Content to display</div>
  </DetectEmpty>
);
```

```jsx
import { DetectEmpty } from 'X-Component';

export default () => (
  <DetectEmpty
    emptyCondition={[...Array(10)].length === 0}
    emptyRender={<div>No data to display</div>}
  >
    <div>Content to display</div>
  </DetectEmpty>
);
```
