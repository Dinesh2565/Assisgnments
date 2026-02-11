package Arrays.Custom_ArrayMethods;

import java.util.Arrays;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        arrays a=new arrays(5);
        a.customPush(10);
        a.customPush(20);
        a.customPush(30);
        a.customPush(40);
        a.customPush(50);
        a.customPush(60);
        a.customPush(70);
        a.customPush(80);
        a.customPush(80);
System.out.println(Arrays.toString(a.getArray()));
        a.add(5,3);
        System.out.println(Arrays.toString(a.getArray()));
        a.delete(3);
        System.out.println(Arrays.toString(a.getArray()));
    }
}