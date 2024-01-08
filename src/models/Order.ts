interface InitParams {
    user: string
    address: string
    sum: number
}

export class Order {
    user: string;
    address: string;
    sum: number;
    createDate: Date;
    deliveryDate: Date;

    constructor(params: InitParams) {
        this.user = params.user
        this.address = params.address
        this.sum = params.sum
        this.createDate = new Date();
        this.deliveryDate = this.generateDeliveryDate();
    }

    generateDeliveryDate(){
        const deliveryDate = new Date(this.createDate);
        deliveryDate.setDate(deliveryDate.getDate() +7);

        return deliveryDate;
    }
}
