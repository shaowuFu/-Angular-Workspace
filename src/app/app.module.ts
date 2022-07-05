import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { NbThemeModule } from "@nebular/theme";
import { MatNativeDateModule } from "@angular/material/core";
import { NEBULAR_ROOT, NEBULAR_ALL } from "@define/nebular/nebular.module";
import { MaterialModule } from "@define/material/material.module";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { CoreModule } from "@core/core.module";
import { AppComponent } from "./app.component";
import { DemoButtonsComponent } from "./demo-buttons/demo-buttons.component";
import { DemoFirebaseComponent } from "./demo-firebase/demo-firebase.component";

const firebaseConfig = {
    apiKey: "AIzaSyB5UegVWFft7JgMm-_x1OcCWSqyae86RBk",
    authDomain: "my-demo-45d3d.firebaseapp.com",
    projectId: "my-demo-45d3d",
    storageBucket: "my-demo-45d3d.appspot.com",
    messagingSenderId: "777760611121",
    appId: "1:777760611121:web:1a757fd2b3c79bbee62e10",
    measurementId: "G-SJSJSZC08Q",
};

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MaterialModule,
        NbEvaIconsModule,
        NbThemeModule.forRoot(),
        ...NEBULAR_ROOT,
        ...NEBULAR_ALL,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(firebaseConfig),
        CoreModule,
    ],
    declarations: [AppComponent, DemoButtonsComponent, DemoFirebaseComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}