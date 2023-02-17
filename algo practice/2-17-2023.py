import re

def reverseWordsInString(string):
    result = ""
    space = " "
    words = re.findall(r'\w+', string)
    for word in words:
        result = word + space + result
    return result

reverseWordsInString("AlgoExpert is the best!")