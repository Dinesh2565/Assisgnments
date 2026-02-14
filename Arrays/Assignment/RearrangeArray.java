package Arrays.Assignment;

public class RearrangeArray {
    public int[] rearrangeArray(int[] nums) {
        int [] ans= new int [nums.length];
        int p=0;
        int n=1;
        int i=0;
        while (i<nums.length){
            if(nums[i]<0){
                ans[n]=nums[i];
                n+=2;
            }
            else{
                ans[p]=nums[i];
                p=p+2;
            }
            i++;
        }
        return ans;
    }
}
