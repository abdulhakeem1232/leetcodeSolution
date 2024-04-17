var validateStackSequences = function(pushed, popped) {
    let index=0;stack=[]
    for(let num of pushed){
        stack.push(num)
        while(stack.length && stack[stack.length-1]==popped[index]){
            stack.pop()
        }
    }
            index++
    return stack.length==0
};
[
