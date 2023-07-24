// class Solution {
//     public boolean isAnagram(String s, String t) {
//         // Step 1 : If lengths of the two strings are not equal: return false
//         if(s.length() != t.length()) return false;

//         // Step 2 : Loop over the string 1 and find the char at i in string 2
//         // if found : remove the char from str2 else return false
//         for(int i = 0; i < s.length(); i++) {
//             char currentChar = s.charAt(i);
//             // Find the currentChar in str2
//             int indexOfCurrentCharInStr2 = t.indexOf(currentChar);

//             // Case : Not found return false;
//             // Case: found remove the char from str2
//             if(indexOfCurrentCharInStr2 == -1) {
//                 return false;
//             }else {
//                 t = t.substring(0, indexOfCurrentCharInStr2) + t.substring(indexOfCurrentCharInStr2 +1, t.length());
//             }
//         }

//         // Check if str2 is empty
//         return t.isEmpty();
//     }
// }



// Solution 2
import java.util.Arrays;
class Solution {
    public boolean isAnagram(String s, String t) {
        // Step 1 : If lengths of the two strings are not equal: return false
        if(s.length() != t.length()) return false;

        int[] alphabets = new int[26];
        Arrays.fill(alphabets, 0);

        // loop over either str1 or str2
        for(int i = 0; i < s.length(); i++) {
            char currentCharInS = s.chatAt(i);
            char currentCharInT = t.charAt(i);
            int sCharPosition = currentCharInS - 'a';
            int tCharPosition = currentCharInT - 'a';
            alphabets[sCharPosition]++;
            alphabets[tCharPosition]--;
        }

        for(int i =0; i < alphabets.length(); i++) {
            if(alphabets[i] != 0) return false;
        }

        return true;
    }
}


// Solution 1 : 575 ms
// Solution 2 : 5 ms