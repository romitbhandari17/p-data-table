# DataTable

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Important points

The custom selector for data-table requires following as Input parameters:
  `@Input() public rowsPerPage:number;` ** To specify records per page<br>
  `@Input() public recordsCount:number;` ** Total records required for pagination<br>
  `@Input() public loading:boolean;` ** Is true when loading image to be shown, and false for loading image to hide.<br>
  `@Input() public headerArray:[];` ** the Heading Array for the data table<br>
  `@Input() public data:[];` ** The actual data coming in the data table.<br>

The @Output parameters are as follows:
  `@Output() public pageChangeClick` ** The page change event coming on page change in drop down and click on prev, nect, first and last<br>
  `@Output() public goToDetailsClick` ** The event coming on click of each row to go to its details<br>
  `@Output() public clickActionEvent` ** Any custom event specified in header Array like 'edit' coming on each row in the example in the code.<br>

Apart from above, follow the example code snippet given by author. Please change it according to your needs, if required.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

Contact At:romitbhandari17@gmail.com

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
