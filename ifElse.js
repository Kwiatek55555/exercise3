var age = prompt('Podaj swój wiek');

if (age >= 18) {
    console.log('Dziękujemy! Możesz przeczytać ten artykuł');
}   else if (age > 0) {
    console.log('Przepraszamy, ale musisz mieć 18 lat, żeby uzyskać dostęp do tego artykułu.');
}   else {
    console.log('Podany wiek jest nieprawidłowy')
}