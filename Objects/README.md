Think of objects as a logical grouping of a bunch of properties. Properties could be some variable that it's storing or some methods that it's using. I also visualize an object as a table. The main difference is that object's "index" need not be numbers and is not necessarily sequenced.


**properties** | **Value** | 
----------|:----------:|
name |"I'm an object"
data|	["You can add an array as a property", "Recall that array is a sequenced list of items", "but just because it's sequenced, doesn't means you can only use it for that purpose"]
function_name |	function(parameters){//do something}Object

##Functions

**Function** | **Syntax** | **Return Value** | **Invalid Case** | **Runtime**
---------- |---------- |-----------|----------- | ----------- |
Create |	object = {}			
Add	| object.key = 10 |object['key'] = 10|		| |	O( 1 )
Get	|object.key | object['key'] |value of key|	undefined if key prop does not exist|	O( 1 )
Has	|object.key !== undefined|'key' in object|	true if key exists. false otherwise.|O( 1 )
Delete|	delete object.key|	false if key is a non-configurable property and writable. Throws error if non-configurable and non-writable. true otherwise.	Throws error if key is a non-configurable property and non-writable|	|O( 1 )
Size|	Object.keys(object).length |	Number of properties of object||		O( N )

Configurable: Indicates whether the property descriptor may be changed and if the property may be deleted from the corresponding object. Reference

Writable: Indicates whether the value associated with the property may be changed with an assignment operator. Reference

##Iteration
```bash
// for-in
for (const key in object) {
  const value = object[key]
}
// Object.keys()
Object.keys(object).forEach(key => {
  const value = object[key]
})

