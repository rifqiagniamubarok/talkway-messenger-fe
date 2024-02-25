import { Button, Card, Input } from '@nextui-org/react';
import Link from 'next/link';
import { AiFillMessage } from 'react-icons/ai';

import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import { setCookie } from 'cookies-next';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
    const { target } = event;

    let phone_number = target[0].value;
    let password = target[1].value;
    try {
      setIsLoading(true);
      const {
        data: { data },
      } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
        phone_number,
        password,
      });

      if (!data?.token) return;

      setCookie('token', data.token, { maxAge: 60 * 60 * 24 });
      router.push('/chat');
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-[#efeae2] h-screen w-screen flex items-center justify-center ">
      <div className="flex flex-col gap-2">
        <Link href={'/coba'}>coba</Link>
        <Card className="p-4 ">
          <div className="flex flex-col items-center w-[300px] gap-4">
            <AiFillMessage className="h-[100px] w-[100px] text-primary" />

            <div className="flex flex-col items-center">
              <p className="text-2xl">Talkaway</p>
              <p className="text-2xl">Messenger</p>
            </div>
            <div className="w-full">
              <form className="space-y-2" onSubmit={handleLogin}>
                <Input type="number" variant="bordered" label={'Phone number'} name="phone_number" className="" isRequired />
                <Input type="password" variant="bordered" label={'Password'} name="password" className="" isRequired />
                <Button className="w-full" color="primary" type="submit">
                  Login
                </Button>
                <div className="flex items gap-1 justify-center">
                  <p className="text-center">Don't have an account? </p>
                  <Link href={'/register'} className="text-primary hover:text-opacity-75">
                    Sign up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
