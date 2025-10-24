import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function ForgotpasswordPage({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <main className="flex items-center justify-center min-h-screen w-full p-6 lg:p-0 bg-black">
      <section className="relative container max-w-md rounded-2xl bg-white p-6 lg:p-10 text-center shadow-lg min-h-[650px]">
        {/* Background Panda Logo */}
        <Image
          src="/logo-panda-borderless.svg"
          alt="bg-panda"
          width={400}
          height={400}
          className="absolute -right-3 -bottom-10 rotate-12 opacity-10 pointer-events-none w-64 lg:w-65 z-0"
        />

        {/* Form Content */}
        <div
          className={cn("flex flex-col gap-6 relative z-10", className)}
          {...props}
        >
          <form className="flex flex-col gap-6">
            {/* Logo */}
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/login-panada.svg"
                alt="logo"
                width={236}
                height={296}
                className="h-auto w-40 md:w-52"
              />
            </div>

            <div className="text-start border-b-2 border-gray-200 mt-10">
              <h5 className="text-2xl font-bold">Find Your Account</h5>
              <p className="text-md">
                Please enter your email address to search for your account.
              </p>
            </div>

            {/* Re-type Password */}
            <div className="rounded-full p-[1px] bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
              <div className="flex items-center h-10 rounded-full bg-white px-3">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-1 items-center gap-3">
              <Button className="px-5 py-2 rounded-full text-white bg-gradient-to-b from-[#7928CA] to-[#FF0080] hover:opacity-90 transition text-sm">
                Search
              </Button>
              <div className="text-center text-sm">
                Create an Account{" "}
                <a href="/signup" className="underline underline-offset-4">
                  Sign up
                </a>
              </div>
            </div>

            {/* Google */}
            <div className="rounded-full p-[1px] bg-gradient-to-b from-[#7928CA] to-[#FF0080]">
              <Button
                variant="outline"
                className="flex items-center gap-2 rounded-full w-full px-4 py-2 
                  bg-white text-black hover:bg-gradient-to-b hover:from-[#7928CA] hover:to-[#FF0080] 
                  hover:text-white transition text-sm"
              >
                <Image
                  src="/google-icon.png"
                  alt="g-icon"
                  width={20}
                  height={20}
                />
                <span className="flex-1 text-center">Sign up with Google</span>
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
