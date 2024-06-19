import os

def get_github_secrets():
    secrets = {
        'user1': os.getenv('USERNAME1'),
        'user2': os.getenv('USERNAME2'),
        'user3': os.getenv('USERNAME3')
    }
    return secrets

def check_access(username, password):
    secrets = get_github_secrets()
    if username in secrets and secrets[username] == password:
        return 'Access granted'
    else:
        return 'No access'

if __name__ == "__main__":
    username = os.getenv('GITHUB_USERNAME')
    password = os.getenv('GITHUB_PASSWORD')
    result = check_access(username, password)
    print(f"::set-output name=result::{result}")
