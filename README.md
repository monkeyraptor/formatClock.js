# formatClock.js
JavaScript snippet to convert seconds into hh:mm:ss format

## Syntax (Usage)
```
formatClock(input)
```

`input` argument must be **`Number`** (seconds).

The output will be **`String`** type.

```
var seconds = 10000;
var toClockFormat = formatClock(seconds);

// **toClockFormat** variable consists of "02:46:40" (String)
```


## Output Examples

Invocation  | Output
------------- | -------------
`formatClock(600)`  | `"00:10:00"`
`formatClock(620.25)`  | `"00:10:20.25"`
`formatClock("beer")` | `error message`
`formatClock(-10)` | `error message`
`formatClock([2, 3, 4])` | `error message`
`formatClock(65321)` | `"18:08:41"`
