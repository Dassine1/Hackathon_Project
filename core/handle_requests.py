import requests

def handle_get(url: str, headers:dict, params:dict):
    url = "https://api.github.com/repositories"
    response = requests.get(url, params=params, headers=headers)
    data = response.json()
    return data


# for repo in data.get("items", []):
#     print(f"{repo['full_name']} - ⭐ {repo['stargazers_count']:,}")
