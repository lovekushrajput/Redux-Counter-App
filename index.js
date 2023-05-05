function main() {

    const h1 = document.querySelector('h1');
    const parent = document.querySelector('.parent')


    const store = Redux.createStore(reducer)
    h1.innerText = store.getState()

    const createAction = {}
    let max

    parent.addEventListener('click', (e) => {
        const id = e.target.id
        if (e.target.nodeName === 'BUTTON') {
            let maxElm = document.getElementById('max_' + max)
            let stepElm = document.getElementById('step_' + createAction.step)

            switch (id) {
                case 'increment':
                    createAction.type = id
                    createAction.step && createAction.step + store.getState() > max ? '' : store.dispatch(createAction)
                    h1.innerText = store.getState()
                    break;

                case 'decrement':
                    createAction.type = id
                    store.getState() === createAction.step && stepElm ? stepElm.style.backgroundColor = '#21345E' : ''
                    store.getState() >= createAction.step ? '' : createAction.step = 1
                    store.getState() > 0 && store.dispatch(createAction)
                    h1.innerText = store.getState()
                    break;

                case 'reset':
                    maxElm ? maxElm.style.backgroundColor = '#21345E' : ''
                    stepElm ? stepElm.style.backgroundColor = '#21345E' : ''

                    createAction.type = id
                    createAction.step = 0
                    max = ''
                    store.dispatch(createAction)
                    h1.innerText = store.getState()

                    break;


                case 'step_5':
                    if (!max || +e.target.innerText + store.getState() <= max) {
                        createAction.step = +e.target.innerText

                        e.target.style.background = '#5271FF'
                        e.target.nextElementSibling.style.backgroundColor = ''
                        e.target.nextElementSibling.nextElementSibling.style.backgroundColor = ''
                    }
                    break;

                case 'step_10':
                    if (!max || +e.target.innerText + store.getState() <= max) {
                        createAction.step = +e.target.innerText

                        e.target.previousElementSibling.style.backgroundColor = ''
                        e.target.style.background = '#5271FF'
                        e.target.nextElementSibling.style.backgroundColor = ''
                    }
                    break;

                case 'step_15':
                    if (!max || +e.target.innerText + store.getState() <= max) {
                        createAction.step = +e.target.innerText


                        e.target.previousElementSibling.previousElementSibling.style.backgroundColor = ''
                        e.target.previousElementSibling.style.backgroundColor = ''
                        e.target.style.background = '#5271FF'
                    }
                    break;

                case 'max_5':
                    if (!createAction.step || store.getState() <= +e.target.innerText >= createAction.step) {
                        max = +e.target.innerText

                        e.target.style.background = '#5271FF'
                        e.target.nextElementSibling.style.backgroundColor = ''
                        e.target.nextElementSibling.nextElementSibling.style.backgroundColor = ''
                    }
                    break;

                case 'max_10':

                    if (!createAction.step || createAction.step + store.getState() <= +e.target.innerText) {
                        max = +e.target.innerText
                        e.target.previousElementSibling.style.backgroundColor = ''
                        e.target.style.background = '#5271FF'
                        e.target.nextElementSibling.style.backgroundColor = ''
                    }
                    break;


                case 'max_15':
                    if (!createAction.step || store.getState() <= +e.target.innerText >= createAction.step) {
                        max = +e.target.innerText

                        e.target.previousElementSibling.previousElementSibling.style.backgroundColor = ''
                        e.target.previousElementSibling.style.backgroundColor = ''
                        e.target.style.background = '#5271FF'
                    }
                    break;
            }
        }

    })


    function reducer(state = 0, action) {

        switch (action.type) {
            case 'increment':
                return state + (action.step || 1)
            case 'decrement':
                return state - (action.step || 1)
            case 'reset':
                return 0
            default:
                return state
        }
    }

}
main()