let time: number;
let battingTeam: string;
let bowlingTeam: string;
let clone;
let change = false;
let interval: any;
let score: number;
const hitButtons = ['hit1', 'hit2'];
let rowCount = 1;
let colCount = 1;
let total = 0;
let click = 0;
let finish = false;
const team1GrandTotal: number = 0;
const team2GrandTotal: number = 0;
let manOfTheMatch: string;
let helper: number = 2;
const team1Total: any = [];
const team2Total: any = [];
let sum = 0;


//***********************************************************************************FUNCTIONS**********************************************************************************/

let addTopRow = (element: string, attributeProperty: string, attributeValue: string, content: string, side: string) => {
    let row = document.createElement(`${element}`);
    row.setAttribute(`${attributeProperty}`, `${attributeValue}`);
    row.innerHTML = `${content}`;
    if (side === 'left') {
        tableLeftRow1.appendChild(row);
    }
    else if (side === 'right') {
        tableRightRow1.appendChild(row);
    }

}

// Written a Function to append a table heading to the table every time it is called with required parameters....

let addColumns = (element: string, attributeProperty: string, attributeValue: string, content: string, side: string) => {
    let newRow = document.createElement('tr');
    newRow.id = `${side}${content.toLowerCase()}row`;

    let block = document.createElement(`${element}`);
    block.setAttribute(`${attributeProperty}`, `${attributeValue}`)
    block.innerHTML = `${content}`;
    newRow.appendChild(block);
    if (side === 'left') {
        leftTableBody.appendChild(newRow);
    }
    else if (side === 'right') {
        rightTableBody.appendChild(newRow);
    }
}

//***********************************************************************************FUNCTIONS**********************************************************************************/




//------------------------------------------------------------------------------------------------Play Button Added------------------------------------------------------------------

let container = document.createElement('div');
container.classList.add('container-fluid', 'text-center', 'mt-5');
document.body.appendChild(container);

let playDiv = document.createElement('div');
playDiv.classList.add('d-flex');
container.appendChild(playDiv);

let playButton = document.createElement('button');
playButton.classList.add('btn', 'btn-outline-dark','mr-5');
playButton.id = 'startgame';
playButton.onclick = function () {
    return game1.start('hit1');
}
playButton.innerHTML = `Start Game`;
playDiv.appendChild(playButton);

let restartButton = document.createElement('button');
restartButton.classList.add('btn', 'btn-outline-dark');
restartButton.id = 'startgame';
restartButton.onclick = function () {
    let ask = confirm(`Initiate the Game Again ?`);
    if(ask == true)
    {
        window.location.reload();
    }
    else{
        container.style.opacity = '1';
    }
}
restartButton.innerHTML = `Restart Game`;

playDiv.appendChild(restartButton);
//--------------------------------------------------------------------------------Parent Container----------------------------------------------------


//----------------------------------------------------------------------------------Game Title-------------------------------------------------
let title = document.createElement('div');
title.classList.add('container', 'text-center', 'display-1', 'col-12', 'col-md-12', 'col-sm-12', 'col-lg-12', 'col-xl-12');
title.setAttribute('style', 'font-family:cusive; text-decoration:italic;');
title.innerHTML = 'Crick-Sixty'
container.appendChild(title);
//-----------------------------------------------------------------------------------Game Title Done--------------------------------------------

container.appendChild(document.createElement('hr'));  // Horizontal Line;

//----------------------------------------------------------------------------------Teams Info and Timer Section----------------------------------
let teamInfoDiv = document.createElement('div');
teamInfoDiv.classList.add('container', 'row', 'ml-5');
container.appendChild(teamInfoDiv);

//Dedicated Div for Teams Info and Timer Done.....

let team1 = document.createElement('div');
team1.classList.add('text-center', 'col-12', 'col-sm-12', 'col-md-6', 'col-lg-5', 'col-xl-5');
teamInfoDiv.appendChild(team1);

//Dedicated Div for Team-1 Info Done.....

let teamName1 = document.createElement('h1');
teamName1.classList.add('h3', 'd-block')
teamName1.id = 'teamname1';
teamName1.innerHTML = `TEAM 1 Score`;
team1.appendChild(teamName1);

// Team-1 Name Appended..................

let score1 = document.createElement('div');
score1.classList.add('d-block', 'row', 'text-center');
team1.appendChild(score1);

//Dedicated Div for Team-1 Score Done.....

let team1Score = document.createElement('h3');
team1Score.classList.add('h3', 'text-center', 'd-block');
team1Score.innerHTML = '0';
team1Score.id = 'team1score';
score1.appendChild(team1Score);

