import { useEffect, useState } from 'react';
import Button from './Button';

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [parity, setParity] = useState<string>('');

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };
    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    };
    const reset = () => {
        setCount(0);
    };

    const getParity = (integer: number) => {
        return integer % 2 === 1 ? 'Odd' : 'Even';
    };

    useEffect(() => {
        const res = getParity(count);
        setParity(res);
    }, [count]);

    return (
        <>
            <h1 className="font-semibold text-4xl text-sky-500 ">
                Counter App
            </h1>
            <div className="flex flex-col justify-center items-center gap-4 text-sky-100 text-3xl ">
                <p className="">{count}</p>
                <span className="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-emerald-500 text-white rounded text-sm">
                    {parity}
                </span>
                <div className="flex flex-row justify-center items-center gap-5">
                    <Button element="-" onClick={decrement} />
                    <Button element="+" onClick={increment} />
                </div>
                <Button element="Reset" onClick={reset} />
            </div>
        </>
    );
};

export default Counter;
