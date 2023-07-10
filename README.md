# styled-components/native Performance Reproduction

This is a Expo App reproducer to demonstrate the performance difference between using styled-components/native, and built-in styling.

1000 items are rendered in Array.map to simulate the complexity of a real app.

## Results


|           | 1   | 2   | 3   | 4   | 5   | 6   |
|-----------|-----|-----|-----|-----|-----|-----|
| Native    | 289 | 281 | 286 | 296 | 280 | 268 |
| Styled v5 | 440 | 426 | 424 | 428 | 429 | 432 |
| Styled v6 | 400 | 404 | 401 | 395 | 404 | 400 |


# Reproduction Steps
1. Start the profiler by pressing Shift + M and open React Dev Tools.
2. Open profiler and hit record
3. Press the toggle button and stop recording
4. Record the time to render App.ts
5. Average the result across at least 3 runs



