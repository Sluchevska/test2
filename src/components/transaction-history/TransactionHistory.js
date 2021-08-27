

import PropTypes from 'prop-types'
import s from './transaction.module.css'

export default function TransationItem({items}) {
    return (
      <table className={s.transaction_history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
      <td className={s.item_type}>{item.type}</td>
      <td className={s.item_type}>{item.amount}</td>
      <td className={s.item_type}>{item.currency}</td>
    </tr>
                ))}
    
    
  </tbody>
</table>  
    )
}

TransationItem.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
  
}
