import os

from bs4 import BeautifulSoup

soup = BeautifulSoup(open("meshtv.html", "r"), "html.parser")
scripts = soup.find_all("script")
for script in scripts:
    if "src" in script.attrs:
        with open(script["src"], "r") as file:
            script.string = file.read()
        del script["src"]


os.makedirs("build", exist_ok=True)
with open("build/inline.html", "w") as file:
    file.write(soup.prettify())