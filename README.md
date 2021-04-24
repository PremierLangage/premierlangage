# premierlangage

The "premier langage" project aims to provide an easy-to-use, automatically correcting exercise platform.

## For Students

An intuitive and simple interface for exercises.
The possibility, for the student, to create a course reviewing path fitting his needs.

## For Teachers

We wish to simplify the life of the poor parents of online teaching platforms !!
Both the **maximal potential** : possibility to design new exercises types, and **super easy**, MCQ exercises, drag and drop, selection... that takes two minutes to write.



### An exercise conception language

An exercise definition language, both very easy and complete, based on Python,
it is indeed possible to code with Python and JavaScript every ideas that we may have without losing the platform integration.

# Activity and classroom management language

## A classroom dashboard

A  graphical interface with immediate information.
Statistiques and scores of the students for each exercises and each sheet.
Database and plug-ins with API to multiply the analyzing means (open access to data where anonymity  can be secured).
Keywords analyse, concepts, leaderboards, distributions, positioning...

## Classrooms tools

Give class, sub-groups, students, specific exercise.  
Monitor progress.   
Organize your groups.  
Organise group exercises (competitions, work-sharing, projects, games).



We are on Github, you can find the conception (in french) of the project here -> https://github.com/plgitlogin/plconception

You can quickly deploy a development environment using the docker containing all the necessary libraries

## Development

### Prerequisities

In order to run this container you'll need the following tools installed.

- [`Docker`](https://www.docker.com)
- [`OpenSSL`](https://www.openssl.org)
- [`ca-certificates`](https://packages.debian.org/fr/sid/ca-certificates) (only on a linux system)
- [`Visual Studio Code`](https://code.visualstudio.com)

### Recommendations

> We recommend you to install the
[Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) and the [Remote development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) extensions on vscode. The first one will allow you to use docker inside the editor and the second to use docker as a full-featured development environment.

> You will be asked to install the extensions on the first time you will open the project, but if not you can also display the recommendations by opening the command palette of vscode (`CTRL + P` on Linux and `CMD + P` on Mac) then type the following text

> Also if you are using docker for mac, we recommend you to increase the memory size to 4GB in the resources section of the docker dashboard.

### Installation

Since the platform depends on multiple services like a PostgreSQL database, Elasticsearch, Python, Node, Angular and others projects of the organization... the development process is fully dockerized. All the coding, running, testing and deployment takes place inside docker containers so you don't have to install anything on your system except [`Docker`](https://www.docker.com) and [`Visual Studio Code`](https://code.visualstudio.com).

You are free to develop on the OS of your choice, it's does not matter thanks to docker, but we recommend you to choose a Linux or an OSX system since the project is fully tested on these two platforms.

1. First of all, you should clone this repository on your system using the      following command

    ```sh
    git clone https://github.com/PremierLangage/premierlangage/tree/premierlanguagedocker
    ```
2. Run the script `docker-dev-prepare.sh`which will download some librairies with `pip`

3. Generate docker images of PLaTon services by running docker-compose up

4. If you don't want to use super user credentials 
	 - login: `admin`
	 - password: `adminadmin`
you need to create an admin user with:
	```
	docker-compose exec pl python3 manage.py createsuperuser
	``` 
Then, go to http://localhost:8021 and use your user credentials. 
	

