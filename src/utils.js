export function add (a,b){
    return a + b;
}

// export function toSnakeCase(text){
//     //This function will convert the text to snake_case by 
//     // replacing spaces with underscore and lowercasing at the same time
//     return text.replaceAll(' ', '_')
//     .replaceAll("!", '_')
//     .replaceAll('?', '_')
//     .replaceAll(',', '_')
//     .toLowerCase();
// }

    // export function toSnakeCase(text){
    //     return text.replaceAll(' ', '_')
    //     .replaceAll(/[!?,.;:]/g, '_')
    //     .toLowerCase();
    // }

// export function toSnakeCase(text) {
//   return text.replaceAll(' ', '_').replaceAll(/[!?,]/g, '_').toLowerCase();
// 
// Replace all punctuation (non-word characters)
export function toSnakeCase(text){
    return text.replaceAll(' ', '_')
    .replaceAll(/\W/g, '_')
    .toLowerCase();
}

// // Replace everything except letters, numbers, and underscores
// text.replaceAll(/[^a-zA-Z0-9_]/g, '_')