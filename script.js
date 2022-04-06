window.addEventListener('DOMContentLoaded', () => {
    ////////// Add task //////////

    const button = document.querySelector('[data-add-task]'),
        parent = document.querySelector('.tasks__wrapper'),
        input = document.querySelector('[data-input]');
        
    class Task {
        constructor(title, parent) {
            this.title = title;
            this.parent = parent;
        }

        createTask = () => {
            const task = document.createElement('li');
            task.classList.add('tasks__item');
            task.innerHTML = `
                <div class="tasks__item__title">${this.title}</div>
                <div class="tasks__item__buttons">
                    <button data-check-mark><i class="fa-solid fa-check"></i></button>
                    <button data-trash><i class="fa-solid fa-trash"></i></button>
                </div>
            `

            this.parent.append(task)
        }
    }

    button.addEventListener('click', e => {
        e.preventDefault();

        const value = input.value;
        if (value) {
            new Task(input.value, parent).createTask();
            input.value = '';
        }
    })

    ////////// Button on mark //////////

    const wrapper = document.querySelector('.tasks__wrapper');

    wrapper.addEventListener('click', e => {
        const target = e.target,
            button = target.parentNode,
            listItem = target.parentNode.parentNode.parentNode;
        
        if (button.hasAttribute('data-check-mark')) {
            listItem.classList.toggle('tasks__item_done');
        } else if (button.hasAttribute('data-trash')) {
            listItem.remove();
        }
    })
})