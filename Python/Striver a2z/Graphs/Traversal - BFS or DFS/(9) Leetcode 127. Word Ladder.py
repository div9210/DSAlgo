class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        wordSet = set(wordList)
        if not endWord in wordSet: return 0

        q = deque()
        q.append((beginWord, 1)) # word, count

        while q:
            word, count = q.popleft()

            if word == endWord: return count

            # Now change every character of word
            # with all the english lowercase letters
            for i in range(len(word)):
                for letter in string.ascii_lowercase:
                    if word[i] == letter: continue

                    newWord = word[:i] + letter + word[i+1:]
                    # Check if this new word exists in our wordSet
                    if newWord in wordSet:
                        q.append((newWord, count + 1))
                        # Then remove it
                        # otherwise hit -> hot and go in queue
                        # and then hot will become hit again queue and so on
                        wordSet.remove(newWord)
        
        return 0
        
# Time Complexity: O(N*M*26*log(N)) -> N is the length of the wordList and M
# is the length of each word. For each word, we are changing each character (M) to 26
# possible letters. So, overall time complexity is O(N*M*26*log(N)). 
# Because we are using a set to check if the new word exists in the wordSet, 
# And it takes O(log(N)) time to check if the new word exists in the wordSet. So, overall time complexity is O(N*M*26*log(N)).

# Space Complexity: O(N) -> We are using a queue to store the words and also a set to store the wordList. 
# In worst case, we can have all words in the queue and set. So, overall space complexity is O(N).