declare type FactoryOptions = {
    direction?: string;
};
declare type Data = object[] | object;
export declare function mutatorFactory(data: Data, mutators?: any[], options?: FactoryOptions): any;
export {};
