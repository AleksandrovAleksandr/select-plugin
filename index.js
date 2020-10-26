import {Select} from './select/select'
import './select/styles.scss'

const select = new Select('#select', {
  placeholder: 'Укажите город Вашего проживания',
  // selectedId: '2',
  data: [
    {id: '1', value: 'Ростов-на-Дону'},
    {id: '2', value: 'Новочеркасск'},
    {id: '3', value: 'Батайск'},
    {id: '4', value: 'Азов'},
    {id: '5', value: 'Шахты'},
    {id: '6', value: 'Миллерово'},
  ],
  onSelect(item) {
    console.log('Selected Item: ', item)
  },
})

window.s = select