//Team-1 Initial Score Appended to the Dedicated Div.....

let hit1Div = document.createElement('div');
hit1Div.classList.add('d-block', 'row', 'text-center');
team1.appendChild(hit1Div);

//Dedicated Div for Team-1 Hit Button Done.....

let team1PlayButton = document.createElement('button')
team1PlayButton.classList.add('btn', 'btn-primary');
team1PlayButton.innerHTML = `HIT`;
team1PlayButton.disabled = true;
team1PlayButton.id = 'hit1';

hit1Div.appendChild(team1PlayButton);

//Hit Button for Team-1 created and Appended to the Dedicated Div....

let timer = document.createElement('div');
timer.classList.add('text-center', 'col-12', 'col-sm-12', 'col-md-12', 'col-lg-2', 'col-xl-2');
let timerTitle = document.createElement('h1');
timerTitle.classList.add('h3');
timerTitle.innerHTML = `TIMER`;
timer.appendChild(timerTitle);
teamInfoDiv.appendChild(timer);

let countDownDiv = document.createElement('div');
countDownDiv.classList.add('text-center', 'col-12', 'col-sm-12', 'col-md-12', 'col-lg-2', 'col-xl-2');
timer.appendChild(countDownDiv);

let countDown = document.createElement('h1');
countDown.classList.add('h3', 'ml-5')
countDown.id = 'timer';
countDownDiv.appendChild(countDown);

//Dedicated Div for Timer Done.....


// Initial Timer Value Created And Appended to the Dedicated DIV.....

let team2 = document.createElement('div');
team2.classList.add('text-center', 'col-12', 'col-sm-12', 'col-md-6', 'col-lg-5', 'col-xl-5');
teamInfoDiv.appendChild(team2);

//Dedicated Div for Team-2 Info Done.....

let teamName2 = document.createElement('h1');
teamName2.id = 'teamname2';
teamName2.classList.add('h3', 'd-block')
teamName2.innerHTML = `TEAM 2 Score`;
team2.appendChild(teamName2);

//Team -2 Name Appended.....

let score2 = document.createElement('div');
score2.classList.add('d-block', 'row', 'text-center');
team2.appendChild(score2);

//Dedicated Div for Team-2 Score Done.....

let team2Score = document.createElement('h3');
team2Score.classList.add('h3', 'text-center', 'd-block');
team2Score.innerHTML = '0';
team2Score.id = 'team2score';
score2.appendChild(team2Score);

//Team-2 Initial Score Appended to the Dedicated Div.....

let hit2Div = document.createElement('div');
hit2Div.classList.add('d-block', 'row', 'text-center');
team2.appendChild(hit2Div);

//Dedicated Div for Team-1 Hit Button Done.....

let team2PlayButton = document.createElement('button')
team2PlayButton.classList.add('btn', 'btn-primary');
team2PlayButton.innerHTML = `HIT`;
team2PlayButton.disabled = true;
team2PlayButton.id = 'hit2';

hit2Div.appendChild(team2PlayButton);

//Hit Button for Team-1 created and Appended to the Dedicated Div....
//----------------------------------------------------------------------------------------Teams Info and Timer Section-----------------------------------

container.appendChild(document.createElement('hr')); //Horizontal Line

//------------------------------------------------------------------------------------------Teams Play Field Section------------------------------------

let playFieldRow = document.createElement('div');
playFieldRow.classList.add('row');
container.appendChild(playFieldRow);

// Dediated Field for Displaying scorecards Done......

let team1Field = document.createElement('div');
team1Field.classList.add('col-12', 'col-sm-12', 'col-md-6', 'col-lg-5', 'col-xl-5', 'text-center');
playFieldRow.appendChild(team1Field);

//Dedicated Field for Displaying Score Card of Team 1 Done.....................

let headTeam1 = document.createElement('div');
headTeam1.classList.add('row', 'float-left', 'd-block');
headTeam1.innerHTML = `<h4>Team - 1 Score Board</h4>`;
team1Field.appendChild(headTeam1);

// Div containing the title Team - 1 Score Board is appended to Team 1 Dedicated Field........

let tableLeft = document.createElement('table');
tableLeft.classList.add('table', 'table-dark', 'table-bordered');
team1Field.appendChild(tableLeft);

// Created a Table Tag with custom Bootstrap Styles and appended it to the Team 1 Dedicated Field.......

let tableLeftHead = document.createElement('thead');
let tableLeftRow1 = document.createElement('tr');
tableLeftHead.appendChild(tableLeftRow1);
tableLeft.appendChild(tableLeftHead);

