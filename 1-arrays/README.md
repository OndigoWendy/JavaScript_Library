
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
			<img width="289" alt="code-one" src="https://jrsinclair.com/assets/javascript-array-methods-cheat-sheet-front.png">
		</td>
		<td>
			<img width="306" alt="render-one" src="https://www.tutsmake.com/wp-content/uploads/2019/03/JavaScript-Array-Methods.jpeg">
		</td>
	</tr>
	<tr>
		<td>
			<img width="381" alt="code-two" src="https://i.pinimg.com/originals/b3/00/1a/b3001a273cd8b05f31c0b1b240c545aa.jpg">
		</td>
		<td>
			<img width="307" alt="render-two" src="https://res.cloudinary.com/practicaldev/image/fetch/s--DN-mWuTY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/599/1%2ADOwBN5p5bCJ5ZKKRiKQCgg.png">
		</td>
	</tr>
</table>


1. Arrays
What's an Array? The way I visualize it is a table. Below is an example of how an array would look like.

**Index** | **Value** | 
----------|:----------:|
0	|this is the first value, stored at zero position
1	|the index of an array runs in sequence
2	|this could be useful for storing data that are required to be ordered, such as rankings or queues
3   |in JavaScript, array's value could be mixed; meaning value of each index could be of different data, be it String, Number or even Objects

 **Function** | **Syntax** | **Return Value** | **Invalid Case** | **Runtime**
----------|:----------:|-----------|----------- | ----------- |
Create |	array = [] |	null		
Pop	|array.pop()	|popped element|	return undefined if empty|	O( 1 )
Push|	array.push(10)|	new length of the array	|	|O( 1 )
Shift / Dequeue|	array.shift()	|the removed (first) element|	return undefined if empty |O( N )
Unshift / Queue|	array.unshift(10) |	new length of the array	|	|O (N)
Find|	array.find(element => element > 5)|	The first element in the array that matches the testing function|	returns undefined if no match|    |	O( N )
Index Of|	array.indexOf(element => element > 5)|	The index of the first element that matches the testing function|	returns -1 if no match|	O( N )
Filter|	array.filter(element => element > 5)	|A new array with matched elements|	Empty array if no match|	O( N )
Size|	array.length|	Number of elements	

## Iteration

```bash
// array.values()
for (const val of array.values())

// array.entries()
for (const [index, val] of array.entries())

// array.forEach()
array.forEach(val => val * 2)

// array.forEach()

array.forEach((val, index) => { // Note it's value-first, not index-first
  console.log(`${index}: ${val}`)
})


//Methods to know
array.splice() - modifies array in-place.

array.slice() - returns copy of array, original array is not modified

