  }
  return arr
    }
     values=inorder(root,values)
     let res=Infinity
     for(let i=1;i<values.length;i++){
        if(Math.abs(values[i]-values[i-1])<res) res=Math.abs(values[i]-values[i-1])
     }
     return res
};
[
