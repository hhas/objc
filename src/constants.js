
// TO DO: could do with defining some nice semantic Error subclasses


module.exports = {
  
  isString: object => (typeof object === 'string' || object instanceof String),
  
  __objcObject: Symbol('__objcObject'), // extract the ObjCObject from its method Proxy
  __objcClassPtr: Symbol('__objcClassPtr'), // extract an ObjC Class pointer from its method Proxy
  __objcInstancePtr: Symbol('__objcInstancePtr'), // extract an ObjC instance pointer from its method Proxy

};
