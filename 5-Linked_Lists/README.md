## Linked List
A linked list is a linear data structure consisting of nodes. Each node will have data, and a reference to a node. In the case of a doubly linked list, each node will reference the node in front of it and behind it. Each list has a head, which is a reference to the first node in the list. 
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
			<img width="306" alt="render-one" src="https://cdn.jstobigdata.com/wp-content/uploads/2019/06/Singly_linkedList_js-min.png">
		</td>
	</tr>
	<tr>
		<td>
			<img width="381" alt="code-two" src="https://sebhastian.com/doubly-linked-list-javascript/doubly-linked-list-example.png">
		</td>
		<td>
			<img width="307" alt="render-two" src="https://miro.medium.com/max/982/1*L6wNlphZEoYpurGnhkvrGw.png">
		</td>
	</tr>
</table>


You can 
* insert
* delete
* print the list, and much more!

## When Should I Use Linked List?
Linked list can be used when there must be variable size of the list. It also is helpful if you have to insert in arbitrary positions, or if the order of the data must be preserved.
Insertion

There are 3 scenarios:
 Adding 
 
 * to the front of the list
 * in the middle
 * or at the end.
 
  Each has different complexity.

## Inserting at the middle for a singly linked list:
Check if the given node is null
create a new node with the data
set newNode.next as equal to previousNode.next
set previousNode.next as newNode

## Deletion
You can delete a linked list node given a key, or a position. Here is the way to do it. We will call the target node ‘deleteNode’:
find the previousNode to the deleteNode
set previousNode.next to the deleteNode.next


## Finding the Middle Element
Here, you can do it 2 ways.

* You can traverse through the list once and keep track of the number of nodes, then simply traverse a second time until you reach numberOfNodes/2, then print the element.

* Method 2, would be using the runner technique.
 You would use two pointers, one going at twice the speed of the other. When one of the pointers increments twice, the slower one increments once. The runner is the faster pointer. Once the runner gets to the end of the list, you know that the slower pointer is exactly halfway down the list.
 
 