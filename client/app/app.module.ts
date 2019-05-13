import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { appRoutingComponents, AppRoutingModule } from './app-routing.module';
import { SharedModule } from './components/shared/shared.module';

import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthService } from './services/auth.service';
import { CatService } from './services/cat.service';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    appRoutingComponents
  ],
  imports: [
    AppRoutingModule,
    NgbModule,
    SharedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        // whitelistedDomains: ['localhost:3000', 'localhost:4200']
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    CatService,
    UserService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
