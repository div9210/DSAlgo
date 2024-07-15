package Fundamentals;

import java.util.Scanner;

class Patterns {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number of rows");
        int rows = sc.nextInt();
        System.out.println("Enter the number of cols");
        int cols = sc.nextInt();

        // ****
        // ****
        // ****
        System.out.println("Pattern 1");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                System.out.print("*");
            }
            System.out.println(" ");
        }

        // *****
        // * *
        // * *
        // *****
        System.out.println("\n\nPattern 2");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (i == 0 || i == rows - 1 || j == 0 || j == cols - 1) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.print("\n");
        }

        // Half Pyramid
        System.out.println("\n\nPattern 3");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        // Invert Half Pyramid
        System.out.println("\n\nPattern 4");
        for (int i = 0; i < rows; i++) {
            int star = rows - i;
            while (star != 0) {
                System.out.print("*");
                star--;
            }
            System.out.println();
        }

        // Half Pyramid - 180 degree rotation
        System.out.println("\n\nPattern 5");
        for (int i = 0; i < rows; i++) {
            int space = rows - i - 1;
            while (space != 0) {
                System.out.print(" ");
                space--;
            }

            for (int j = 0; j <= i; j++) {
                System.out.print("*");
            }

            System.out.println();
        }

        System.out.println("\n\nPattern 6");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print((j + 1) + " ");
            }

            System.out.println();
        }

        System.out.println("\n\nPattern 7");
        for (int i = 0; i < rows; i++) {
            int numsInRow = rows - i;
            for (int j = 1; j <= numsInRow; j++) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
        sc.close();

        System.out.println("\n\nPattern 8");
        int currentNum = 1;
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print(currentNum + " ");
                currentNum++;
            }
            System.out.println();
        }

        System.out.println("\n\nPattern 9");
        boolean startWithZero = false;
        for (int i = 0; i < rows; i++) {
            int startNumber = startWithZero == true ? 0 : 1;
            for (int j = 0; j <= i; j++) {
                System.out.print(startNumber + " ");
                startNumber = startNumber == 0 ? 1 : 0;
            }
            startWithZero = !startWithZero;
            System.out.println();
        }

        System.out.println("\n\nPattern 10");
        for (int i = 0; i < rows; i++) {
            int spaces = rows - i;
            while (spaces != 0) {
                System.out.print(" ");
                spaces--;
            }

            // Print rows number of star
            for (int j = 0; j < rows; j++) {
                System.out.print("*");
            }

            System.out.println();
        }

        System.out.println("\n\nPattern 11");
        int startNum = 1;
        for (int i = 0; i < rows; i++) {
            int spaces = rows - i - 1;
            while (spaces != 0) {
                System.out.print(" ");
                spaces--;
            }

            for (int j = 0; j <= i; j++) {
                System.out.print(startNum);
            }
            startNum++;
            System.out.println();
        }

        System.out.println("\n\nPattern 12");
        startNum = 1;
        for (int i = 0; i < rows; i++) {
            int spaces = rows - i - 1;
            while (spaces != 0) {
                System.out.print(" ");
                spaces--;
            }

            // Print startNum to 1 (1 not inclusive)
            int temp = startNum;
            while (temp > 1) {
                System.out.print(temp);
                temp--;
            }
            // Print the temp which must be 1 here
            System.out.print(temp);

            // Print from temp + 1 to startNum
            temp++;
            while (temp <= startNum) {
                System.out.print(temp);
                temp++;
            }

            startNum++;
            System.out.println();
        }

        System.out.println("\n\nPattern 13");
        for (int i = 1; i <= rows; i++) {
            int stars = i;
            int spaces = (2 * rows) - (2 * stars);

            // Print first half of stars
            for (int s = 0; s < stars; s++) {
                System.out.print("*");
            }

            // Print spaces
            while (spaces > 0) {
                System.out.print(" ");
                spaces--;
            }

            // Print second half of stars
            for (int s = 0; s < stars; s++) {
                System.out.print("*");
            }

            System.out.println();
        }

        for (int i = rows; i >= 1; i--) {
            int stars = i;
            int spaces = (2 * rows) - (2 * stars);

            // Print first half of stars
            for (int s = 0; s < stars; s++) {
                System.out.print("*");
            }

            // Print spaces
            while (spaces > 0) {
                System.out.print(" ");
                spaces--;
            }

            // Print second half of stars
            for (int s = 0; s < stars; s++) {
                System.out.print("*");
            }

            System.out.println();
        }

        System.out.println("\n\nPattern 14");
        for (int i = 0; i < rows; i++) {
            int spaces = rows - i - 1;

            // Print spaces
            while (spaces > 0) {
                System.out.print(" ");
                spaces--;
            }

            // Print star
            for (int j = 0; j < 2 * i + 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        for (int i = rows - 1; i >= 0; i--) {
            int spaces = rows - i - 1;

            // Print spaces
            while (spaces > 0) {
                System.out.print(" ");
                spaces--;
            }

            // Print star
            for (int j = 0; j < 2 * i + 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        sc.close();
    }
}