//created table-head tag with a child table-row for row 1 and appended them to dedicated team 1 field and the table respectively..



addTopRow('th', 'scope', 'col', 'Player\'s Names', 'left');  // Called addTopRow to add a Table Header Player's Names..
addTopRow('th', 'scope', 'col', 'B1', 'left');               // Called addTopRow to add a Table Header B1..
addTopRow('th', 'scope', 'col', 'B2', 'left');               // Called addTopRow to add a Table Header B2..                 
addTopRow('th', 'scope', 'col', 'B3', 'left');               // Called addTopRow to add a Table Header B3..
addTopRow('th', 'scope', 'col', 'B4', 'left');               // Called addTopRow to add a Table Header B4..
addTopRow('th', 'scope', 'col', 'B5', 'left');               // Called addTopRow to add a Table Header B5..
addTopRow('th', 'scope', 'col', 'B6', 'left');               // Called addTopRow to add a Table Header B6..
addTopRow('th', 'scope', 'col', 'TOTAL', 'left');            // Called addTopRow to add a Table Header Total..


// Left 5-unit segment of the screen allocated for play Field of Team-1..........

let resultsField = document.createElement('div');
resultsField.classList.add('col-12', 'col-sm-12', 'col-md-12', 'col-lg-2', 'col-xl-2', 'text-center');
playFieldRow.appendChild(resultsField);

let buttonDiv = document.createElement('div');
buttonDiv.classList.add('d-block', 'row');
resultsField.appendChild(buttonDiv);

let scoreGenerator = document.createElement('button');
scoreGenerator.classList.add('btn', 'btn-primary')
scoreGenerator.id = 'generatescore';
scoreGenerator.innerHTML = 'Generate Results';
scoreGenerator.disabled = true;
buttonDiv.appendChild(scoreGenerator);

// Middle 2-units segment of the Screen is allocated for Result Declaration...........

let team2Field = document.createElement('div');
team2Field.classList.add('col-12', 'col-sm-12', 'col-md-6', 'col-lg-5', 'col-xl-5', 'text-center');
playFieldRow.appendChild(team2Field);

//Dedicated Field for Displaying Score Card of Team 2 Done.....................

let headTeam2 = document.createElement('div');
headTeam2.classList.add('row', 'float-right', 'd-block');
headTeam2.innerHTML = `<h4>Team - 2 Score Board</h4>`;
team2Field.appendChild(headTeam2);

// Div containing the title Team - 1 Score Board is appended to Team 2 Dedicated Field........

let tableRight = document.createElement('table');
tableRight.classList.add('table', 'table-dark', 'table-bordered');
team2Field.appendChild(tableRight);

// Created a Table Tag with custom Bootstrap Styles and appended it to the Team 2 Dedicated Field.......

let tableRightHead = document.createElement('thead');
let tableRightRow1 = document.createElement('tr');
tableRightHead.appendChild(tableRightRow1);
tableRight.appendChild(tableRightHead);

//created table-head tag with a child table-row for row 1 and appended them to dedicated team 2 field and the table respectively..

addTopRow('th', 'scope', 'col', 'Player\'s Names', 'right');  // Called addTopRow to add a Table Header Player's Names..
addTopRow('th', 'scope', 'col', 'B1', 'right');               // Called addTopRow to add a Table Header B1..
addTopRow('th', 'scope', 'col', 'B2', 'right');               // Called addTopRow to add a Table Header B2..                 
addTopRow('th', 'scope', 'col', 'B3', 'right');               // Called addTopRow to add a Table Header B3..
addTopRow('th', 'scope', 'col', 'B4', 'right');               // Called addTopRow to add a Table Header B4..
addTopRow('th', 'scope', 'col', 'B5', 'right');               // Called addTopRow to add a Table Header B5..
addTopRow('th', 'scope', 'col', 'B6', 'right');               // Called addTopRow to add a Table Header B6..
addTopRow('th', 'scope', 'col', 'TOTAL', 'right');            // Called addTopRow to add a Table Header Total..

// Called already Written Function for Adding the Top Rows for Team-2

// Left 5-unit segment of the screen allocated for play Field of Team-2..........

let leftTableBody = document.createElement('tbody');
tableLeft.appendChild(leftTableBody);

// Created a Table Body Tag and appended to Left Table

let rightTableBody = document.createElement('tbody');
tableRight.appendChild(rightTableBody);

//Created a Table Body Tag and appended it to Right Table

