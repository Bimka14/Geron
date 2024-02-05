// import  storages from '../data/storages.json';
// import { TProducts } from './Products';
// export type TStorages = {
//     city: string,
//     name: string,
//     address: string,
//     id: number,
//     products: TProducts[]
// }

// export class Storages{
//     private _data: TStorages[]

//     constructor() {
//         this._data = storages;
//     }

//     get allStorages(){
//         return this._data
//     }

//     protected getStorage(id:number):TStorages {
//         return this._data.find((item=>{ item.id===id}))
//     }

//     private set updateStorage(storage:TStorages) {
//         this._data.map((item)=>{
//             if(item.id !== storage.id)return item
//             return storage
//         })
//     }

//     protected setProducts(id:number, product:TProducts){
//         const storage = this.getStorage(id)
//         storage.products.push(product)
//         this.updateStorage = storage
//     }
// }