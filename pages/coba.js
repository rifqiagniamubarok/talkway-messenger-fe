import { decrement, increment, incrementByAmount, inputCustomValue } from '@/store/counter/counterSlice';
import { Button, Input } from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Coba = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [tambah, setTambah] = useState(0);
  const [newInput, setNewInput] = useState({ key: '', value: '' });
  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <div>{JSON.stringify(count)}</div>
        <span>{count.value}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <Input type="number" value={tambah} onChange={({ target }) => setTambah(target.value)} />
        <Button
          onClick={() => {
            dispatch(incrementByAmount(tambah));
          }}
        >
          Input
        </Button>
        <Input type="text" value={newInput.key} onChange={({ target }) => setNewInput({ ...newInput, key: target.value })} />
        <Input type="text" value={newInput.value} onChange={({ target }) => setNewInput({ ...newInput, value: target.value })} />
        <Button
          onClick={() => {
            dispatch(inputCustomValue(newInput));
          }}
        >
          Input
        </Button>
        <Link href={'/'}>Login</Link>
      </div>
    </div>
  );
};

export default Coba;
