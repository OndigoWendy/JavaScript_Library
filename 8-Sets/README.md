## Set

Function	Syntax	Return value	Invalid Case	Runtime
**Function** | **Syntax** | **Return Value** | **Invalid Case** | **Runtime**
---------- |---------- |-----------|----------- | ----------- |
Create|	set = new Set()			
Add	|set.add(10)|	set object	||	O( 1 )
Has |	set.has(10) |	true if value exists, false otherwise	||	O( 1 )
Delete |	set.delete(10)|	true if value is removed, false otherwise	||	O( 1 )
Clear |	set.clear()	|Returns undefined|	|	O( N )
Size	|set.size|	Number of elements	

## Instantiate with values

```bash
const set = new Set('cat dog')

console.log(...set) // c, a, t,  , d, o, g

const set = new Set(['cat', 'dog'])

console.log(...set) // cat, dog

Iteration

// set.values()
for (const value of set.values())

// set.entries()
for (const value of set.entries())

// set.forEach()
set.forEach(val => console.log(val))