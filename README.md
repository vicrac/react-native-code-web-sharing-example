# Simple example of code sharing beetween React and React Native

This project uses `yarn-workspaces`.

1. Firstly, you have to install all the dependencies. This is done in one run, from root directory:

```
yarn
```

2. Then build shared code:

```
cd shared
yarn start
```

This starts a watch to recompile it whenever a change is detected.

3. After that you can run web and native application, using, respectively:

```
cd web
yarn start
```

or

```
cd mobile
yarn start
```
