const JobHome = function() {
    this.create = function(name) {
        this.tag = document.createElement(`${name}`);
        document.body.appendChild(this.tag)
    }

    this.attr = function(element, name, value) {
        this.tagSeach = document.querySelector(element);
        this.tagSeach.setAttribute(name, value);

    }

    this.html = function(element, value) {
        this.tagSeach = document.querySelector(element);
        this.tagSeach.textContent = value;
    }

    this.search = function(element, selector) {
        this.tagSeach = document.querySelector(element);
        this.cssSeach = this.tagSeach.querySelector(selector); 
        return this.tagSeach, this.cssSeach
        
    }

    this.addClass = function(element, className) {
        this.tagSeach = document.querySelector(element);
        this.tagSeach.classList.add(className);
    }

    this.removeClass = function(element, className) {
        this.tagSeach = document.querySelector(element);
        this.tagSeach.classList.remove(className);
    }

    this.toggleClass = function(element, className) {
        this.tagSeach = document.querySelector(element);
        this.tagSeach.classList.toggle(className);
    }

    this.hasClass = function(element, className) {
        this.tagSeach = document.querySelector(element);
        this.has = this.tagSeach.classList.contains(className);
        
        return this.has
        
    } 

    this.append = function(element, newElement, beforeElement) {
        this.tagSeach = document.querySelector(element);
        if(beforeElement === undefined) {
            this.tagSeach.appendChild(newElement);
        } else { 
            this.tagSeach.insertBefore(newElement, beforeElement)
        }
    }

    this.on = function(element, eventName, funcName) {
        this.tagSeach = document.querySelector(element);
        this.tagSeach.addEventListener(eventName,function() {
            funcName
        })
    }

    let show=function() {
        confirm('Получилось?');
        }
    
}


window.addEventListener('load', () => {
    const jobHome = new JobHome();
    jobHome.create('div')
    jobHome.attr('div', 'class', 'add')
    jobHome.html('div', 'Получилось')
    jobHome.search('body', '.add')
    jobHome.addClass('div', 'class')
    jobHome.removeClass('div', 'class')
    jobHome.toggleClass('div', 'class')
    jobHome.hasClass('div','add')
    jobHome.append('.add', 'p')
    jobHome.on('.add', 'click', show())
    console.log(jobHome)
})
