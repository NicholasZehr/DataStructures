// The Stack class allows us to store an array full of elements that we have put in the stack. We also have access to a copy of these methods when we instantiate each Stack using the keyword new. The methods we have used in this class are push, pop, peek, isEmpty, and printStack. This Stack class uses an array and array methods to execute it behavior, however we also get the added benefit of customizing specific behaviors such as print and our "Nothing else to pop!" statement.
class Stack {
    constructor()
    {
        this.items = [];
    }  
    push(element)
    {
        this.items.push(element);
    }
    pop()
    {
        if (this.items.length == 0)
            return "Nothing else to pop!";
        return this.items.pop();
    }
    peek()
    {
        return this.items[this.items.length - 1];
    }
    isEmpty()
    {
        return this.items.length == 0;
    }
    printStack()
    {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}
module.exports = Stack