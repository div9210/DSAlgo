class Solution:
    def findLadders(self, beginWord: str, endWord: str, wordList: List[str]) -> List[List[str]]:
        wordSet = set(wordList)
        if not endWord in wordSet: return []

        q = deque()
        currentLevel = 1
        q.append(([beginWord], currentLevel))

        alphabets = "abcdefghijklmnopqrstuvwxyz"
        softDeleted = []
        allPossiblePaths = []
        foundAns = False
        while q:
            path, level = q.popleft()
            word = path[len(path) - 1]

            # If a level is processed the value of found level
            # will be one more than the currentLevel
            if currentLevel != level:
                # currentLevel has been processed
                # Now we can delete all the softDeleted
                for w in softDeleted:
                    if w in wordSet:
                        wordSet.remove(w)
                
                softDeleted.clear()
                currentLevel = level
                # If answer has been found and we are proceeding to next level
                # that means all the possible shortest answers are caught
                if foundAns: break
                
            if word == endWord: 
                allPossiblePaths.append(path)
                foundAns = True


            for i in range(len(word)):
                # Replace ith index with all the alphabets
                for letter in alphabets:
                    newWord = word[:i] + letter + word[i+1:]
                    if newWord in wordSet:
                        # Push in queue
                        newPath = path.copy()
                        newPath.append(newWord)
                        q.append((newPath, level + 1))

                        # Don't remove it
                        # Because other path can also reach it
                        # And problem wants all shortest paths
                        softDeleted.append(newWord)
        
        return allPossiblePaths

# Time Complexity: O(N*M*26*log(N)) -> N is the length of the wordList and M
# is the length of each word. For each word, we are changing each character (M) to 26
# possible letters. So, overall time complexity is O(N*M*26*log(N)).

# Space Complexity: O(N) -> We are using a queue to store the words and also a set to store the wordList.
# In worst case, we can have all words in the queue and set. So, overall space complexity is O(N).