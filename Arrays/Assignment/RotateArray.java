package Arrays.Assignment;

import java.util.Arrays;

public class RotateArray {


    private static void reverse (int []nums,int i, int j){
        while(i<=j){
            int temp=nums[i];
            nums[i]=nums[j];
            nums[j]=temp;
            i++;
            j--;
        }
    }
    public static void rotate(int[] nums, int k) {

        if(k>nums.length){
            k%=nums.length;
        }
        reverse(nums,0,k-1);
        reverse(nums,k,nums.length-1);
        reverse(nums,0,nums.length-1);

    }

}
