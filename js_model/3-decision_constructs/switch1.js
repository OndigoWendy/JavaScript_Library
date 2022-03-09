

switch(number){
    case (number < 10):
        console.log('Your number is to small.');
        break;        
    case (number < 100):
        console.log('At least you\'re in the double digits.');
        break;
    case (number < 1000):
        console.log('Looks like you\'re in three digits.');
        break;
    default:
        console.log('Looks like you\'re in the fouth digits.');
}