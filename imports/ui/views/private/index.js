import {Template} from "meteor/templating";

import {Users} from "../../../api/users/users";

import "./index.html";

Template["private.index"].onRendered(function () {

});

Template["private.index"].onCreated(function () {
    this.subscribe("users.all");
});

Template["private.index"].helpers({
    users() {
        return Users.find({"_id": { "$ne": Meteor.userId() }});
    }
});