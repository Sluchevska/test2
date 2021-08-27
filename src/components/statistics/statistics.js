import PropTypes from 'prop-types';
import s from './statistics.module.css'

export default function Statistics({title, stats}){
    return (
        <section className={s.statistics}>
         
            {title && <h2 className={s.title}>{title}</h2>}

        <ul className={s.stat_list}>
          
         
            {
              stats.map(stat => (
                <li className={s.item} key={stat.id} style={{backgroundColor:randomColor()}}>
      <span className={s.label}>{stat.label} </span>
      <span className={s.percentage}>{stat.percentage}%</span>
    </li>
              ))
          }
           

  </ul>
</section>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array


}

function randomColor() {
    let color =
        'rgb(' +
        Math.round(Math.random() * 255) +
        ',' +
        Math.round(Math.random() * 255) +
        ',' +
        Math.round(Math.random() * 255) +
        ')'
    return color
}