import {BUTTONS} from '../../../Constants.ts';
import * as React from 'react';

interface Props {
    pressButton: (btn: string) => void;
}

const PadButtons: React.FC<Props> = ({pressButton}) => {
    return (
       <div className="button-grid">
           {BUTTONS.map((btn: string) => (
               <button
                   key={btn}
                   className="key-button"
                   onClick={() => (pressButton(btn))}
               >
                   {btn}
               </button>
           ))}
       </div>
    );
};

export default PadButtons;