//criando com factory function
function createCalcutor(){
    return {
        //atributos
        //nesse momento o input é um atributo do objeto, sendo acesso por this.display
        display: document.querySelector('.display'), //<--input

        //método para iniciar a calculadora
        startCalc(){
            this.clickButton();
            this.pressEnter();
        },

        //método para realizar operação apertando a tecla Enter
        pressEnter(){
            //this.display porque vai pegar o valor do input
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                    this.equalDisplay();
                }
            });
        },

        //método para limpar o input 
        clearDisplay(){
            this.display.value= '';
        },

        //método para deletar caractere
        deleteDisplay(){
            this.display.value = this.display.value.slice(0, -1); //tamanho da string -1
        },

        //método para realizar operação
        equalDisplay(){
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
        },

        clickButton(){
            //this -> calculadora
            document.addEventListener('click', e => { 
                
                //vai capturar o evento de click, o elemento que está sendo selecionado
                const element = e.target; 
                //se o target for um btn-num, o conteúdo é passado para o input
                if(element.classList.contains('btn-num')){
                    this.btnToDisplay(element.innerText); 
                    //innerText é o conteúdo que está dentro do button
                    
                }

                if(element.classList.contains('btn-clear')){
                    this.clearDisplay(); //limpa todo o conteúdo do input
                }

                if(element.classList.contains('btn-delete')){
                    this.deleteDisplay();
                }

                //realiza operação
                if(element.classList.contains('btn-equal')){
                    this.equalDisplay();
                }

                //para situações onde apertar Enter repetia o comando anterior:
                //nessa situação o focus é aplicado ao input a cada botão clicado
                //em resumo, ele vai fixar no input
                this.display.focus();
            });
        },

        btnToDisplay(value){
            this.display.value+= value; //vai concatenar todos os valores das linhas da tabela no input
            //lembrando: display é o input que vai concatenar os valores dados pelo click(value)
        }
    };
}

const calculadora = createCalcutor();   
calculadora.startCalc();   