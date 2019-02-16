<h1 align="center"> Figma UI Plugin Boilerplate </h1>

<p align="center"> Kickstart your awesome Figma plugin with this boilerplate. </p>

<hr/>

<p align="center"> 
<img align="center" src="https://user-images.githubusercontent.com/1207863/52892776-d20e5e80-31a6-11e9-8fd6-8414d148443a.gif" />
 </p>

<h3> Features </h3>

<ul>
  <li>Plugin UI with vhtml</li>
  <li>Figma-like styles with SASS</li>
  <li>Basic local simulation for figmaPlus.showUI()</li>
  <li>Modern Javascript (ES6)</li>
  <li>Uses native Javascript events (Frontend frameworks are an overkill)</li>
  <li>Tests using Jest</li>
  <li>Transpiling using Babel and bundle using Rollup</li>
  <li>Code formatting with Prettier</li>
</ul>


<h3> Download & Development </h3>


```shell
$ git clone https://github.com/figma-plus/ui-plugin-boilerplate
```


```shell
$ yarn install
```


```shell
$ yarn serve
```


```shell
$ yarn test
```

<h4> Build a Distribution Bundle </h4>

```shell
$ yarn build
```

You'll see your bundle inside `dist` directory.
Follow the <a href="https://docs.figmaplus.com/#/developerGuide/publish">docs instructions</a> to publish it.

<h3>License</h3>

This project is licensed under the MIT License
