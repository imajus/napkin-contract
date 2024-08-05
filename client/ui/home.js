import { Meteor } from 'meteor/meteor';
import { TemplateController } from 'meteor/imajus:template-controller';
import { Oidc } from 'meteor/seluxit:oidc';
import './home.html';

TemplateController('Home', {
  events: {
    'click [data-action=auth]'() {
      Oidc.requestCredential(
        {
          loginStyle: 'redirect',
          // redirectUrl: Meteor.absoluteUrl(),
        },
        console.log,
      );
    },
  },
});
