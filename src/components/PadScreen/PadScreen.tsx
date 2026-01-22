import PadButtons from './PadButtons/PadButtons.tsx';
import * as React from 'react';

interface Props {
    pressButton: (btn: string) => void;
    text: string;
    className?: string;
}

const PadScreen: React.FC<Props> = ({pressButton, text, className}) => {
    return (
         <div className="pin-pad-wrapper">
            <div className={`screen ${className}`}>
                {text}
            </div>

             <PadButtons pressButton={pressButton} />
        </div>
    );
};

export default PadScreen;