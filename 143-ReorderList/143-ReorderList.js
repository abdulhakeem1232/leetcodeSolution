        rev.push(cur.val)
        cur=cur.next
    }
    cur=head
    let i=0,c=0
    while(cur){
        if(i%2==0){
            cur.val=arr[c]
            c++
        }else{
            cur.val=rev.pop()
        }
        i++
        cur=cur.next
    }
    return head
};
[1,2,3,4]
