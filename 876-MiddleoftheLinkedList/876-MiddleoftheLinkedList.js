 */
var middleNode = function(head) {
    let fast=head
    let slow=head
    while(fast!=null && fast.next!=null){
        fast=fast.next.next
        slow=slow.next
    }
    return slow
};
[1,2,3,4,5]
