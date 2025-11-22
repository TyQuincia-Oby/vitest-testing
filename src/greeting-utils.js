export function makeGreeting(name, occasion){
    const greeting = `Happy ${occasion} , ${name}`;
    return greeting;
}

export function addSignature(message, from){
    const addedSignature = `${message} - from ${from}`;
    return addedSignature;
}

export function decorateMessage(message){
    const cuteMessage = `🌸🌸${message}🌸🌸`;
    return cuteMessage;
}

export function createFullGreeting(name, occasion, from){
    const greeting = makeGreeting(name, occasion);
    const signed = addSignature(greeting, from);
    return decorateMessage(signed);
}