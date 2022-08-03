//criando com constructor function
function Calculator() {
    //atributo public
    this.display = document.querySelector('.display');

    //methods
    this.startCalc = function startCalc() {
        this.clickButton();
        this.pressEnter();
    }

    this.pressEnter = () => {
        this.display.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) this.operationCalc();
        });
    };

    this.clearDisplay = () => {
        this.display.value = '';
    };

    this.deleteDisplay = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.operationCalc = () => {
        let operation = this.display.value;
        try {
            //eval é uma função js que computa um código representado por uma string 
            operation = eval(operation); 

            //se for um NaN ou undefined
            if(operation === '' || Number.isNaN(operation) || typeof operation !== 'number'){
                alert('Conta inválida!');
                return; 
            }
            //caso contrário o valor da linha da tabela que foi 
            this.display.value = operation;
        } catch (error) {
            alert('Conta inválida!');
            return;
        }
        
        };

    this.clickButton = () => {
            document.addEventListener('click', (e) => {
                const elemento = e.target;

                if (elemento.classList.contains('btn-num')) {
                    this.btnToDisplay(elemento.innerText);
                }

                if(elemento.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(elemento.classList.contains('btn-delete')){
                    this.deleteDisplay();
                }

                if(elemento.classList.contains('btn-equal')){
                    this.operationCalc();
                }
                
            });
        };
        this.btnToDisplay = (value) =>{
            this.display.value += value;
            //outra forma de fazer: this.display.value += value.innerText
            this.display.focus();//para o foco permanecer no input e não na última tecla pressionada
        }


    }
    const calculator = new Calculator();
    calculator.startCalc();