package Arrays.Assignment;

import java.util.Arrays;

public class MajorityElement {

    public int majorityElement(int[] nums) {
        //O(n**2)
        // for(int i=0;i<nums.length;i++){
        //     int curr=nums[i];
        //     int count =1;
        //     for(int j=i+1;j<nums.length;j++){
        //             if(nums[i]==nums[j]){
        //                 count++;
        //             }
        //     }
        //     if(count>(nums.length/2)){
        //         value=nums[i];
        //     }
        // }


        // O(nlogn)
        int count=0;
        int value=0;
//        Arrays.sort(nums);
//        int i=0;
//        int j=0;
//
//        while(j<nums.length){
//            if(nums[i]==nums[j]){
//                count++;
//            }
//            if(count>nums.length/2){
//                value=nums[i];
//                break;
//            }
//
//            if(nums[i]!=nums[j]){
//                i=j;
//            }
//            j++;
//
//
//        }


        //O(N)
            for(int i=0;i<nums.length;i++){
                if(count==0){
                    value=nums[i];
                }
                else if(nums[i]==value){
                    count++;
                }
                else{
                    count--;
                }
            }
        return value;





    }
}
