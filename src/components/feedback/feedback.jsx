import React from 'react';
import { Button,BlockButtons} from './feedback.styled';

export const Feedback = ({IncrementStatistics}) => {
    return (
        <BlockButtons>
      <Button type="button"  onClick={()=>IncrementStatistics("good")} >GOOD</Button>
      <Button type="button"  onClick={()=>IncrementStatistics("neutral")} >NEUTRAL</Button>
            <Button type="button" onClick={() => IncrementStatistics("bad")} >BAD</Button>
            </BlockButtons>)
}