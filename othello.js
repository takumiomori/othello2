const board = document.querySelector('#board');
        const game = [];
        let count = 0;

        

        for (let i = 0; i < 8; i++) {
            const item = document.createElement('div');
            if (i === 27) {
                item.textContent = '●';
                item.style.color = 'white';
                game[i] = '〇'
            }
            if (i === 28) {
                item.textContent = '●';
                item.style.color = 'black';
                game[i] = '×'
            }
            if (i === 36) {
                item.textContent = '●';
                item.style.color = 'white';
                game[i] = '〇'
            }
            if (i === 35) {
                item.textContent = '●';
                item.style.color = 'black';
                game[i] = '×'
            }

            item.addEventListener('click', () => {

                if (count % 2 === 0) {
                    item.textContent = '●';
                    makeWhite(item);
                    game[i] = '〇'
                    for(let j = 0; j<8;j++){

                    }
                    if(game[i+1]==='×'||game[i-1]==='')
                    if (game[i + 1] === '×' && game[i + 2] === '〇') {
                        game[i + 1] = '〇';
                        document.querySelectorAll('#board div')[i+1].style.color='white';
                    }
                    if(game[i-1]==='×' && game[i-2]==='〇'){
                        game[i-1]='〇'
                        document.querySelectorAll('#board div')[i-1].style.color='white';
                    }

                } else {
                    item.textContent = '●';
                    makeBlack(item);
                    game[i] = '×';

                }
                count++;
                console.log(count);
                console.log(game);
            })

            board.appendChild(item)

            function makeBlack(){
                item.classList.add('black');
            }
    
            function makeWhite(){
                item.classList.add('white')
            }

        }

