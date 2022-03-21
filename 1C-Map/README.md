## Map

<table>
	<thead>
		<td>
			<b>SUMMARY</b>
		</td>
		<td>
			<b>SUMMARY</b>
		</td>
	</thead>
	<tr>
		<td>
			<img width="289" alt="code-one" src="https://www.freecodecamp.org/news/content/images/2021/03/javascript-map-function.png">
		</td>
		<td>
			<img width="306" alt="render-one" src="https://i.morioh.com/210422/a97b0da0.webp">
		</td>
	</tr>
	<tr>
		<td>
			<img width="381" alt="code-two" src="https://atendesigngroup.com/sites/default/files/array-map.png">
		</td>
		<td>
			<img width="307" alt="render-two" src="https://miro.medium.com/max/1400/1*BkcYRGvVCLfOBYqDP2SBXg.png">
		</td>
	</tr>
</table>




 **Function** | **Syntax** | **Return Value** | **Invalid Case** | **Runtime**
---------- |---------- |-----------|----------- | ----------- |
Create |	map = new Map() |	the map		
Add / Update|	map.set('key', 'val')|	the map object |	|	O( 1 )
Get|	map.get('key') |	the value of key|	return undefined if key not found	|O( 1 )
Has|	map.has('key')|	true if key match, false if not|	|	O( 1 )
Delete|	map.delete('key') |	true if removed, false if key did not exist	| |	O( 1 )
Clear|	map.clear()	|undefined|	|	O( N )
Size|	map.size|	Number of entries	

## Instantiate with values
```bash

const map = new Map([
  ['red', 10],
  ['blue', 20],
  ['green', 30]
])

## Iteration
// map.keys()
for (const key of map.keys())

// map.entries()
for (const [key, value] of map.entries())

// map.forEach
map.forEach((value, key) => { // Note it's value-first, not key-first
  console.log(`${key}: ${value}`)
})


.clear() vs new Map()
How should you clean a map?

You might think that if you instantiate a new Map, the runtime could be faster. That might be true, but keep in mind that the previous map will have to be garbage collected. This means that the O( N ) work to clear the map is being done regardless, just in the garbage collector thread. You are basically giving up responsibility of clearing up the memory and leaving it to the garbage collector.

In general, it is not recommended to allocate new memory if you can avoid it.

Explain this if it comes up to your interviewer. Going with .clear() is a pretty safe choice.

