/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans=[]
    for(let i=0;i<nums1.length;i++){
        let j=nums2.indexOf(nums1[i])
        ans[i]=-1
        for(let k=j+1;k<nums2.length;k++){
            if(nums2[k]>nums1[i]) {
                ans[i]=nums2[k]
                break;
            }
        }
    }
    return ans
};