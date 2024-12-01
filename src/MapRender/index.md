# MapRender

This is the MapRender component.

```tsx
import { MapRender } from 'X-Component';

export default () => (
  <MapRender<string, number>
    mapData={[
      ['1', 10],
      ['2', 20],
      ['3', 30],
    ]}
    condition="1"
  />
);
```

```tsx
import { MapRender } from 'X-Component';

export default () => (
  <MapRender<string, number>
    mapData={[
      ['1', 10],
      ['2', 20],
      ['3', 30],
    ]}
    condition="5"
    defaultValue={9}
  />
);
```
