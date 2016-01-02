import { state } from "./store";
import _ from "underscore";

const r = state.get('routine').toJS();

_.map(r, function(n) { console.log(n.startOn); });
