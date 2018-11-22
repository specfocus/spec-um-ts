# um
User Module cental module with all sub-modules

![Diagram](https://raw.githubusercontent.com/umbiliko/um/master/diagram.svg)


## Core sub-module initialization

```
git submodule add https://github.com/umbiliko/um-core-auth.git
git submodule add https://github.com/umbiliko/um-core-flow.git
git submodule add https://github.com/umbiliko/um-core-hub.git
git submodule add https://github.com/umbiliko/um-core-pod.git
```

## React sub-module initialization

```
git submodule add https://github.com/umbiliko/um-react-adm.git
git submodule add https://github.com/umbiliko/um-react-app.git
git submodule add https://github.com/umbiliko/um-react-core.git
git submodule add https://github.com/umbiliko/um-react-logo.git
git submodule add https://github.com/umbiliko/um-react-shell.git
git submodule add https://github.com/umbiliko/um-react-view.git
git submodule add https://github.com/umbiliko/um-react-vis.git

git submodule update --init --recursive
git submodule update --recursive --remote
```

## Plugin sub-module initialization
```
git submodule add https://github.com/umbiliko/um-grommet.git
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


# See

* the-platform: https://github.com/palmerhq/the-platform
* react-virtualized
* react-sortable-hoc
* react-sortable-tree
* react-mosaic
* blueprintjs <HotKeys><HotKey combo="shift + a">


## WebGL
* Phazer
* three.js
* PixiJS

## Profiling
* why-did-you-update
* React 16.5 profiler

## Showcase
* Storybook
* React Styleguidist

## Packaging
* electron-builder

## IOS

* ComponentKit

## SVG as Components

* Kawaii Components: https://github.com/miukimiu/react-kawaii https://youtu.be/1gG8rtm-rq4


## ML https://youtu.be/eSwm1WZk7uA
#ElsaCares
* MeteorJS
* MiniMongo -> LocalStore

## Layout: Shadow Tree

navigator.getUserMedia({ audio: true, video: true });

const picture: JSI = getNativeModule('Camera').getPictures({ video: true }};
getNativeModule('Uploader').upload(picture);

# https://pirple.thinkific.com/courses/the-nodejs-master-class

# Monaco: Editor in Electron used in Visual Studio Code
https://github.com/Microsoft/monaco-editor-samples/tree/master/sample-electron
