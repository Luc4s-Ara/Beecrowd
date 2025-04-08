package pkg1930;

import java.util.Scanner;

public class tomadas {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] tomadas = new int[4];
        int soma = 0;
        int maxAparelhos = 0;

        for (int i = 0; i < 4; i++){
            tomadas[i] = sc.nextInt();
        }

        for (int i = 0; i < tomadas.length; i++){
            soma += tomadas[i];
        }

        maxAparelhos = soma - 3;

        System.out.println(maxAparelhos);
        sc.close();
    }
}
