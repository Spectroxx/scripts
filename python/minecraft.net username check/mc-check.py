import requests

def get_uuid(username):
    url = f'https://api.mojang.com/users/profiles/minecraft/{username}'
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        return data['id']
    else:
        return None

def check_username_availability(username):
    uuid = get_uuid(username)

    if uuid:
        print(f"The username '{username}' is taken. UUID: {uuid}")
        return False
    else:
        print(f"The username '{username}' is available.")
        return True

username = "Spectrox"
check_username_availability(username)
