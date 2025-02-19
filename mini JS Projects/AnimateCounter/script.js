
function animateCounter(target, element, duration) {
    const steps = duration / 16; // Total updates (~16ms per frame)
    const increment = Math.ceil(target / steps); // Calculate increment
    let current = 0;

    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        element.textContent = current.toLocaleString(); // Format with commas
    }, 16); // Update every 16ms
}

function startCounters() {
    const counters = [
        { selector: '#job_posted', target: 32275 },
        { selector: '#job_fileds', target: 15153 },
        { selector: '#employers', target: 20413 },
        { selector: '#active_user', target: 1297096 },
    ];
    const duration = 2000; // 2 seconds for all counters

    counters.forEach(({ selector, target }) => {
        // What is { selector, target } ? ===> This is object destructuring: 
        const element = document.querySelector(selector);
        animateCounter(target, element, duration);
    });
}

startCounters();

/*
Alright, let me simplify this step by step. I’ll explain it in even simpler terms:

---

### **What are we trying to do?**
We want the counter to go from `0` to `target` in a certain amount of time (`duration`), increasing smoothly. To do this, we need to calculate:
1. **How many times** the counter will update during that time (steps).
2. **How much** the counter should increase each time it updates (increment).

---

### **1. `steps = duration / 16`**
This calculates the **number of updates** the counter will perform.

- The counter updates every `16 milliseconds` (ms), which is about 60 times per second.
- To find the total number of updates (or steps), we divide the total duration by `16`.

#### Example:
- If the total duration is **2000ms** (2 seconds):
  ```javascript
  steps = 2000 / 16 = 125;
  ```
  - This means the counter will update **125 times** during the 2 seconds.

---

### **2. `increment = Math.ceil(target / steps)`**
This calculates **how much the counter should increase** each time it updates.

- To make the counter reach the `target` in the given `steps`, we divide the `target` by `steps`.
- We use `Math.ceil()` to round up, so the counter doesn't stop below the target.

#### Example:
- If the `target` is **32275** and the `steps` are **125**:
  ```javascript
  increment = Math.ceil(32275 / 125);
  increment = 259;
  ```
  - This means the counter will increase by **259** each time it updates.

---

### **How It Works Together**
Now, every `16ms`, the counter will:
1. Add `increment` (259) to the current number.
2. Stop when it reaches or exceeds the `target`.

#### Example Animation Progression:
- Start: `currentNumber = 0`.
- After 16ms (1st step): `currentNumber = 0 + 259 = 259`.
- After 32ms (2nd step): `currentNumber = 259 + 259 = 518`.
- ...
- Final step (at 2 seconds): `currentNumber = 32275`.

---

### **Purpose of `Math.ceil()`**
Without `Math.ceil()`, the increment might be a fraction (e.g., 258.2). This could cause the counter to stop slightly **below** the target. Using `Math.ceil()` ensures the counter reaches or slightly exceeds the target.

---

### **Real-Life Example**
Let’s say you have:
- `target = 10,000`
- `duration = 1000ms` (1 second)

1. Calculate steps:
   ```javascript
   steps = 1000 / 16 = 62.5 (approximately 62 steps).
   ```

2. Calculate increment:
   ```javascript
   increment = Math.ceil(10000 / 62) = 162.
   ```

The counter will:
- Increase by 162 every 16ms.
- After 62 updates, it will reach 10,044 (a bit over 10,000).

---

### Why Are We Doing This?
This ensures the counter:
1. Updates smoothly.
2. Reaches the target in the specified time.

Does this make sense now? 😊 Let me know if I should clarify more!*/