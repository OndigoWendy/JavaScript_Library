Hashing/Hash Table
What is it?
Hashing is a way to map elements to a table of values for easier access. A hashing function is used to map values. The function below is taking the remainder of dividing the number by 10. With this hash function, there will only be a few elements[0–9] in the hash table, with each referencing a list of elements.

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
			<img width="289" alt="code-one" src="https://miro.medium.com/max/700/1*dsOKOpnP247_pFsrQfks6g.png">
		</td>
		<td>
			<img width="306" alt="render-one" src="https://www.freecodecamp.org/news/content/images/2021/05/JavaScript-Hash-Table.png">
		</td>
	</tr>
	<tr>
		<td>
			<img width="381" alt="code-two" src="https://www.freecodecamp.org/news/content/images/2021/05/g983.jpg">
		</td>
		<td>
			<img width="307" alt="render-two" src="https://res.cloudinary.com/practicaldev/image/fetch/s--7x2naWJ6--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://cl.ly/dcc906e5110a/Image%25202019-05-12%2520at%252011.38.16%2520PM.png">
		</td>
	</tr>
</table>

## The goal of the hashing function is to:
* increase efficiency by providing quicker access to data
* spread out the possible values throughout the hash table(you wouldn’t be gaining much efficiency if all the keys end up in one or two entries in the table).


## Implementation and Use Cases
A hash table can be implemented using an array and then each array has references to a linked list or other data structure. You can use a hash table to reduce time to find elements in a large data set.

## Functions
You can run a lookup, insert, delete, and more with a hash table. For lookup, you have to compute the hash value, then traverse the entries for that value. Insert and delete are also similar, as they begin with computing the hash value using the function. Then you can follow the insert/delete based on the type of data structure you used.