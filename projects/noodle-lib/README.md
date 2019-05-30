# Noodle Lib

Angular components built from the ground up using Bootstrap 4

## Dependencies

<table>
  <thead>
    <tr>
      <th>noodle-lib</th>
      <th>Angular</th>
      <th>Bootstrap</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1.0.0</td>
      <td>7.0.0</td>
      <td>4.0.0</td>
    </tr>
  </tbody>
</table>

## Installation

You need to have an Angular project with the supported Angular version. We strongly recommend using Angular CLI for this.

You also need to add Bootstrap 4 CSS to your application by using your preferred way (it really depends on the setup you're using). Ex. for Angular CLI you can get Bootstrap and it's dependencies from npm 

```
npm install --save bootstrap jquery popper
```

and update your `angular.json` with something like:

```JSON
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```

Once installed you need to import main lib module:

```JavaScript
import { NoodleLibModule } from 'noodle-lib'

@NgModule({
  ...
  imports: [NoodleLibModule, ...],
  ...
})
export class YourAppModule {
}
```

# How to use

## Header component

The header component consist of three parts, header's logo, menus and profile, you are freedom on designs and styles them by using `ngHeaderLog`, `ngHeaderMenu` and `ngHeaderProfile` directives

![Header Sample][header]

Code
```html
<noodle-header class="header">
  <ng-template ngHeaderLogo>
      <a href="/home">
        <img class="logo" src="../assets/angular.svg" >
      </a>
  </ng-template>
  <ng-template ngHeaderMenu>
      <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="#">Docs</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
      </li>
  </ng-template>
  <ng-template ngHeaderProfile>
      <div class="dropdown my-profile">
        <button class="btn dropdown-toggle" type="button" data-toggle="dropdown">
            <img class="profile" src="../assets/avatar.jpg">
          </button>
          <div class="dropdown-menu  dropdown-menu-right">
            <a class="dropdown-item" href="#">My Profile</a>
            <a class="dropdown-item" href="#">Sign Out</a>
          </div>
        </div>
  </ng-template>
</noodle-header>
```

## Sidebar component

This component provide you ability to extend your menu on the left side, you can toggle the sidebar programmatically by using `toggleSidebar` method. The `ngSideBarMenu` will render the left side menu while `ngSideBarContent` will render the content on the right. These must be enclosed by `SideBarContainerComponent`

![Sidebar Sample][sidebar]

Code
```html
<noodle-side-bar-container>
  <noodle-side-bar>
    <ng-template ngSideBarMenu>
      <div class="sidebar-header">
          <h3>Sidebar</h3>
      </div>

      <ul class="list-unstyled components">
          <li>
              <a href="#">Page 1</a>
          </li>
          <li>
              <a href="#">Page 2</a>
          </li>
          <li>
              <a href="#">Page 3</a>
          </li>
      </ul>
    </ng-template>
    <ng-template ngSideBarContent>
        <button type="button" class="btn btn-info" (click)="toggleSidebar()">
            <span>Toggle Sidebar</span>
        </button>
    </ng-template>
  </noodle-side-bar>
</noodle-side-bar-container>
```

toggle the sidebar
```JavaScript
export class AppComponent {
  @ViewChild(SideBarContainerComponent) sideBar: SideBarContainerComponent

  toggleSidebar() {
    this.sideBar.toggleSidebar();
  }
}
```

## Footer component

The simple footer component with static content

Code
```html
<noodle-footer>
  <p> Super-powered by KMS ©2019. Code licensed under an <a href="license" title="License text">MIT-style License</a>. Documentation licensed under <a href="http://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.
  </p>
  <p>
    Version 1.0
  </p>
</noodle-footer>
```

## Login component

The simple login form with username and password

![Login Sample][login]

Code
```html
<noodle-login class="login-form" (login)="onLogin($event)" [submitted]="submitted" [loading]="loggingIn"></noodle-login>
```

```JavaScript
onLogin($event) {
  const { username, password } = $event;
}
```

### Inputs
<table>
  <tbody>
    <tr>
      <td>submitted</td>
      <td></td>
      <td></td>
      <td colspan="3">
        Type: boolean
        </br>
        Form data has been submitted or not. The validation error only appear when form has been submitted
      </td>
    </tr>
    <tr>
      <td>loading</td>
      <td></td>
      <td></td>
      <td colspan="3">
        Type: boolean
        </br>
        Boolean flag to indicate that the form is loading by displaying a spinner
      </td>
    </tr>
  </tbody>
</table>

### Events
<table>
  <tbody>
    <tr>
      <td>login</td>
      <td></td>
      <td></td>
      <td colspan="3">
        Fired when click Login button from the form and receive {username, password} from the $event
      </td>
    </tr>
  </tbody>
</table>

[header]: https://github.com/kenfly51/noodle-lib/tree/develop/projects/noodle-lib/images/header.png "Header sample"

[sidebar]: https://github.com/kenfly51/noodle-lib/tree/develop/projects/noodle-lib/images/sidebar.png "Sidebar sample"

[login]: https://github.com/kenfly51/noodle-lib/tree/develop/projects/noodle-lib/images/login.png "Login sample"

