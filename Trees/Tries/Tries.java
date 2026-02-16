package Trees.Tries;
class Node{
    public Node(){

    }
    Node elements[]=new Node[26];
    boolean end=false;


    boolean isPresent(char ch){
        return elements[ch-'a']!=null;
    }

    Node getElement(char ch){
        return elements[ch-'a'];
    }

    void add(char ch,Node node){
        elements[ch-'a']=node;
    }

    void remove(char ch){
        elements[ch-'a']=null;
    }
    void setEnd(){
        end=true;
    }

    boolean isEnd(){
        return end;
    }
}
public class Tries {
    private static Node root;

    Tries(){
        root=new Node();
    }

    public static void insert(String s){
        Node node=root;
        for(int i=0;i<s.length();i++){
            if(!node.isPresent(s.charAt(i))){
                node.add(s.charAt(i),new Node());
            }
            node =node.getElement(s.charAt(i));
        }
        node.setEnd();
        System.out.println("successfully inserted");
    }

    public static boolean check(String s){
        Node node=root;
        for(int i=0;i<s.length();i++){
            if(!node.isPresent(s.charAt(i))){
                return false;
            }
            node =node.getElement(s.charAt(i));
        }
        return  true;
    }


    public static void main(String[] args) {
        Tries t=new Tries();
        t.insert("worddsfasdf");
        System.out.println( t.check("words"));
        System.out.println(t.check("word"));

    }

}
