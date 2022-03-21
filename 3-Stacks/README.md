## Stack
A Stack is another linear data structure that follows the ‘Last in First Out’ order. It turns out that while you are in the kitchen, you are likely implementing a stack when you are storing your plates.
Another common place I use a stack is the git command git stash and git stash pop(). This is helpful for storing git changes in a stack that I don’t want to commit quite yet. The most recent element inserted is the first to come out of the stack, as pictured below:

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
			<img width="289" alt="code-one" src="https://miro.medium.com/max/700/1*4f7BfCZJ7avs_Vh_MaN2Bw.png">
		</td>
		<td>
			<img width="306" alt="render-one" src="https://res.cloudinary.com/practicaldev/image/fetch/s--PO9oUsFs--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/st73hnavf3vbeitow7ln.jpeg">
		</td>
	</tr>
	<tr>
		<td>
			<img width="381" alt="code-two" src="https://miro.medium.com/max/1400/1*zXnvZ0ynGpKxVoWU7GIlTg.png">
		</td>
		<td>
			<img width="307" alt="render-two" src="https://media.geeksforgeeks.org/wp-content/uploads/20210716162942/stack-660x345.png">
		</td>
	</tr>
</table>
https://www.geeksforgeeks.org/stack-data-structure-introduction-program/

## The most common stack commands are:
* Push(item) -> push an item to the top of the stack
* Pop() -> remove an item from the top of the stack
* peek() -> return the item from the top of the stack(does nothing to alter stack)
* size() -> returns the number of items
* isEmpty() -> returns if the stack is empty

## Stack Implementation and Use Cases
A stack can be implemented with an array or a linked list as well. Keep in mind you will have to declare an array size and worry about resizing if you are using an array.
When traversing a graph, depth first search can be implemented using a stack.
