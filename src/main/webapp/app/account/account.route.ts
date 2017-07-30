import {Routes} from '@angular/router';

import {
    activateRoute,
    passwordResetFinishRoute,
    passwordResetInitRoute,
    passwordRoute,
    registerRoute,
    sessionsRoute,
    settingsRoute,
    loginRoute
} from './';
import {} from './login/login.route';

const ACCOUNT_ROUTES = [
    activateRoute,
    passwordRoute,
    passwordResetFinishRoute,
    passwordResetInitRoute,
    registerRoute,
    sessionsRoute,
    settingsRoute,
    loginRoute
];

export const accountState: Routes = [{
    path: '',
    children: ACCOUNT_ROUTES
}];
