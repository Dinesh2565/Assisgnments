package Arrays;

class arrays {

   private  int size;
    int pointer;
    private  int[] array;
    public arrays(int size){
        this.size = size;
        this.array=new int[size];
        this.pointer=-1;
    }


   public void customPush(int n){

        if(isFull()){
            resize();
        }
       pointer++;
        array[pointer]=n;
   }
   private void resize(){
        size=size*2;
       int[] temp=new int[size];
       for(int i=0;i<size/2;i++){
           temp[i]=array[i];
       }
       array=temp;
   }

   private  boolean isFull(){
       return pointer==array.length-1;

   }

    public  int[] getArray() {
        int[] temp=new int[pointer+1];
        for(int i=0;i<=pointer;i++){

                temp[i]=array[i];

        }
        return temp;
    }


    public void delete(int index){
        for(int i=index;i<pointer;i++){
            array[i]=array[i+1];
        }
        pointer--;

    }
    public void add(int n,int index){
        if (index < 0 || index > pointer + 1) {
            throw new IndexOutOfBoundsException();
        }
        if (isFull()){
            resize();
        }

        for(int i=pointer;i>=index;i--){
             array[i+1]=array[i];
        }
        array[index]=n;
        pointer++;
    }

public int getPointer() {
    return pointer;
}
//    @Override
//    public String toString() {
//       return array.toString();
//    }
}
