# HomeLab
Experimental et exploratory private repo

## ToDo
- Faire un site d'image de marque perso
    - NavBar qui highlight la bonne section du scroll
    - Une longue page vs plusieurs onglets
    - Présentation, C.V., histoire, intérêts, projet (apps)
    - OU Home, about, work, contact
- Conteneuriser le site d'image de marque (Apache simplement?)
- Conteneuriser PostgreSQL
- Conteneuriser Alamur
- Conteneuriser Gunicorn (WSGI) pour rouler la prod
- Monter un cluster Kubernetes
    - Faire plusieurs nodes. 5?
    - Monter les conteneur de mes apps et les auto-gêré

## Création d'un local repo copier d'un repo GitHub
1. git init
2. git remote add origin https://github.com/LoyerP/HomeLab.git
3. 

## Création d'un environnement de dev django
1. Installer Debian
2. Installer Python
3. Installer Django
4. Créer un Django app fonctionnel : https://docs.djangoproject.com/en/5.2/intro/tutorial01/
5. Créé un repo sur git et faire un gitignore pour ne pas sync les infos sensibles ou inutiles
6. Installer git
7. Faire les cmds suivantes :
    1. git init
    2. git add .
    3. git config --global user.email "you@example.com"
    4. git commit -m "Initial Django project setup"
    5. git remote add origin https://github.com/LoyerP/MountainFiles.git
    6. git push -u origin main
    7. Utiliser le --force avec la cmd ci-dessus pour forcer la sync même si le repo n'est pas vide online
8. Mettre en place un github action, on commit, qui pull ou push le nouveau code. Comme l'environnement de dev de django monitor déjà les changements de code, sa devrais se refresh auto. À valider.

# Déployer une app sur Debian 13 - Trixie
## Déploiement de Docker
1. Install Debian
2. Rouler DeployDocker.sh
3. Ajouter le user au groupe Docker

## Déploiement de K8s
1. Faire un script avec sa : https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#installing-kubeadm-kubelet-and-kubectl
2. Remplacer /etc/containerd/config.toml par celle avec notre config
3. Restart containerd
4. kubeadm init (voir pour swap puis config kubelet)

registry.k8s.io/pause:3.10.1

## Cloner le code
1. git clone [HTTPS du repo]
2. docker build -t [app] .
3. Login to docker : docker login docker.io et entrer username/password

## Run as dev
1. Dans le repertoire cloner. Le mount type "bind" permet de partager le système de fichier entre src (hôte) et target (conteneur)
2. Un apt (Nodemon) vérifie les changements dans les fichiers src et restart l'app à chaque save
3. docker run -dp 0.0.0.0:3000:3000 \
    -w /app --mount type=bind,src="$(pwd)",target=/app \
    node:lts-alpine \
    sh -c "yarn install && yarn run dev"
 4. Il faut ensuite build l'image pour sauvegarder nos changements dans le conteneur
