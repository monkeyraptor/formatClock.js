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
`formatClock(59.500)`  | `"00:00:59.500"`
`formatClock(600)`  | `"00:10:00"`
`formatClock("beer")` | `error message`
`formatClock(-10)` | `error message`
`formatClock([2, 3, 4])` | `error message`
`formatClock(65321)` | `"18:08:41"`

### It doesn't include floating number filtering/formatting

For instance, `formatClock(620.350)` will generate output: `"00:10:20.350000000000023"`
That's because the **subtraction**.

You can add **your own method** to do that particular task (formatting) if your system needs to capture milliseconds like that. Like this `formatClock(620.350)` to generate precisely `"00:10:20.350"` output.
