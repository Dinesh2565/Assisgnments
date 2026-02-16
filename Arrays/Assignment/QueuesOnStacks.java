package Arrays.Assignment;

import java.util.Stack;

public class QueuesOnStacks {
    static Stack<Integer> st=new Stack<>();
   static Stack<Integer> st2=new Stack<>();
    private static Stack<Integer> queuesOnStack(){
        st.push(4);
        st.push(2);
        st.push(7);
        st.push(5);
        st.push(9);
        while(!st.isEmpty()){
            st2.push(st.pop());
        }


        return st2;

    }


}
