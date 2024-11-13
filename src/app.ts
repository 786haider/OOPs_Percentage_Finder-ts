import inquirer from 'inquirer';
import chalk from 'chalk';


let TotalMarks = await inquirer.prompt([
    {
        type:'number',
        name:'totalmarks',
        message:'Enter the total marks here :'
    }
]);

let MarkObtain = await inquirer.prompt([
    {
        type:'number',
        name:'markobtain',
        message:'Enter the marks obtained here : '
    }
]);


let number3 :number = 100;

let Percentage = (MarkObtain.markobtain / TotalMarks.totalmarks) * number3 ;

console.log(chalk.greenBright.bold.italic(`Your percentage is ${Percentage}%`));

if(Percentage === 10){
     console.log(chalk.redBright(`Bad Grades`));
     
}
if(Percentage === 20){
    console.log(chalk.redBright(`Bad Grades`)); 
}
if(Percentage === 30){
    console.log(chalk.blueBright(`C Grade`));
    
}

if(Percentage === 40){
    console.log(chalk.blueBright(`C Grade`));
    
}
if(Percentage === 50){
    console.log(chalk.yellowBright(`B Grade`));
    
}

if(Percentage === 60){
    console.log(chalk.yellowBright(`B Grade`));
    
}
if(Percentage === 70){
    console.log(chalk.greenBright(`A Grade`));
}
if(Percentage === 80){
    console.log(chalk.greenBright(`A Grade`));
}


if(Percentage === 81){
    console.log(chalk.greenBright(`A+ Grade`));
}

if(Percentage === 82){
    console.log(chalk.greenBright(`A+ Grade`));
}

if(Percentage === 83){
    console.log(chalk.greenBright(`A+ Grade`));
}

if(Percentage === 84){
    console.log(chalk.greenBright(`A+ Grade`));
}

if(Percentage === 85){
    console.log(chalk.greenBright(`A+ Grade`));
}

if(Percentage === 86){
    console.log(chalk.greenBright(`A+ Grade`));
}

if(Percentage === 87){
    console.log(chalk.greenBright(`A+ Grade`));
}

if(Percentage === 88){
    console.log(chalk.greenBright(`A+ Grade`));
}

if(Percentage === 89){
    console.log(chalk.greenBright(`A+ Grade`));
}

if(Percentage === 90){
    console.log(chalk.greenBright(`A+ Grade`));
}

if(Percentage === 91){
    console.log(chalk.magentaBright(`A++ bestest Grade ever`));
}

if(Percentage === 92){
    console.log(chalk.magentaBright(`A++ bestest Grade ever`));
}

if(Percentage === 93){
    console.log(chalk.magentaBright(`A++ bestest Grade ever`));
}

if(Percentage === 94){
    console.log(chalk.magentaBright(`A++ bestest Grade ever`));
}

if(Percentage === 95){
    console.log(chalk.magentaBright(`A++ bestest Grade ever`));
}

if(Percentage === 96){
    console.log(chalk.magentaBright(`A++ bestest Grade ever`));
}

if(Percentage === 97){
    console.log(chalk.magentaBright(`A++ bestest Grade ever`));
}

if(Percentage === 98){
    console.log(chalk.magentaBright(`A++ bestest Grade ever`));
}

if(Percentage === 99){
    console.log(chalk.magentaBright(`A++ bestest Grade ever`));
}

if(Percentage === 100){
    console.log(chalk.magentaBright.bgWhite.bold.italic(`A++ bestest Grade ever`));
}
if(Percentage < 30){
    console.log(chalk.redBright(`LOSS`));
    
}

if(Percentage > 30){
    console.log(chalk.yellow(`PROFIT`));
    
}