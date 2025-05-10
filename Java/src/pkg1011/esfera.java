package pkg1011;

import java.util.Locale;
import java.util.Scanner;

public class esfera {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        double raio = sc.nextDouble();
        double pi = 3.14159;
        double volume = 4.0 / 3.0 * pi * Math.pow(raio, 3);

        System.out.println(String.format("VOLUME = %.3f", volume));


        sc.close();
    }
}
