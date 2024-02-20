import { Button, Card, Input } from '@nextui-org/react';
import Link from 'next/link';
import { AiFillMessage } from 'react-icons/ai';

import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const handleLogin = (e) => {
    e.preventDefault();
    router.push('/chat');
  };
  return (
    <div className="bg-[#efeae2] h-screen w-screen flex items-center justify-center ">
      <div className="flex flex-col gap-2">
        <Card className="p-4 ">
          <div className="flex flex-col items-center w-[300px] gap-4">
            <AiFillMessage className="h-[100px] w-[100px] text-primary" />

            <div className="flex flex-col items-center">
              <p className="text-2xl">Talkaway</p>
              <p className="text-2xl">Messenger</p>
            </div>
            <div className="w-full">
              <form className="space-y-2" onSubmit={handleLogin}>
                <Input type="number" variant="bordered" label={'Phone number'} className="" isRequired />
                <Input type="password" variant="bordered" label={'Password'} className="" isRequired />
                <Button className="w-full" color="primary" type="submit">
                  Login
                </Button>
                <div className="flex items gap-1 justify-center">
                  <p className="text-center">Don't have an account? </p>
                  <Link href={'/'} className="text-primary hover:text-opacity-75">
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
