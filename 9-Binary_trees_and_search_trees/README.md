## Binary Search Tree
A binary search Tree is a version of a binary tree with a few rules. First of all, a binary tree is a type of graph with only two children per node at the maximum. 

There are 2 main rules:
* The left child node must be less than the parent node
* The right child node must be greater than the parent node

Here is an example:

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
			<img width="289" alt="code-one" src="https://miro.medium.com/max/700/1*cHND21a55thqfxMvItMQxg.png">
		</td>
		<td>
			<img width="306" alt="render-one" src="https://miro.medium.com/max/1200/1*tUBYCHi32Zj0B2UCw0qmlA.png">
		</td>
	</tr>
	<tr>
		<td>
			<img width="381" alt="code-two" src="https://miro.medium.com/max/888/1*4lB0Jlm5HFfjFKuuA1VACg.png">
		</td>
		<td>
			<img width="307" alt="render-two" src="https://miro.medium.com/max/1050/1*jkOa2AWUaUKaQL-UKQwfFg.png">
		</td>
	</tr>
</table>


https://www.geeksforgeeks.org/binary-tree-data-structure/

You can search for an element, insert into a tree, and much more.

There is a root node and its value, a leftChild, and a rightChild.

* Searching for a Node by Key:
Here are the steps for searching for the node:
* start at the root, and check if the root is equal to the key or null. If true, return root.
* If the key is less than the root, call a recursive function on the leftChild to search it
* If the key is greater than the root, call a recursive function on the rightChild to search it



