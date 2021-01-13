import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  //Data binding
  inputType = "text";

  user = {
    name: "Datnt",
    age: 22
  };

  handler() {
    console.log("clicked");
  }
}
