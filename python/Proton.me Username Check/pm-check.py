import requests

def check_username(username):
    url = "https://account.proton.me/api/users/available?"
    headers = {
        "x-pm-appversion": "web-mail@5.0.18.5",
    }
    params = {
        "Name": username,
    }
    response = requests.get(url, headers=headers, params=params)
    data = response.json()
    if data.get("Code") == 1000:
        print(f"The username '{username}' is available!")
    else:
        print(f"{data.get('Error')}")

if __name__ == "__main__":
    username = input("Enter a username: ")
    check_username(username)
