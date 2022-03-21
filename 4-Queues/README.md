## Queue

A Queue is another linear data structure that follows the ‘First in First Out’ order.

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
			<img width="289" alt="code-one" src="https://miro.medium.com/max/700/1*APr3P5joewEKYcM9YV7GKA.png">
		</td>
		<td>
			<img width="306" alt="render-one" src="https://i0.wp.com/www.admixweb.com/wp-content/uploads/2017/06/Queue-JavaScript.png?ssl=1">
		</td>
	</tr>
	<tr>
		<td>
			<img width="381" alt="code-two" src="https://i.ytimg.com/vi/z_s7D96re_A/maxresdefault.jpg">
		</td>
		<td>
			<img width="307" alt="render-two" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_ywfiEqLpnGho-UVso9ZWBM4oHOliaYbqknnJwlKTc27Q9Hymp7gqibeFS8BMFV3ghc&usqp=CAU">
		</td>
	</tr>
</table>

The most common queue commands are:
* Enqueue(add an element to the queue, which happens at the rear)
* Dequeue(remove an element from the queue, which happens at the front)
* getFront(get the first element in the queue)
* getRear(get last element in the queue)
* size() -> returns the number of items
* isEmpty() -> returns if the queue is empty

## When Should I Use a Queue?
A queue can be used when you need to give priority to the first items inserted into the queue. Think of asynchronous api calls. If a resource must be shared across multiple entities, then the first entity to use the system will be given priority in the queue. Think of a restaurant where it is strictly ‘first come, first served’. The first customer is given priority over all others.


## Implementation and Common Applications
A Queue can be implemented using an array or a linked list. A Linked list implementation seems slightly easier, since you don’t need to worry about dealing with a max array size and increasing the size of the array when the capacity of the queue is hit.
Breath first search, a common searching algorithm, can be implemented using a queue.