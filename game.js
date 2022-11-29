//unicode overview
//https://unicode-table.com/en/sets/symbols-for-steam/
//source:
//https://www.webtips.dev/tic-tac-toe-in-javascript

const game = {
    xTurn: true,
    moveCount: 0
}

document.addEventListener('click', event => {
    const target = event.target
    const isCell = target.classList.contains('grid-cell')
    const isDisabled = target.classList.contains('disabled')

    if (isCell && !isDisabled) {

        target.classList.add('disabled');
        target.classList.add(game.xTurn ? 'x' : 'o');
        game.xTurn = !game.xTurn;
        game.moveCount++;

        var audio = new Audio('slap.wav');
        audio.play();

        if(game.moveCount >= 6)
        {
            document.querySelectorAll('.grid-cell').forEach(cell => cell.classList.add('disabled'))
            document.querySelector('.game-over').classList.add('visible')
        }

    }
})

document.querySelector('.restart').addEventListener('click', () => {
    document.querySelector('.game-over').classList.remove('visible');

    document.querySelectorAll('.grid-cell').forEach(cell => {
        cell.classList.remove('disabled', 'x', 'o');
    });

    game.xTurn = true
    game.moveCount = 0;
})