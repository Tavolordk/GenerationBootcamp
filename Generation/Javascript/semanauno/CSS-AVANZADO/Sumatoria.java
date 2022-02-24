public class Sumatoria{
    public static void main(String[] args) {
        int suma=0;
        int count=0;
        for(int i =1; i<366; i++){
            
            
                suma=suma+i;
                System.out.println(i);
                count++;
            
        }
        System.out.println("Resultado: " + suma);
        System.out.println("Se han sumado ["+count+ "] Numeros");
    }
}