import h from 'vhtml';
/** @jsx h */


export default class ExamplePlugin {
  constructor() {
    this.options = [
      "Alert File Name",
      this.main.bind(this),
      null,
      { shift: true, option: true, key: "t" }
    ];

    const { figmaPlugin } = window;
    figmaPlugin.createPluginsMenuItem(...this.options);

    window.examplePlugin = this;
  }

  main() {
    const { App, alert } = window;
    const fileName = App.getCurrentFileName();

    alert(fileName);
  }
}
 
document.body.innerHTML = (
  <div id="figma-plugin-boilerplate">
    <header>
      <span>
        Figma Plugin Boilerplate
      </span>
      <button><span class="g0126e402"></span></button>
    </header>
    <main>
      Hello
    </main>
    <footer>
      <button><span class="g0126e402"></span></button>
      <button><span class="g0126e402"></span></button>
    </footer>
  </div>
);