import Application from 'embroider-ps-not-found/app';
import config from 'embroider-ps-not-found/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
