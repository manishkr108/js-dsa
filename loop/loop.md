!! *“After first time i = 0 and it prints, will i reset to 0 again or just check condition?”

answer is
No, it will NOT reset.

👉 The flow is:

Initialization let i = 0 → happens only once

Then for every round:

Condition check: i < 5

Execute block

Increment i++

🚫 It never goes back to i = 0 unless you explicitly do it in your code.

 What happens step by step (Dry Run):
🧠 First Execution (i = 0):
Initialize i = 0

Check condition: i < 5 → ✅ true

Execute: console.log(0)

Increment: i++ → i = 1

🔁 Next Iterations:
i = 1 → i < 5 ✅ → print 1 → i++ → i = 2

i = 2 → i < 5 ✅ → print 2 → i++ → i = 3

i = 3 → i < 5 ✅ → print 3 → i++ → i = 4

i = 4 → i < 5 ✅ → print 4 → i++ → i = 5

i = 5 → i < 5 ❌ → loop stops



both for and while loops are used to repeat a block of code multiple times, but they differ in syntax and use cases.
 Key Differences:
Feature	for Loop	while Loop
Use Case	Known number of iterations	Unknown number of iterations
Initialization	Inside loop declaration	Outside loop
Increment	Inside loop declaration	Inside loop body
Readability	More compact for counting	Better for conditional looping

📌 Summary:
Use **for** when you know how many times you want to run the loop.

Use **while** when you only know the condition to stop, not the count.