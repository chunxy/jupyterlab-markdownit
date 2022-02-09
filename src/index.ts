import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab-markdownit extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-markdownit:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-markdownit is activated!');
  }
};

export default plugin;
