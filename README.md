# Local/Dev

### Requirements:

- python >= 3.5
- pip3

### Installation

- Run server/serverpl/install_local.sh
- Create a super user for the server by entering informations when prompted
- create directories *premierlangage/../tmp* and *premierlangage/../log*
- Run the server (*python manage.py runserver*)
-  Go to Administration -> Users -> [Your Super User] -> Scroll down to *Role* -> Add **AD** Role -> Save
-  Go to Administration -> Sandbox -> Create a new sandbox with url: "http://127.0.0.1:8000/sandbox/?action=execute", the name you want, priority don't matter here.



# Deployment

### Requirements:

- python >= 3.5
- pip3

### Installation

- Run server/serverpl/install_release.sh
- Create a super user for the server by entering informations when prompted
- create directory *premierlangage/../log*
- Run the server (*python manage.py runserver*)
- Go to Administration -> Users -> [Your Super User] -> Scroll down to *Role* -> Add **AD** Role -> Save
- Add a least one valid Sandbox with a corresponding priority (0 - 2147483647, the **smallest** number have the **highest** piority), a sandbox is available [here](https://git-etud.u-pem.fr/pl-sandbox.git)
