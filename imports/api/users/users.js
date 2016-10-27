import {SimpleSchema} from "meteor/aldeed:simple-schema";
import {Roles} from "meteor/alanning:roles";

export const Users = Meteor.users;

Users.allow({
    insert() {
        return true;
    },
    update() {
        return true;
    },
    remove() {
        return false;
    }
});

Users.deny({
    insert() {
        return false;
    },
    update() {
        return false;
    },
    remove() {
        return true;
    }
});

Users.publicFields = {
    disabled: 1
};

Users.helpers({
    isAdmin() {
        return Roles.userIsInRole(this._id, "admin");
    }
});