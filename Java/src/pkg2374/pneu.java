package pkg2374;

import java.util.Scanner;

public class pneu {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int M = sc.nextInt();

        int diferenca = N - M;

        System.out.println(diferenca);
        sc.close();
    }
}
