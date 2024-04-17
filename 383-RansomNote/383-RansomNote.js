 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let obj={}
    for(let i=0;i<magazine.length;i++){
        obj[magazine[i]]=(obj[magazine[i]]||0)+1
    }
    for(let j=0;j<ransomNote.length;j++){
        if(obj[ransomNote[j]]==0 ||obj[ransomNote[j]]==undefined) return false
    }
        else obj[ransomNote[j]]=obj[ransomNote[j]]-1
    return true
};
"
