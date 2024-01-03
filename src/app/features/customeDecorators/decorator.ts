export function CustomeDecorator(){
    console.log("this is in custome decorator function");
  
    return (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
        // the usual, caching the original implementation
        const originalMethod = descriptor.value;
      
        return descriptor;
    }
}


export function CustomeDecorator2(target? : any){
    //options are parameter passed in decorator
    // Object.defineProperty(target.prototype, 'value1', {
    //     value: target.value1,
    //     writable: false
    //   });
    
    return (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
        // the usual, caching the original implementation
        // here target is component 
        console.log(target);
        const originalMethod = descriptor.value;
        return descriptor;
    }
}