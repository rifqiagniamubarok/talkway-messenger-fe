import { Button, Card, Input } from '@nextui-org/react';
import Link from 'next/link';
import { AiFillMessage } from 'react-icons/ai';

const Register = () => {
  return (
    <div className="bg-[#efeae2] h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col gap-2">
        <Card className="p-4 ">
          <div className="flex flex-col items-center w-[300px] gap-4">
            <AiFillMessage className="h-[100px] w-[100px] text-primary" />

            <div className="flex flex-col items-center">
              <p className="text-2xl">Talkaway</p>
              <p className="text-2xl">Messenger</p>
            </div>
            <div className="w-full">
              <form className="space-y-2">
                <Input type="text" variant="bordered" label={'Name'} className="" />
                <Input type="number" variant="bordered" label={'Phone number'} className="" />
                <Input type="password" variant="bordered" label={'Password'} className="" />
                <Input type="password" variant="bordered" label={'Confirm password'} className="" />
                <Button className="w-full" color="primary">
                  Sign Up
                </Button>

                <div className="flex items gap-1 justify-center">
                  <p className="text-center">Have an account? </p>
                  <Link href={'/'} className="text-primary hover:text-opacity-75">
                    Sign in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Register;
