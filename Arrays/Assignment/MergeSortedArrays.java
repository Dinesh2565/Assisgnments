package Arrays.Assignment;

import java.util.Arrays;

public class MergeSortedArrays {

   public static void mergeArray(int []nums1,int []nums2){
       int i=0;
       int j=0;
       while(i<nums1.length && j<nums2.length){
           if(nums1[i]<nums2[j]  && nums1[i]!=0){
               i++;
           }
           else if(nums1[i]>=nums2[j]){
               int temp=nums1[i];
               nums1[i]=nums2[j];
               nums2[j]=temp;
               i++;
           }
           else{
               nums1[i]=nums2[j];
               j++;
           }
       }

       while (j<nums2.length){
           nums1[i]=nums2[j];
           i++;
           j++;
       }

       System.out.println(Arrays.toString(nums1));
   }

    public static void main(String[] args) {
        int []nums1 ={1, 2, 3, 0, 0, 0};
        int [] nums2 = {2, 5, 6};
        mergeArray(nums1,nums2);
    }

}
