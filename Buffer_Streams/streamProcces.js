/*
https://nodejs.org/api/process.html#process_process_stdin
https://nodejs.org/api/process.html#process_process_stdout
*/

'use strict';
var stdin = process.stdin,
	stdout = process.stdout,
	person = {
		name : null,
		age : 0,
        email: null
	}
function saveEmail(email) {
    person.email = email;
    stdout.write('Ok '+person.name+' tu email es: '+person.email+'\n');
    process.exit()
}
function confirmEmail(confirm = '') {

    if (confirm.toUpperCase() === 'SI') {
        let question = '¿'+person.name+' cuál es ?';
        quiz(question,saveEmail);
        
    } else if (confirm.toUpperCase() === 'NO'){
        stdout.write('Que mal si no tienes :c '+person.name+'\n');
        process.exit();
    } else {
        stdout.write('Que me tratas de decir '+person.name+' ?\n');
        process.exit();
    }
}
function saveAge(age)
{
	person.age = age

	if( person.age >= 18 )
	{
		stdout.write( person.name + ' es mayor de edad, tiene ' + person.age + ' años\n' )
	}
	else
	{
		stdout.write( person.name + ' es menor de edad, tiene ' + person.age + ' años\n' )
	}

    let question = '¿'+ person.name + ' tienes email?';

    quiz(question, confirmEmail);

	
}
function saveName(name)
{
	person.name = name

	// Vuelvo a preguntar
	var question = 'Hola ' + person.name + ' ¿Cuántos años tienes?'
	
	quiz(question, saveAge)
}
function quiz(question, callback)
{
	stdin.resume()
	stdout.write( question + ': ' )
	
	stdin.once('data', function (res){
		callback( res.toString().trim() )
	})
}
stdin.setEncoding('utf8')
quiz('¿Cómo te llamas?', saveName)