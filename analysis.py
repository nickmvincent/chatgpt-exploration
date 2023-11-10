import json
from collections import Counter

# Load the JSON file containing the conversation data
with open('conversations.json', 'r') as f:
    conversations = json.load(f)['conversation']

# Initialize counters for the number of words spoken by User and ChatGpt
user_word_count = Counter()
chatgpt_word_count = Counter()


for post in conversations:
    # If the post is from User, update the user_word_count counter
    if post['speaker'] == 'User':
        user_word_count.update(post['post'].split())
    # If the post is from ChatGpt, update the chatgpt_word_count counter
    elif post['speaker'] == 'ChatGpt':
        chatgpt_word_count.update(post['post'].split())

# Print the 10 most common words used by User
print('10 most common words used by User:')
for word, count in user_word_count.most_common(10):
    print(f'{word}: {count}')

# Print the 10 most common words used by ChatGpt
print('10 most common words used by ChatGpt:')
for word, count in chatgpt_word_count.most_common(10):
    print(f'{word}: {count}')
