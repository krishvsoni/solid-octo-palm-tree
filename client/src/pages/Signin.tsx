import React from 'react';
import { Link } from 'react-router-dom';
import { Label, Input, Button } from '@/components/ui';

const SignIn = () => {
  return (
    <div className="mx-auto space-y-6 max-w-sm">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Don't have an account?
          <Link className="underline" to="/signup">
            Sign up
          </Link>
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" type="email" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link className="ml-auto inline-block" to="/forgot-password">
              Forgot password?
            </Link>
          </div>
          <Input id="password" type="password" />
        </div>
        <Button className="w-full">Sign In</Button>
      </div>
    </div>
  );
};

export default SignIn;