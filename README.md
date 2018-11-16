# um
User Module cental module with all sub-modules

![Diagram](diagram.png)


## Sub-module initialization
```
git submodule add https://github.com/umbiliko/um-core-dir.git
git submodule add https://github.com/umbiliko/um-react-app.git
git submodule add https://github.com/umbiliko/um-react-core.git
git submodule add https://github.com/umbiliko/um-react-logo.git
git submodule add https://github.com/umbiliko/um-react-shell.git
git submodule add https://github.com/umbiliko/um-react-view.git
git submodule add https://github.com/umbiliko/um-react-vis.git

git submodule update --init
```

## Plugin sub-modules
```
git submodule add https://github.com/umbiliko/um-groomet.git
git submodule add https://github.com/umbiliko/um-material-ui.git
```

## Commit submodule
```
git commit ./submodule -m "Added submodule as ./subm"
```

## Commit all submodules
```
git submodule foreach git commit --amend
```

## Push everything in one go
```
git push --recurse-submodules=on-demand
```
or
```
git submodule foreach git push -u origin master
```

## Current status

```
git submodule status --recursive
```
