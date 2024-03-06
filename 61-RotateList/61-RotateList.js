        size++
        prev=cur
        cur=cur.next
    }
   if(k==size) return head
   k=k>size?k%size:k
    let prev=null
    let cur=head,size=0
    while(cur){
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
   if(prev!=null)
[