for (let ind = 0; ind < 10; ind++) {
    addColumns(`th`, `scope`, `col`, `Player${ind + 1}`, `left`);  // For adding Player1, Player2, Player3 columns to Left Table
    addColumns(`th`, `scope`, `col`, `Player${ind + 1}`, `right`); // For adding Player1, Player2, Player3 columns to Left Table
}

//------------------------------------------------------------------------------------------Teams Play Field Section Done-------------------------------

//-------------------------------------------------------------------------------------------------------Result Display--------------------------------



let display = document.createElement('div');
display.id = 'resultdiv';

display.style.zIndex = '2';
display.classList.add('text-center', 'border', 'border-secondry', 'shadow', 'p-3', 'mb-5', 'bg-white', 'rounded');
display.setAttribute('style', ' width:60%; height:50%; position:absolute; top: 80%; left:50%; transform:translate(-50%,-50%)');


let greet = document.createElement('p');
greet.classList.add('display-2');
greet.style.fontFamily = 'cursive';
greet.style.fontStyle = 'italic'
greet.innerHTML = `<u>Congratulations...!<u>`
display.appendChild(greet);

let winnerHere = document.createElement('div');
winnerHere.classList.add('container-fluid', 'text-center');
display.appendChild(winnerHere);

let winnerTeam = document.createElement('h2');
winnerTeam.classList.add('h2');
winnerTeam.id = 'winner';
winnerTeam.innerHTML = 'Winner Name Comes Here';
winnerTeam.style.display = 'block'
winnerTeam.innerText = '';
winnerHere.appendChild(winnerTeam);

let winnerRuns = document.createElement('h3');
winnerRuns.classList.add('h3');
winnerRuns.id = 'winnerruns';
winnerRuns.innerHTML = 'winner Runs Display Here'
winnerRuns.style.display = 'block'
winnerRuns.innerHTML = '';
winnerHere.appendChild(winnerRuns);

let manOfTheMatchHere = document.createElement('h2');
manOfTheMatchHere.classList.add('h2');
manOfTheMatchHere.id = 'manofthematch';
manOfTheMatchHere.innerHTML = 'Man of the Match displayed Here';
manOfTheMatchHere.style.display = 'block'
manOfTheMatchHere.innerText = '';
winnerHere.appendChild(manOfTheMatchHere);

let back = document.createElement('button');
back.classList.add('btn', 'btn-outline-dark', 'float-right');
back.innerHTML = 'Back';
back.onclick = () => {
    container.style.opacity = '1';
    document.body.removeChild(display);
}
display.appendChild(back);


//--------------------------------------------------------------------------------------------------------Result Display Done---------------------------


class Cricket {
    constructor() {
    }

    start(battingTeam: string) {
        (<HTMLButtonElement>document.getElementById(`${battingTeam}`)).disabled = false;
        (<HTMLButtonElement>document.getElementById('startgame')).disabled = true;
        let count = () => {
            time = 60;
            clearInterval(interval);
            interval = setInterval(() => {
                if (time > -1) {
                    (<HTMLHeadingElement>document.getElementById('timer')).innerText = `${time--}`;
                    if (time === -1) {
                        rowCount = 1;
                        colCount = 1;
                        helper--;
                        (<HTMLButtonElement>document.getElementById(`${battingTeam}`)).disabled = true;
                        if (change == false) {
                            changeBatting(`${bowlingTeam}`);

                        }
                        if (finish === true || helper === 0) {

                            for (let ind = 0; ind < team2Total.length; ind++) {
                                sum = sum + parseInt(team2Total[ind])
                            }
                            team2Score.innerHTML = `${sum}`;
                            scoreGenerator.disabled = false;
                        }

                    }
                }
            }, 1000)

        }

        count();

        if (hitButtons.includes(battingTeam)) {
            let bowlingTeamIndex = hitButtons.length - (hitButtons.indexOf(battingTeam) + 1);
            bowlingTeam = hitButtons[bowlingTeamIndex];
            (<HTMLButtonElement>document.getElementById(`${battingTeam}`)).disabled = false;
            (<HTMLButtonElement>document.getElementById(`${bowlingTeam}`)).disabled = true;
        }

    }

    isBowling(team: string) {
        if (team === 'team1') {
            (<HTMLButtonElement>document.getElementById('hit1')).disabled = true
        }
        else if (team === 'team2') {
            (<HTMLButtonElement>document.getElementById('hit2')).disabled = true
        }

    }

    hit() {
        score = Math.floor(Math.random() * 7);
        return score;
    }
}

let game1 = new Cricket();

