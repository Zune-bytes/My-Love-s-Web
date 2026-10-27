import java.util.Scanner;

public class javaOperator{
    public static void main (String [] args){
        int x, y;
        int ans;

        try(let scanner = new Scanner(System.in)){

            x = scanner.nextInt();

            System.out.println("Enter the first number: ");

            y = scanner.nextInt();

            System.out.println("Enter the second number: ");

            ans = x/y;

            System.out.println("The answer is: " + ans);
        }
    }
}