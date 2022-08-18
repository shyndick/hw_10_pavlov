let Kettle = function() {
    this.get = function() {
        this.name = prompt('Марка');
        this.p = +prompt('Мощность, Вт');
        this.v = +prompt('Объем, Мл');
        this.t1 = +prompt('Начальная температура воды, градусы');
        this.t2 = +prompt('Нужная температура, градусы');
        this.job = confirm('Включить чайник?');
        

        this.operation();
    };
    this.operation = function() {
        this.time = 0.00117 * (this.v /1000) * (this.t2 - this.t1) / (this.p/1000); 
        this.timeMin = this.time * 60;

        this.result();
    };
    this.result = function() {
        if(this.job === true) {
            alert('Время закипания чайника: ' + this.time.toFixed(2) + 'ч. или ' + this.timeMin.toFixed(2) + 'мин.'   );
            document.write(`Марка чайника: ${this.name}<br>`);
            document.write(`Мощность чайника: ${this.p} Вт<br>`);
            document.write(`Объем чайника: ${this.v} Мл.<br>`);
            document.write('Время закипания чайника: ' + this.time.toFixed(2) + 'ч. или ' + this.timeMin.toFixed(2) + 'мин.<br>');

        } else {
            alert('Чайник выключен');
            document.write(`Марка чайника: ${this.name} <br>`);
            document.write(`Мощность чайника: ${this.p} Вт.<br>`);
            document.write(`Объем чайника: ${this.v} Мл.<br>`);
        };
        
    };

    
}
let kettle = new Kettle();


let Nuke = function() {
    Kettle.apply(this, arguments);
    this.type = function() {
        this.type= +prompt('1.Чайник или 2.Микроволновка')
        if(this.type === 1) this.get();
        else this.getNuke()
    };

    this.getNuke = function() {
        this.name = prompt('Марка');
        this.p = +prompt('Мощность, Вт');
        this.v = +prompt('Объем ёмкости для разогрева, Мл');
        this.typeOperation = +prompt('Вы хотите узнать 1:Время разогрева 2:Температуру разогрева ?')
        if(this.typeOperation === 1) {
            this.t1 = +prompt('Начальная температура пиши, градусы');
            this.t2 = +prompt('Нужная температура пиши, градусы');
            this.job = confirm('Включить микроволновку?');
            this.operation()
        } else {this.timeSec = +prompt('Укажите время разогрева')
            this.job = confirm('Включить микроволновку?');
            this.operationTemp()
        };
    }

    this.operationTemp = function() {
        this.time = this.timeSec / 60 /60;
        this.t = (((0.0017 * (this.v/1000))/ this.p) - this.time * (this.p/1000))*100
        this.result2()

    }

    this.resultJobOff = function() {
            alert('Микроволновка выключен');
                document.write(`Марка : ${this.name} <br>`);
                document.write(`Мощность : ${this.p} Вт.<br>`);
                document.write(`Объем : ${this.v} Мл.<br>`);
        }

    this.result = function() {
        if(this.job === true) {
            alert('Время разогрева пищи: ' + this.time.toFixed(2) + 'ч. или ' + this.timeMin.toFixed(2) + 'мин.'   );
            document.write(`Марка : ${this.name}<br>`);
            document.write(`Мощность микроволновки: ${this.p} Вт<br>`);
            document.write(`Объем ёмкости: ${this.v} Мл.<br>`);
            document.write('Время разогрева: ' + this.time.toFixed(2) + 'ч. или ' + this.timeMin.toFixed(2) + 'мин.<br>');

        } else {
            this.resultJobOff() 
        };
        
    }

    
    this.result2 = function() {
        if(this.job === true) {
            document.write(`Марка : ${this.name}<br>`);
            document.write(`Мощность микроволновки: ${this.p} Вт<br>`);
            document.write(`Объем ёмкости: ${this.v} Мл.<br>`);
            document.write('Температура разогрева:' + this.t.toFixed(2) + '<br>');

        } else {
            this.resultJobOff()
        };
        
    }

    
    
}

let nuke = new Nuke();
nuke.type()

