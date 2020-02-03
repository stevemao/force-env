> Ensure environment variable exists. If not, throw to fail early.

```ts
import forceEnv from 'force-env'

const nodeEnv = forceEnv('NODE_ENV')
// => 'development', 'production', 'test', or throw if not set
```
