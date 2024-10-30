export class RegisterDTO{
    constructor(
        public Username : string,
        public Email: string,
        public Password : string,
        public Passwordconfirm : string
    ){}
}