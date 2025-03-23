import { SignUp } from '@clerk/nextjs';

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Verify your email
          </h2>
          <p className="mt-2 text-gray-600">
            Please complete the verification process
          </p>
        </div>
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <SignUp
            appearance={{
              elements: {
                rootBox: "mx-auto w-full",
                card: "shadow-none p-0 w-full",
                navbar: "hidden",
                header: "hidden",
                footer: "hidden"
              }
            }} 
          />
        </div>
      </div>
    </div>
  );
} 