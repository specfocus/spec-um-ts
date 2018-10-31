# um
Umbiliko virtual module with all sub-modules


## Sub-module initialization
```
git submodule add https://github.com/umbiliko/um-app.git
git submodule add https://github.com/umbiliko/um-base.git
git submodule add https://github.com/umbiliko/um-chart.git
git submodule add https://github.com/umbiliko/um-core.git
git submodule add https://github.com/umbiliko/um-def.git
git submodule add https://github.com/umbiliko/um-dir.git
git submodule add https://github.com/umbiliko/um-graph.git
git submodule add https://github.com/umbiliko/um-hub.git
git submodule add https://github.com/umbiliko/um-ml.git
git submodule add https://github.com/umbiliko/um-logo.git
git submodule add https://github.com/umbiliko/um-pod.git
git submodule add https://github.com/umbiliko/um-plot.git
git submodule add https://github.com/umbiliko/um-ts.git
git submodule add https://github.com/umbiliko/um-ui.git
git submodule add https://github.com/umbiliko/um-ux.git

git submodule update --init
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
