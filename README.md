[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/laseryuan/codebench)
```
REPO=\
mkdir $REPO
cd $REPO
git clone \
```

```
git remote rename origin upstream
git remote add origin git@github.com:laseryuan/$REPO.git
git remote -v
```

push and update default push remote to origin
```
git push -u origin
```

add repo to codebench as submodule
```
git submodule add git@github.com:laseryuan/$REPO.git $REPO/$REPO
```

build image
```
docker build -t lasery/$REPO .
docker push lasery/$REPO
```
