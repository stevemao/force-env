> Ensure environment variable exists. If not, throw to fail early.

```ts
import forceEnv from 'force-env'

const nodeEnv = forceEnv('NODE_ENV')
// => 'development', 'production', 'test', or throw if not set
```

## Related

- [force-num](https://github.com/stevemao/force-num) - Ensure environment variable exists and convert to a number. If not, throw to fail early.
