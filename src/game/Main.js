import React, {Component} from 'react';
import Stars from './Stars'
import Answer from './Answer'
import Button from './Button'
import Numbers from './Numbers'
import GameOver from './GameOver'

class Main extends Component {
    static getRandomNumber = () => {
        return 1 + Math.floor(Math.random()*9)
    }

    state = {
        selectedNumbers: [],
        randomNumberOfStars: Main.getRandomNumber(),
        answerIsCorrect: null,
        usedNumbers: [],
        redraws: 5,
        doneStatus: ''
    };
    addToSelected = (num) => {
        this.state.answerIsCorrect = null;
        this.setState(prevState=>
        {
            return {
                selectedNumbers: prevState.selectedNumbers.concat(num)
            }
        });
    }
    removeFromSelected = (num) => {
        console.log(num);
        this.state.stateanswerIsCorrect = null;
        this.setState(prevState=>
        {
            
            let index = prevState.selectedNumbers.indexOf(num);
            if (index > -1) {
                prevState.selectedNumbers.splice(index, 1);
            }
            return {
                selectedNumbers: prevState.selectedNumbers
            }
        });
    }
    acceptAnswer = (prevState) => {
        this.setState(prevState => {
            return {
                answerIsCorrect: null,
                usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
                selectedNumbers: [],
                randomNumberOfStars: Main.getRandomNumber(),
                doneStatus: this.state.usedNumbers.length === 9 ? 'You Won!!' : '' 
            }
        })
    }
    checkAnswer = () => {
        this.setState(prevState => ({
            answerIsCorrect: prevState.randomNumberOfStars ===
            prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)            
        }));
    }
    redraw = () => {
        this.setState(prevState => ({
            randomNumberOfStars: Main.getRandomNumber(),
            answerIsCorrect: null,
            selectedNumbers: [],
            redraws: prevState.redraws - 1,
            doneStatus: this.state.redraws === 0 ? 'Lost..Try Again..!' : ''
        }));
    }

	render() {
        const { 
            selectedNumbers, 
            randomNumberOfStars, 
            answerIsCorrect,
            usedNumbers,
            redraws,
            doneStatus
        } = this.state;
        return (
            <div style={{width:'600px', margin: '0 auto'}}>
                <h3>Play Nine</h3>
                <div className="row">
                    <Stars randomNumberOfStars={randomNumberOfStars}/>
                    <Button selection={selectedNumbers} 
                            answerIsCorrect={answerIsCorrect}
                            checkAnswer={this.checkAnswer}
                            acceptAnswer={this.acceptAnswer}
                            redraws={redraws}
                            redraw={this.redraw}/>
                    <Answer selection={selectedNumbers} 
                            onAnswerClick={this.removeFromSelected}/>
                </div>
                <div className="row">
                {doneStatus? <GameOver doneStatus={doneStatus}/> :
                    <Numbers selection={selectedNumbers} 
                            onNumberClick = {this.addToSelected} 
                            usedNumbers={usedNumbers}/>}
                </div>
            </div>
        )
    }
}
export default Main;