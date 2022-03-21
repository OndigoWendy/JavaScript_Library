# JAVASCRIPT DATA STRUCTURES AND ALGORITHMS
***This is not an official Google product.***

JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.

JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).

The ECMAScript standard does not include any input/output (I/O), such as networking, storage, or graphics facilities. In practice, the web browser or other runtime system provides JavaScript APIs for I/O.

JavaScript engines were originally used only in web browsers, but are now core components of some servers and a variety of applications. The most popular runtime system for this usage is Node.js.

Although Java and JavaScript are similar in name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design.

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
			<img width="289" alt="code-one" src="https://buggyprogrammer.com/wp-content/uploads/elementor/thumbs/Javascript-cheatsheet-ilovecoding-p7cccwz9fnx0gta2y3pxuc9vvrvsdjhtvbb5sd49ls.png">
		</td>
		<td>
			<img width="306" alt="render-one" src="https://raw.githubusercontent.com/iLoveCodingOrg/javascript-cheatsheet/master/src/js-cheatsheet3.png">
		</td>
	</tr>
	<tr>
		<td>
			<img width="381" alt="code-two" src="https://qph.fs.quoracdn.net/main-qimg-c19c4dc3d351da791a2ae539d9134401-pjlq">
		</td>
		<td>
			<img width="307" alt="render-two" src="https://www.bigocheatsheet.com/img/big-o-cheat-sheet-poster.png">
		</td>
	</tr>
</table>


 



#### Column Headers
The first line of the string is a space-delimited definition of **column headers**. A component can be defined by only using column headers. For instance,

```javascript
const ColumnsOnly = grid`
	1fr 2fr 1fr
`
```
defines a `ColumnsOnly` component that will arrange its children in 3 columns. The first and last column will be half the size of the middle column.

#### Row Headers
Each line after the first line defines a new row in the grid. The first element in the space-deilimited row definition defines the height of that row, and is called the **row header**. However, similar to column-only grid definitions, row-only grid defintions can be created by only specifying row headers on each new line. For instance,

```javascript
const RowsOnly = grid`
	10px
	50px
	100px
`
```
defines a `RowsOnly` component that will give each of its three child components heights of 10 pixels, 50 pixels and 100 pixels respectively.

#### Grid Areas
Using a combination of column headers and row headers, a grid is defined. The cells of the grid should be used to define **grid areas**. Grid areas are continuous square areas defined by an arbitrary identifier being placed in a **grid cell**. For example, the following grid defines two grid areas, one denoted by "A" and one denoted by "B".

```javascript
const SomeGrid = grid`
      1fr    2fr    3fr
1fr   A      A,B    A,B
2fr   A      A,B    A,B
`
```
Grid area defintions use commas to separate multiple overlapping grid areas identifiers in a given grid cell.

##### Overlap
Grid areas can overlap, as seen in the example above. This overlap defines a z-ordering. When rendered, an area will be drawn on top of any area it overlaps. **Grid areas are alphabetically ordered. Later areas will be rendered on top of earlier ones.** A grid cell containing grid area defintions `A,D,C` will be ordered as `A,C,D` and will render area `D` on top of area `C` on top of area `A`.

##### Empty Cells
Empty grid cells can be denoted by `..`. For instance,

```javascript
const SpacerGrid = grid`
       25%   50%   25%
25%    ..    ..    ..
50%    ..    A     ..
25%    ..    ..    ..
`
```
defines a `SpacerGrid` component that has a single grid area with a 10px border around it.

#### Grid Component
As mentioned above, the result of calling the `grid` factory method with a grid definition is a React component. The returned component has the following expectations:

* The number of child components should exactly equal the number of defined **grid areas**.
* The child components should be ordered according to the alphabeticall ordering of **grid area** identifiers or should use the *item* property.


```javascript
const Simple = grid`
      1fr    1fr
1fr   A      A
1fr   B      B
`

/** Error: not enough children */
<Simple>
	<Child/>
</Simple>

/** The first child is grid area "A", the second is grid area "B" */
<Simple>
	<ChildA/>
	<ChildB/>
</Simple>

/** The second child is grid area "A", the first is grid area "B" */
<Simple>
	<Child item="B"/>
	<Child item="A"/>
</Simple>
```

Grid components can also be styled via the `className` property. If your project is using [styled components](https://www.styled-components.com/), the returned grid component can also be styled using the `styled` method:

```javascript
const Simple = grid`
     1fr  1fr
1fr   A    A
1fr   B    B
`

const StyledSimple = styled(Simple)`
	background-color: red;
`
```

## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
* [Styled Components](https://www.styled-components.com/) - An awesome framework for styled React elements and components.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the Apache 2 License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

* A big shout-out to [styled components](https://www.styled-components.com/) for exposing the usefulness of [tagged template literals](https://www.styled-components.com/docs/advanced#tagged-template-literals).

[emotion]: https://github.com/emotion-js/emotion