let changeBatting = (nextTeam: string) => {
    if (change == false) {
        change = true;
    }
    else {
        change = false;
    }

    for (let ind = 0; ind < team1Total.length; ind++) {
        sum = sum + parseInt(team1Total[ind])
    }
    team1Score.innerHTML = `${sum}`;
    sum = 0;
    game1.start(nextTeam);
}

team1PlayButton.onclick = () => {
    game1.hit();
    if (rowCount <= 10) {
        let area = document.getElementById(`leftplayer${rowCount}row`);
        if (colCount < 7) {
            total = total + score;
            if (score !== 0) {
                let td = document.createElement('td');
                td.innerHTML = `${score}`;
                (<HTMLTableCellElement>area).appendChild(td);

            }
            else if (score === 0) {
                let td = document.createElement('td');
                td.style.backgroundColor = 'red';
                td.innerHTML = `${score}`;
                (<HTMLTableCellElement>area).appendChild(td);
                for (let ind = 0; ind < 6 - colCount; ind++) {
                    let empty = document.createElement('td');
                    empty.innerHTML = "";
                    (<HTMLTableCellElement>area).appendChild(empty);
                }
                colCount = 7;
            }
            colCount++;
        }
        if (colCount > 6) {
            let td = document.createElement('th');
            td.innerHTML = `${total}`;
            (<HTMLTableCellElement>area).appendChild(td);
            team1Total.push(`${total}`);
            rowCount++;
            colCount = 1
            total = 0;
        }
    }

}

team2PlayButton.onclick = () => {
    game1.hit();
    if (rowCount <= 10) {
        let area = document.getElementById(`rightplayer${rowCount}row`);
        if (colCount < 7) {
            total = total + score;
            if (score !== 0) {
                let td = document.createElement('td');
                td.innerHTML = `${score}`;
                (<HTMLTableCellElement>area).appendChild(td);
            }
            else if (score === 0) {
                let td = document.createElement('td');
                td.style.backgroundColor = 'red';
                td.innerHTML = `${score}`;
                (<HTMLTableCellElement>area).appendChild(td);
                for (let ind = 0; ind < 6 - colCount; ind++) {
                    let empty = document.createElement('td');
                    empty.innerHTML = "";
                    (<HTMLTableCellElement>area).appendChild(empty);
                }
                colCount = 7;
            }
            colCount++;
        }
        if (colCount > 6) {
            let td = document.createElement('th');
            td.innerHTML = `${total}`;
            (<HTMLTableCellElement>area).appendChild(td);
            team2Total.push(`${total}`);
            rowCount++;
            colCount = 1
            total = 0;
        }
    }
    if (rowCount > 10) {
        finish = true;
    }

}


scoreGenerator.onclick = () => {
    
    if(team1Total.length !==0 && team2Total.length !==0)
    {

        container.style.opacity = '0.6';
    
        let score1 = parseInt(team1Score.innerHTML);
        let score2 = parseInt(team2Score.innerHTML);
    
        let team1Runs: any = [];
        let team2Runs: any = [];
    
        team1Total.forEach((element: any) => {
            team1Runs.push(parseInt(element));
        });
    
        team2Total.forEach((element: any) => {
            team2Runs.push(parseInt(element));
        });
    
        let highestofTeam1: number = team1Runs.reduce((a: number, b: number) => {
            return Math.max(a, b);
        })
    
        let highestofTeam2: number = team2Runs.reduce((a: number, b: number) => {
            return Math.max(a, b);
        })
    
        if (score1 > score2) {
            winnerTeam.innerHTML = `<b> <u>TEAM - 1</u> Won </b> !`;
            winnerRuns.innerHTML = `Total Runs Scored : <b> ${score1}</b>`;
            manOfTheMatchHere.innerHTML = `Man Of the Match : <b><i> Player - ${team1Runs.indexOf(highestofTeam1)+1} </i></b>`;
        }
        else if (score2 > score1) {
            winnerTeam.innerHTML = `<b> <u> TEAM - 2 </u> Won  ! </b>`;
            winnerRuns.innerHTML = `Total Runs Scored : <b>${score2}</b>`;
            manOfTheMatchHere.innerHTML = `Man Of the Match : <b><i> Player - ${team2Runs.indexOf(highestofTeam2)+1} </i></b>`
        }
        else if(score1 === score2)
        {
            winnerTeam.innerHTML = `<b>  It\'s a Tie...! `;
            winnerRuns.innerHTML = ``;
            manOfTheMatchHere.innerHTML = ``;
        }
    
        document.body.appendChild(display);
    }
    else{
        alert('Oops...!! Match Seems to be having Inactive Players..!!')
    }

}