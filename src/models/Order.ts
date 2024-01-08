interface InitParams {
    user: string
    address: string
    sum: number
}

export class Order {
    private user: string;
    private address: string;
    private sum: number;
    private createDate: Date;
    private deliveryDate: Date;

    constructor(params: InitParams) {
        this.user = params.user
        this.address = params.address
        this.sum = params.sum
        this.createDate = new Date();
        this.deliveryDate = this.generateDeliveryDate();
    }

    private generateDeliveryDate(){
        const deliveryDate = new Date(this.createDate);
        deliveryDate.setDate(deliveryDate.getDate() +7);

        return deliveryDate;
    }

    getInfoOrder(){
        const date = `${this.deliveryDate.getDate()}.${this.deliveryDate.getMonth()+1}.${this.deliveryDate.getFullYear()}`
        return `${this.user}, спасибо за оформление заказа на сумму ${this.sum}, ожижайте доставку ${date} по адресу ${this.address}`
    }

    setAdress(address: string){
        this.address = address;
    }

    get userInfo(){
        return this.user;
    }

    set newAddress(address: string){
        this.address = address;
    }
}
