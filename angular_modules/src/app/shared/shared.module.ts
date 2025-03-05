import { NgModule } from "@angular/core";
import { PageNamePipe } from "./page-name.pipe";
import { ColorDirective } from "./color.directive";

@NgModule({
    imports: [ PageNamePipe, ColorDirective],
    exports: [ PageNamePipe, ColorDirective]
})
export class SharedModule {

}