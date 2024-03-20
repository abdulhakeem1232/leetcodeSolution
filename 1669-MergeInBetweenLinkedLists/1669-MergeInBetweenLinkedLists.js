    while(cur2.next&& count!=b){
        cur2=cur2.next
        count++
    }
    while(cur.next){
        cur=cur.next
    }
    cur.next=cur2
    return list1

};
[10,1,13,6,9,5]
