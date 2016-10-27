import {FlowRouter} from "meteor/kadira:flow-router";
import {BlazeLayout} from "meteor/kadira:blaze-layout";
import {Roles} from "meteor/alanning:roles";

import {Notifier} from "../../../startup/services/notifier.service";

export const privateRoutes = FlowRouter.group({
    prefix: "/private",
    triggersEnter: [function () {
        if (!Meteor.userId()) {
            Notifier.error("You don't have permission to access this area!");
            FlowRouter.go(FlowRouter.path("public"));
        }
    }]
});