import  storages from '../data/storages.json';
export type TStorages = {
    city: string,
    name: string,
    address: string,
    id: number,
    products: any[]
}

export class Storages{
    private _data: TStorages[]

    constructor() {
        this._data = []
    }
}