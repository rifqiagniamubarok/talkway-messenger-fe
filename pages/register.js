import { Button, Card, Input } from '@nextui-org/react';
import Link from 'next/link';
import { AiFillMessage } from 'react-icons/ai';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleRegister = async (event) => {
    event.preventDefault();
    const { target } = event;

    try {
      setIsLoading(true);
      let name = target[0].value;
      let phone_number = target[1].value;
      let password = target[2].value;
      let confirm_password = target[3].value;

      let payload = { name, phone_number, password, confirm_password };
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/register`, payload);
      router.push('/');
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };
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
              <form className="space-y-2" onSubmit={handleRegister}>
                <Input type="text" variant="bordered" name="name" label={'Name'} className="" isRequired />
                <Input type="number" variant="bordered" name="phone_number" label={'Phone number'} className="" isRequired />
                <Input type="password" variant="bordered" name="password" label={'Password'} className="" isRequired />
                <Input type="password" variant="bordered" name="confirm_password" label={'Confirm password'} className="" isRequired />
                <Button className="w-full" color="primary" type="submit" isLoading={isLoading}>
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
