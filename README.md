# decisions.js
`decisions.js` is a JavaScript library that allows you to define a set of rules to apply to an object and execute the appropriate action based on the first matching rule. It's useful when you need to make a decision based on a complex set of conditions.

---

## Usage
To use `decisions.js`, create a new instance of it by passing the object you want to evaluate as its argument:
```javascript
const person = {
  name: 'Alice',
  age: 30
};

const tree = new DecisionTree(person); // in this case we're evaluating a person object
```

### Adding rules
Once you have a `decisions.js` instance, you can add rules to it. A rule consists of a `condition` and an `action`. The `condition` is a `function` that returns a `boolean` and evaluates to true if the `rule` should be applied, and the `action` is a `function` that specifies what should be done if the rule is applied.

To add a rule to the `DecisionTree`, call the `caseCondition()` method with the condition and the `action` as arguments. Here's an example:
```javascript
tree.caseCondition((p) => p.age > 18, (p) => console.log(p.name + ' is an adult'));
```
In this example, we're adding a rule that says "if the person's age is greater than 18, then print 'Alice is an adult'" (where "Alice" is the person's name).

### Adding a default rule
If none of the rules match, you can specify a default action to be executed by calling the `setDefaultRule()` method:
```javascript
tree.setDefaultRule((p) => console.log(p.name + ' is a minor'));
```
In this example, we're specifying that if none of the other rules match, the action should be to print "Alice is a minor".

### Applying the rules
Once you've added all the rules, you can apply them to the object by calling the `decide()` method:
```javascript
tree.decide();
```
This will evaluate the object and execute the first matching rule.

---

## Example
Here's an example of using `decisions.js` to evaluate a `Person` object:
```javascript
// Create a new DecisionTree with a Person object
const person = {
  name: 'Alice',
  age: 30
};
const tree = new DecisionTree(person);

// Add a rule
tree.caseCondition((p) => p.age > 18, (p) => console.log(p.name + ' is an adult'));

// Add a default rule
tree.setDefaultRule((p) => console.log(p.name + ' is a minor'));

// Apply the rules
tree.decide();
```
In this example, we're creating a new `DecisionTree` instance with a `Person` object. We're adding a `rule` that says "if the person's age is greater than 18, then print 'Alice is an adult'" (where "Alice" is the person's name). We're also adding a default `rule` that says "print 'Alice is a minor' if none of the other rules match". Finally, we're applying the rules to the person object by calling `decide()`.

You may also use this syntax:
```javascript
// Create a Person object
const person = { name: 'Alice', age: 30 };

// Create a DecisionTree object and apply rules
const decision = new DecisionTree(person)
  .caseCondition((p) => p.age > 18, () => console.log(`${person.name} is an adult`))
  .defaultCase(() => console.log(`${person.name} is a minor`))
  .decide();
```

---

## Error handling & known issues
`decisions.js` provides some basic error handling. If you call `defaultCase()` with a null action, you'll get an error.

Known issues:
  - If you don't add any rules to the `DecisionTree`, calling `decide()` will NOT result in an error. Similarly, if you don't call `decide()` after adding rules, you won't get an error as well. I might try to fix this issue as soon as possible.

---
###### check out the java version [here](https://github.com/Adversing/Decisions4J/) and the python version [here](https://github.com/Adversing/decisions.py/) :)   
