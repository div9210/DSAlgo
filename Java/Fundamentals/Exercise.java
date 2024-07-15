// Java - Introduction to Programming
// Exercise 1

// Questions

// Enter 3 numbers from the user & make a function to print their average.
// Write a function to print the sum of all odd numbers from 1 to n.
// Write a function which takes in 2 numbers and returns the greater of those two.
// Write a function that takes in the radius as input and returns the circumference of a circle.
// Write a function that takes in age as input and returns if that person is eligible to vote or not. A person of age > 18 is eligible to vote.
// Write a program to enter the numbers till the user wants and at the end it should display the count of positive, negative and zeros entered. 
// Two numbers are entered by the user, x and n. Write a function to find the value of one number raised to the power of another i.e. xn.
// Write a function that calculates the Greatest Common Divisor of 2 numbers. (BONUS)
// Write a program to print Fibonacci series of n terms where n is input by user :
// 0 1 1 2 3 5 8 13 21 ..... 
// In the Fibonacci series, a number is the sum of the previous 2 numbers that came before it.
// (BONUS)

package Fundamentals;

import java.util.Scanner;

public class Exercise {
    public static void question1(Scanner sc) {
        System.out.println("Enter the first number");
        int a = sc.nextInt();

        System.out.println("Enter the second number");
        int b = sc.nextInt();

        System.out.println("Enter the third number");
        int c = sc.nextInt();

        float avg = (a + b + c) / 3;
        System.out.println("The average is " + avg);
        System.out.println();

    }

    public static void question2(Scanner sc) {
        System.out.println("Enter the number n");
        int n = sc.nextInt();
        System.out.print("odd numbers till n are : ");
        for (int i = 1; i <= n; i += 2) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    public static void question3(Scanner sc) {
        System.out.println("Enter first number x");
        int x = sc.nextInt();

        System.out.println("Enter second number y");
        int y = sc.nextInt();

        if (x > y)
            System.out.println("x is greater than y");
        else if (y > x)
            System.out.println("y is greater than x");
        else
            System.out.println("x and y are equal");

        System.out.println();

    }

    public static void question4(Scanner sc) {
        System.out.println("Enter the radius of the circle");
        int radius = sc.nextInt();

        int circumference = (2 * 22 * radius) / 7;
        System.out.println("Circumference of the circle is : " + circumference);
        System.out.println();
    }

    public static void question5(Scanner sc) {
        System.out.println("Enter age");
        int age = sc.nextInt();

        if (age >= 18)
            System.out.println("Eligible to vote");
        else
            System.out.println("Go play! you little monkey!");
        System.out.println();
    }

    public static void question6(Scanner sc) {
        int count0 = 0;
        int count1 = 0;
        int count2 = 0;
        while (true) {
            System.out.println("Enter the number");
            int number = sc.nextInt();

            if (number > 0) {
                count1++;
            } else if (number < 0) {
                count2++;
            } else {
                count0++;
            }
            sc.nextLine();
            System.out.println("Type x to stop, and any c to continue");
            String op = sc.nextLine();
            if (op.equals("x")) {
                System.out.println("0 : " + count0 + ", +ve: " + count1 + ", -ve: " + count2);
                break;
            } else {
                continue;
            }
        }

        System.out.println();
    }

    public static void question7(Scanner sc) {
        System.out.println("Enter the number x");
        int x = sc.nextInt();

        System.out.println("Enter the number n");
        int n = sc.nextInt();

        int prod = 1;
        for (int i = 1; i <= n; i++) {
            prod = prod * x;
        }

        System.out.println("x to the power n is : " + prod);
        System.out.println();
    }

    public static void question8(Scanner sc) {
        System.out.println("Enter the number x");
        int x = sc.nextInt();

        System.out.println("Enter the number y");
        int y = sc.nextInt();

        System.out.println("GCD of x and y is : " + gcd(x, y));
    }

    public static int gcd(int x, int y) {
        if (y == 0)
            return x;

        return gcd(y, x % y);
    }

    public static void fibn(int n) {
        int x = 0;
        int y = 1;
        System.out.print(x + " | " + y);
        int count = 3;
        while (count <= n) {
            int sum = x + y;
            System.out.print(" | " + sum);
            x = y;
            y = sum;

            count++;
        }
    }

    public static void main(String[] args) {
        for (int i = 0; i < args.length; i++) {
            System.out.println(args[i]);
        }
        // Scanner sc = new Scanner(System.in);
        // question1(sc);
        // question2(sc);
        // question3(sc);
        // question4(sc);
        // question5(sc);
        // question6(sc);
        // question7(sc);
        // question8(sc);
        // fibn(11);

        // sc.close();
    }
}
