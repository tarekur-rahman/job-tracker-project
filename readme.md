1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById grabs a single item by its ID. getElementsByClassName collects all items with the same class. querySelector picks any element using CSS selectors, while querySelectorAll finds every match.

2.How do you create and insert a new element into the DOM?
Use document.createElement to build an element in memory. Then, use appendChild to attach it to a parent so it actually appears on the page.

3.What is Event Bubbling? And how does it work?
When you click an element, the event "bubbles up" like a signal, traveling from the child to the parent and then to the grandparent, all the way to the top.

4.What is Event Delegation in JavaScript? Why is it useful?
Instead of adding listeners to every child, you add one to the parent. The parent "catches" the bubbling signal from its children, which is efficient and works for new items.

5.What is the difference between preventDefault() and stopPropagation() methods?
preventDefault stops the browser's default behavior, like a link opening. stopPropagation stops the event signal from traveling further up to parent elements.