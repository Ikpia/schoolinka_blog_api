import { UserController } from "./controller/UserController"

export const Routes = [{
    method: "get",
    route: "/blogs",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/blogs/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/blogs",
    controller: UserController,
    action: "save"
}, {
    method: "post",
    route: "/blogs/:id",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/blogs/:id",
    controller: UserController,
    action: "remove"
}]