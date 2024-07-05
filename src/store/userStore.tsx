import { makeAutoObservable } from 'mobx'
import { FBauth } from '../firebase/firebase';
import { browserSessionPersistence, GoogleAuthProvider, inMemoryPersistence, setPersistence, signInWithPopup, signOut } from 'firebase/auth';
import { createContext } from 'react';

class userStoreClass {
    provider = new GoogleAuthProvider();
    isLoggedIn = false;

    constructor() {
        makeAutoObservable(this);
        this.isLoggedIn = Boolean(FBauth.currentUser);
    }

    GetUser() {
        return FBauth.currentUser;
    }

    LogOutWithGoogleBtn = async () => {
        await signOut(FBauth).then(() => {
            this.isLoggedIn = false;
        }).catch((error) => {
            console.log(error)
        });
    }

    LogInWithGoogleBtn = async () => {
        const response = await setPersistence(FBauth, inMemoryPersistence)
            .then(() => {
                return signInWithPopup(FBauth, this.provider)
                    .then((result) => {
                        this.isLoggedIn = true;
                        console.log(this.isLoggedIn)
                        return "Login Successfully"
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        return errorCode
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                return errorCode;
            });
        return response;
    }


}

export const userStore = new userStoreClass()
export const userContext = createContext(userStore);