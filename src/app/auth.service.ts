export class AuthService {
    isloggedIn = false;
    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.isloggedIn);
                }, 800);
            }
        );
        return promise;
    }
    loggedIn() {
        this.isloggedIn = true;
    }
    loggedOut() {
        this.isloggedIn = false;
    }
}
