1. Arrays
What's an Array? The way I visualize it is a table. Below is an example of how an array would look like.

**Function** | **Syntax** | 
----------|:----------:|
index |	value
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

