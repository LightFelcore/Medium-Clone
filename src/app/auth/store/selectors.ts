/* Store */
import { createFeatureSelector, createSelector } from "@ngrx/store";

/* Custom Interfaces */
import { AuthStateInterface } from "src/app/auth/types/auth-state.interface";

export const authFeatureSelector = createFeatureSelector<AuthStateInterface>('auth')

export const isSubmittingAuthSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.isSubmitting
)

export const validationErrorsAuthSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.validationErrors
)

export const isLoggedInAuthSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.isLoggedIn
)

export const isAnonymousAuthSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.isLoggedIn === false
)

export const currentUserAuthSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.currentUser
)