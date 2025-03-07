package pkg1002;

import java.util.Locale;
import java.util.Scanner;



public class areaDoCirculo {
    public static final double n = 3.14159;

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        double raio = sc.nextDouble();

        double area = n * (raio * raio);

        System.out.printf("A=%.4f\n", area);

        sc.close();

    }
}
