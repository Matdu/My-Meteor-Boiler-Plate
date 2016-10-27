import {Accounts} from "meteor/accounts-base";
import {FlowRouter} from "meteor/kadira:flow-router";
import {BlazeLayout} from "meteor/kadira:blaze-layout";

import {Notifier} from "../../../startup/services/notifier.service";

import "../../../ui/views/layout";
import "../../../ui/views/home";
import "../../../ui/views/login";
import "../../../ui/views/not-found";

FlowRouter.notFound = {
    action: function () {
        BlazeLayout.render("layout", {main: "public.notFound"});
    }
};

FlowRouter.route("/", {
    name: "public",
    action() {
        Tracker.autorun(function() {
            if (!Meteor.userId()) 
            {
              FlowRouter.go('signin');
          } else {
              FlowRouter.go('home');
          }
      });
    }
});

FlowRouter.route("/login", {
    name: "signin",
    action() {
        Tracker.autorun(function() {
            if (!Meteor.userId()) 
            {
                BlazeLayout.render("layout", {main: "public.login"});
            } else {
              FlowRouter.go('home');
          }
      });
    }
});

FlowRouter.route("/home", {
	triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: "home",
    action() {
        BlazeLayout.render("layout", {main: "public.home"});
    }
});

AccountsTemplates.configureRoute('signIn', {
  layoutType: 'blaze',
  name: 'signin',
  path: '/login',
  redirect: '/home',
  template: 'public.login',
  layoutTemplate: 'layout',
  layoutRegions: {},
  contentRegion: 'main'
});
