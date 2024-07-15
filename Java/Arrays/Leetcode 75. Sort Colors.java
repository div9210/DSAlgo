import java.util.Arrays;
import java.util.Scanner;

class Solution {
    public void sortColors(int[] nums) {
        int n = nums.length;

        int left = 0;
        int mid = 0;
        int right = n - 1;

        while (mid <= right) {
            if (nums[mid] == 1) {
                mid++;
            } else if (nums[mid] == 0) {
                // Swap it with left
                swap(nums, mid, left);
                left++;
                mid++;
            } else {
                swap(nums, mid, right);
                right--;
            }
        }
    }

    public void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    public static void main(String[] args) {
        int[] colors = { 1, 2, 0, 0, 1, 0, 2, 2, 1, 0 };
        Solution s = new Solution();
        s.sortColors(colors);
        System.out.println(Arrays.toString(colors));
    }
}

class Calculator {
    public static int sum(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        String op = sc.next();

        int sum = sum(a, b);
        System.out.println("Sum :" + sum);
        int result = -1;

        switch (op) {
            case "+":
                result = a + b;
                break;
            case "-":
                result = a - b;
                break;
            case "*":
                result = a * b;
                break;
            case "/":
                result = a / b;
                break;
            case "%":
                result = a % b;
                break;
            default:
                break;
        }
        System.out.println("Result is " + result);

        sc.close();
    }
}