import FigmaPluginPanel from './figma-plugin-panel';

class ExamplePlugin extends FigmaPluginPanel {
  constructor(props) {
    super(props);

  }

  main() {

  }
}

window.examplePlugin = new ExamplePlugin({
  id: "example-plugin",
  title: "Example Plugin",
  tabs: ["First", "Second"],
  showClose: true,
  width: 320,
  height: 320,
});