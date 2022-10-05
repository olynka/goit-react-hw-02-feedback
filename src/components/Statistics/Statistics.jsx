import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsBloc,StatisticsUl,StatisticsLi } from './Statistics.styled';


export const Statistics = ({
good,
  neutral,
  bad,
  total,
  goodPercent,
 
}) => {
   return(
       <StatisticsBloc >
           <StatisticsUl>
      <StatisticsLi> Good:{good}</StatisticsLi>
      <StatisticsLi>Neutral:{neutral}</StatisticsLi>
      <StatisticsLi>Bad:{bad}</StatisticsLi>
      <StatisticsLi>Total:{total}</StatisticsLi>
     <StatisticsLi>GoodPercent:{goodPercent}%</StatisticsLi>
        
            </StatisticsUl >
        </StatisticsBloc >   )
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};