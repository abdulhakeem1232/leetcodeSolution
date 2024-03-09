/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let set=new Set(nums2)
  
    for(i=0;i<nums1.length;i++){
        if(set.has(nums1[i])){
            return nums1[i]
        }
       
    }
    return -1
};
[1,2,3]
