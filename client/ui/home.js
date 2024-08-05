import { TemplateController } from 'meteor/imajus:template-controller';
import './home.html';

TemplateController('Home', {
  state: {
    title: null,
  },
  onCreated() {
    this.state.title = 'Napkin Contract';
  },
});
