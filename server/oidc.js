import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';

Meteor.startup(function () {
  ServiceConfiguration.configurations.upsert(
    { service: 'oidc' },
    {
      $set: {
        loginStyle: 'popup',
        clientId: 'app_staging_cf9d26463bfaedbf34a032fb7272bca1',
        secret: 'sk_791aac8a6d07adb367dee8b3a42e4d35b4bfb32163e3d312',
        serverUrl: 'https://id.worldcoin.org',
        authorizationEndpoint: '/authorize',
        tokenEndpoint: '/token',
        userinfoEndpoint: '/userinfo',
        idTokenWhitelistFields: [],
      },
    },
  );
});
