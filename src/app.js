/** @jsx h */
import { h, app } from "hyperapp";
import SomeComponent from "./someComponent";

let css = {
   color: "white",
   fontFamily: "consolas"
}

app({
   state: { },
   view: _ =>
      <div style={css}>
         <SomeComponent />
      </div>,
   actions: { }
})